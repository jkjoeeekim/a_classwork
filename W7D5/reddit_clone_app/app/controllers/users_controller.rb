class UsersController < ApplicationController
  before_action :require_logged_in, only: [:show, :edit, :update, :destroy, :index]
  before_action :require_logged_out, only: [:create, :new] 

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    @users = User.all
    render :index
  end

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login_user!(@user)
      redirect_to users_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
    render :edit
  end

  def update
    @user = User.find(params[:id])
    @user.update(username: params[:user][:username], password: params[:user][:password])

    if @user.save
      redirect_to user_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :edit
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to new_session_url
    # if @user.destroy
    #   redirect_to users_url
    # else
    #   flash.now[:errors] = ['Cannot destroy this user']
    # end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
