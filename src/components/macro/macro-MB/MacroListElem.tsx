import React from "react";
import { MacroTopic } from "../../../state/macro/macroTopicList";
import PlusMinusIcons from "./PlusMinusIcons";
import { useMacroConsumer, UseMacroInterface } from "./useMacro";
import { classNames } from "../../../utils/tailwind-utils";
import { EMPTY_CHECK_ICON, FULL_CHECK_ICON } from "./icons/checked-icons";
import MyNumInput from "../../layouts/layout-MB/MyNumInput";

interface MacroListElemProps {
  macro: MacroTopic;
}

const MacroListElem: React.FC<MacroListElemProps> = ({ macro }) => {
  const myHook: UseMacroInterface = useMacroConsumer();

  const myGradient = macro.selectedNumber > 0 ? "bg-primary " : "bg-white";
  const myTextColor =
    macro.selectedNumber > 0 ? "text-primary-contrast" : "text-primary";

  return (
    <div className="flex w-full flex-col px-4 py-2">
      <div
        id="top-part"
        onClick={() => myHook.handleCheckUncheck(macro.id)}
        className="flex h-7 flex-row items-center justify-start rounded-t-lg border border-info px-3"
      >
        <div className="flex flex-row text-body-mb font-h2-mb">
          <div className="pr-2">
            {macro.selectedNumber > 0 ? FULL_CHECK_ICON : EMPTY_CHECK_ICON}
          </div>
          <h2 style={{ userSelect: "none" }}>{macro.name}</h2>
        </div>
      </div>

      <div
        id="bottom-part"
        className="flex w-full flex-row rounded-b-lg shadow-md shadow-slate-200"
      >
        <div
          id="left-bottom"
          className={classNames(
            myGradient,
            "flex flex-row rounded-bl-lg text-white",
          )}
        >
          <div className="flex flex-row rounded-bl-lg rounded-tr-2xl bg-info text-white">
            <div className="flex flex-col items-center justify-center px-4 py-2">
              <p className="text-info-mb" style={{ userSelect: "none" }}>
                Quiz Totali:
              </p>
              <p style={{ userSelect: "none" }}> {macro.quizTot}</p>
            </div>
            <div className="flex flex-col items-center justify-center px-4">
              <p className="text-info-mb" style={{ userSelect: "none" }}>
                Svolti:{" "}
              </p>
              <p style={{ userSelect: "none" }}>{macro.completedPercentage}%</p>
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
              onAction={() => myHook.handleSub(macro.id)}
              style={macro.selectedNumber > 0}
            />

            <div>
              <MyNumInput
                value={macro.selectedNumber}
                handleChange={(num: number) =>
                  myHook.handleChangeSelected(macro.id, num)
                }
                style={macro.selectedNumber > 0}
              />
            </div>

            <PlusMinusIcons
              type="plus"
              onAction={() => myHook.handleAdd(macro.id)}
              style={macro.selectedNumber > 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacroListElem;
