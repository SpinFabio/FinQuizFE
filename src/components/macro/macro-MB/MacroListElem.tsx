import React from "react";
import { MacroTopic } from "../../../state/macro/macroTopicList";
import PlusMinusIcons from "./PlusMinusIcons";
import { useMacroConsumer, UseMacroInterface } from "./useMacro";
import { classNames } from "../../../utils/tailwind-utils";

interface MacroListElemProps {
  macro: MacroTopic;
}

const MacroListElem: React.FC<MacroListElemProps> = ({ macro }) => {
  const macroHook: UseMacroInterface = useMacroConsumer();

  //console.log(macro);

  const myGradient =
    macro.selectedNumber > 0
      ? "bg-gradient-to-b from-primary to-primary-dark"
      : "bg-white";
  const myTextColor =
    macro.selectedNumber > 0 ? "text-primary-contrast" : "text-primary";

  return (
    <div className="flex w-full flex-col px-4 py-3">
      <div
        id="top-part"
        className="flex h-7 flex-row items-center justify-start rounded-t-lg border border-info px-4"
      >
        <div className="text-body-mb font-h2-mb">
          <h2>{macro.name}</h2>
        </div>
      </div>

      <div
        id="bottom-part"
        className="flex w-full flex-row rounded-b-lg shadow-md shadow-slate-300"
      >
        <div
          id="left-bottom"
          className={classNames(
            myGradient,
            "flex flex-row rounded-bl-lg text-white",
          )}
        >
          <div className="flex flex-row rounded-bl-lg rounded-tr-2xl bg-info text-white">
            <div className="flex flex-col items-center justify-center px-4 py-3">
              <p className="text-info-mb">Quiz Totali:</p>
              <p> {macro.quizTot}</p>
            </div>
            <div className="flex flex-col items-center justify-center px-4 py-3">
              <p className="text-info-mb">Svolti: </p>
              <p>{macro.completedPercentage}%</p>
            </div>
          </div>
        </div>
        <div
          id="right-bottom"
          className="flex flex-grow flex-row items-center justify-evenly rounded-br-lg bg-info"
        >
          <div
            className={classNames(
              myGradient,
              myTextColor,
              "flex h-full flex-grow flex-row items-center justify-evenly rounded-bl-2xl rounded-br-lg text-h2-mb font-h2-mb",
            )}
          >
            <PlusMinusIcons
              type="minus"
              onAction={() => macroHook.handleSub(macro.id)}
              style={macro.selectedNumber > 0}
            />
            <input
              type="text"
              value={" " + macroHook.macroState[macro.id - 1].selectedNumber}
              onChange={(e) =>
                macroHook.handleChangeSelected(macro.id, Number(e.target.value))
              }
              className="flex w-auto bg-transparent"
              style={{
                width: `${macro.selectedNumber.toString().length + 1}ch`,
              }}
            />
            <PlusMinusIcons
              type="plus"
              onAction={() => macroHook.handleAdd(macro.id)}
              style={macro.selectedNumber > 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacroListElem;
