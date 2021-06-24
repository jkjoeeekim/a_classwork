class UsersController < ApplicationController
  before_action :require_logged_in, only: [:show, :destroy]
  before_action :require_logged_out, only: [:new, :create]

  def index
    @users = User.all
    render :index
  end
  
  def show
    @user = User.find(params[:id])
    render :show
  end

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in_user!(@user)
      redirect_to user_url(@user.id)
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to new_user_url
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.delete!
    redirect_to new_session_url
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
