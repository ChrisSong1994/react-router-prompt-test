import React, { Suspense } from "react";
import { Route, Switch, HashRouter, Link, Prompt } from "react-router-dom";

import { Modal, Button } from "antd";

const Router = () => {
  return (
    <Suspense fallback={"加载中..."}>
      <HashRouter
        getUserConfirmation={(result, callback) => {
          // result是message 执行的结果
          Modal.confirm({
            content: result,
            okText: "确认",
            cancelText: "取消",
            onOk: () => callback(true),
            onCancel: () => callback(false),
          });
        }}
      >
        <Link to="/">
          <Button>Home</Button>
        </Link>

        <Link to="/edit">
          <Button>About</Button>
        </Link>

        <Switch>
          <Route exact path="/">
            <h2>Home</h2>
          </Route>
          <Route path="/edit">
            <div>
              <h2>Edit</h2>
              <Prompt
                when={true}
                message={(location, action) => {
                  return "你确定要离开？";
                }}
              />
            </div>
          </Route>
        </Switch>
      </HashRouter>
    </Suspense>
  );
};

export default Router;
