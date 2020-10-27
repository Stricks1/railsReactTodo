# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Todo, type: :model do
  describe '#To-Dos' do
    let(:todo) { build(:todo) }
    it 'should not allow empty description' do
      todo.description = nil
      todo.save
      expect(todo.errors[:description]).to include("can't be blank")
    end
    it 'should allow only true or false on completed' do
      todo.completed = nil
      todo.save
      expect(todo.errors[:completed]).to include('is not included in the list')
      todo.completed = false
      todo.save
      expect(todo.errors[:completed]).to_not
      include('is not included in the list')
      todo.completed = true
      todo.save
      expect(todo.errors[:completed]).to_not
      include('is not included in the list')
    end
    it 'should include when todo is filled with description and completed' do
      todo.save
      expect(Todo.last).to eq(todo)
    end
  end
end
