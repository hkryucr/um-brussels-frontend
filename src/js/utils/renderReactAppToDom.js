import { render } from "react-dom";

export default function renderReactAppToDOM(reactNode, htmlTarget) {
  return render(reactNode, htmlTarget, () => {console.log("testing:rendered react element")});
}