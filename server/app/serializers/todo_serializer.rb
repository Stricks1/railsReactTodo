# frozen_string_literal: true

class TodoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :description, :completed
end
