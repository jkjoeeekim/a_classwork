class ApplicationController < ActionController::Base
  helper_method :logged_in?, :current_user, :is_moderator?, :current_sub, :is_author?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def current_sub
    @current_sub = params[:sub_id].nil? ? Sub.find(@post.sub_id) : Sub.find(params[:sub_id])
    # @current_sub = Sub.find(params[:sub_id])
    # (@current_sub = Sub.find(@post.sub_id)) if @current_sub.nil?
  end

  def sub_moderator
    @sub = Sub.find(params[:id])
    @sub_moderator = User.find(@sub.moderator_id)
  end

  def post_author
    @post = Post.find(params[:id])
    @post_author = User.find(@post.author_id)
  end

  def logged_in?
    !!current_user
  end

  def is_moderator?
    current_user.id == sub_moderator.id
  end

  def is_author?
    current_user.id == post_author.id
  end

  def logout_user
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def login_user!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end

  def require_logged_out
    redirect_to users_url if logged_in?
  end

  def require_moderator
    unless is_moderator?
      flash[:errors] = ["You don't have access to edit this subforum"]
      redirect_to sub_url(params[:id])
    end
  end

  def require_author
    unless is_author?
      flash[:errors] = ["You don't have access to edit this post"]
      redirect_to post_url(params[:id])
    end
  end
end
