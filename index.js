function test (foo) {
  return foo != null
    ? Math.max(0, Math.min(1, 10))
    : 0
}

test()
