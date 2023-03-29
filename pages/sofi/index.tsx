import { Sofi, Sofi2 } from "@/components/Sofi";
import { Layout } from "@/layouts/Layout";
import React from "react";

const test = () => {
  return (
    <Layout>
      <div>
        <Sofi name={"Sofi"} lastName={"Vanegas"} email={"s@c.com"} age={22} />
        <Sofi name={"Venus"} lastName={"Vanegas"} email={"v@c.com"} age={45} />
        <Sofi2>
          <span>Sofi 1</span>
        </Sofi2>
        <Sofi2>
          <span>Sofi 2</span>
        </Sofi2>
      </div>
    </Layout>
  );
};

export default test;
