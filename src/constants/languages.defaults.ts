import { Languages } from '@/constants/languages.enum';

const pythonDefault = `# Comentario: función de ejemplo con múltiples características
import math
from typing import List, Dict

class Calculadora:
    PI = 3.14159  # Constante de clase

    def __init__(self, nombre: str):
        self.nombre = nombre
        self.historial: List[Dict[str, float]] = []

    def sumar(self, a: float, b: float) -> float:
        resultado = a + b
        self._registrar("suma", resultado)
        return resultado

    def _registrar(self, operacion: str, resultado: float):
        self.historial.append({"operacion": operacion, "resultado": resultado})

    @staticmethod
    def raiz_cuadrada(x: float) -> float:
        if x < 0:
            raise ValueError("No se puede calcular la raíz de un número negativo")
        return math.sqrt(x)

if __name__ == "__main__":
    # Uso de la clase
    calc = Calculadora("MiCalc")
    resultado = calc.sumar(5, 3)
    print(f"Resultado: {resultado}")
    print("Raíz:", Calculadora.raiz_cuadrada(9))
`;

export const defaultValues: Record<Languages, string> = {
  [Languages.javascript]: `console.log("Hello, JavaScript!");`,
  [Languages.typescript]: `const message: string = "Hello, TypeScript!";\nconsole.log(message);`,
  [Languages.html]: `<h1>Hello, HTML!</h1>`,
  [Languages.css]: `body {\n  background-color: #f0f0f0;\n}`,
  [Languages.python]: pythonDefault,
};
