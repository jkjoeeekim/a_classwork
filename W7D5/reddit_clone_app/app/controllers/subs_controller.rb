class SubsController < ApplicationController
  before_action :require_moderator, only: [:edit, :udpate, :destroy]

  def show
    @sub = Sub.find(params[:id])
    @posts = Post.all.select { |post| post.sub_id == @sub.id }
    render :show
  end

  def index
    @subs = Sub.all
    render :index
  end

  def new
    @sub = Sub.new
    @user = User.find(params[:user_id])
    render :new
  end

  def create
    @sub = Sub.new(sub_params)
    @sub.moderator_id = params[:sub][:moderator_id]
    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :new
    end
  end

  def edit
    @sub = Sub.find(params[:id])
    render :edit
  end

  def update
    @sub = Sub.find(params[:id])
    @sub.update(title: params[:sub][:title], description: params[:sub][:description], moderator_id: params[:sub][:moderator_id])
    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :edit
    end
  end

  private
  def sub_params
    params.require(:sub).permit(:title, :description)
  end
end
