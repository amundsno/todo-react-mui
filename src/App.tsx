import { ColorModeProvider } from "./context/ColorModeContext";
import TodoDashboard from "./features/TodoDashboard";

export default function App() {
  return (
    <ColorModeProvider>
      <TodoDashboard />
    </ColorModeProvider>
  );
}
