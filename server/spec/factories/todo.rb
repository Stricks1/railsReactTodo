# frozen_string_literal: true

FactoryBot.define do
  factory :todo do
    description { Faker::ChuckNorris.fact }
    completed { Faker::Boolean.boolean }
  end
end
