class ApplicationController < ActionController::Base


  def current_user
    User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_session_token
  end

  def logout
    session[:session_token] = nil
  end
  
end
