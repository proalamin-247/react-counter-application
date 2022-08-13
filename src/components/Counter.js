import React from 'react'

export default function Counter() {
  return (
      <div class="text-center bg-white p-4 space-y-5 bg-white rounded shadow">
          <div>
              <h1 class="text-2xl text-semibold" id="counter">0</h1>
          </div>
          <div class="space-x-2">
              <button class="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment">
                  Increment
              </button>
              <button class="bg-red-400 text-white px-3 py-2 rounded shadow" id="decrement">
                  Decrement
              </button>
          </div>
      </div>
  )
}
