# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Todo', type: :request do
  let(:todo) { create(:todo, description: 'Test Todo') }
  let(:todo2) { create(:todo, description: 'Test Todo2') }
  describe '#To-Dos' do
    it 'gets todos' do
      get '/todos'
      expect(response).to be_successful
    end
    it 'list all todos' do
      todo
      todo2
      get '/todos'
      expect(response.body).to include('Test Todo')
      expect(response.body).to include('Test Todo2')
    end
    it 'creates a new todo' do
      post '/todos',
           params: { todo: { description: 'new todo', completed: false } }
      expect(response.body).to include('new todo')
    end
    it 'updates a todo' do
      todo
      todo2
      patch '/todos/1', params: { completed: true }
      expect(response.body).to include('true')
    end
    it 'destroys a todo' do
      todo
      todo2
      delete '/todos/2'
      get '/todos'
      expect(response.body).to_not include('Test Todo2')
    end
  end
end
