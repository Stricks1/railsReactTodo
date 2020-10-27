# frozen_string_literal: true

class TodosController < ApplicationController
  before_action :todo, only: %i[show update destroy]

  def index
    @todos = Todo.order_created
    render json: TodoSerializer.new(@todos).serialized_json, status: :ok
  end

  def show
    render json: TodoSerializer.new(@todo).serialized_json
  end

  def create
    todo = Todo.create!(todo_params)

    if todo
      render json: TodoSerializer.new(todo).serialized_json
    else
      render json: { status: 500 }
    end
  end

  def update
    if @todo.update(
      completed: params['completed'],
      description: params['description'],
    )
      render json: TodoSerializer.new(@todo).serialized_json
    else
      render json: { status: 500 }
    end
  end

  def destroy
    if @todo.destroy
      render json: { status: 'destroyed' }
    else
      render json: { status: 500 }
    end
  end

  private

  def todo
    @todo ||= Todo.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:description, :completed)
  end
end
