class PostsController < ApplicationController
  before_action :require_author, only: [:edit, :update, :destroy]

  def new
    @post = Post.new
    render :new
  end

  def create
    @post = Post.new(post_params)
    @sub = Sub.find(params[:sub_id])
    @post.sub_id = params[:post][:sub_id]
    @post.author_id = params[:post][:author_id]
    if @post.save
      @post.save!
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def edit
    @post = Post.find(params[:id])
    render :edit
  end

  def update
    @post = Post.find(params[:id])
    @post.update(title: params[:post][:title], url: params[:post][:url], content: params[:post][:content])
    if @post.save
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to sub_url(@post.sub_id)
  end

  private
  def post_params
    params.require(:post).permit(:title, :url, :content)
  end
end
