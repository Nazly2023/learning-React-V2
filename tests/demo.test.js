describe("Pruebas en <DemoComponent />", () => {
  test("This test should not to fail", () => {
    //1. Inicialización
    const message = "Hi! World";

    //2. Estimulo
    const message1 = message.trim();

    // 3. Observar el comportamiento... esperado
    expect(message).toBe(message1);
  });
});
