# frozen_string_literal: true

class Todo < ApplicationRecord
  validates :description, presence: true
  validates :completed, inclusion: { in: [true, false] }

  scope :order_created, -> { order(created_at: :asc) }
end
