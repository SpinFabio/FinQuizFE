import React, { useState } from "react";
import AuthPage from '../AuthPage/AuthPage';

const TestPage: React.FC = () => {
  return (
    <AuthPage/>
  );
};

function classNames(...classes: string[]): string {
  return classes.join(` `);
}

export default TestPage;
