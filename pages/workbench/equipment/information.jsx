import { Button } from "antd";
import { createContext } from "react";
import { useContext } from "react";
import WorkbenchLayout from "../../../layout/WorkbenchLayout";

const ContextDemo = createContext("default");

export default function Information() {
  return (
    <div>
      <ContextDemo.Provider value="wow">
        <Demo1 />
      </ContextDemo.Provider>
    </div>
  );
}

function Demo1() {
  return <Demo2 />;
}
function Demo2() {
  const contextDemo = useContext(ContextDemo);
  return (
    <div>
      information
      {contextDemo}
      <Button
        onClick={() => {
          // console.log(user);
          console.log(contextDemo);
        }}
      >
        user
      </Button>
    </div>
  );
}

Information.getLayout = function getLayout(page) {
  return <WorkbenchLayout>{page}</WorkbenchLayout>;
};
