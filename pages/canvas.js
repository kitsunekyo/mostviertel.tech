import { PaintCanvas } from "src/components/PaintCanvas";
import { Layout } from "src/components/Layout";

export default function Canvas() {
  return (
    <Layout>
      <div className="p-6">
        <div className="contained">
          <PaintCanvas />
        </div>
      </div>
    </Layout>
  );
}
