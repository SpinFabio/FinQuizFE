import React from "react";
import {
  MacroMicroData,
  MicroTopic,
} from "../../../state/micro/microTopicList";
import { classNames } from "../../../utils/tailwind-utils";
import {
  EMPTY_CHECK_ICON,
  FULL_CHECK_ICON,
} from "../../macro/macro-MB/icons/checked-icons";
import PlusMinusIcons from "../../macro/macro-MB/PlusMinusIcons";
import { useMicroConsumer } from "./useMicro";

interface MicroInnerListElemProps {
  microTopic: MicroTopic;
  isLast: boolean;
  macroId: number;
}

const MicroInnerListElem: React.FC<MicroInnerListElemProps> = ({
  microTopic,
  isLast,
  macroId,
}) => {
  const myHook = useMicroConsumer();
  const isSelected: boolean = microTopic.selectedNumber > 0;

  return (
    <>
      <div
        className={classNames(
          "bg border-b border-l border-r",
          isLast ? "rounded-bl-xl rounded-br-3xl" : "",
        )}
      >
        <div className="flex flex-row justify-between">
          <div className={classNames("flex flex-grow py-2")}>
            <div className="flex items-center justify-center pl-2 pr-1">
              {isSelected ? FULL_CHECK_ICON : EMPTY_CHECK_ICON}
            </div>
            <div className="flex items-center justify-center">
              {microTopic.nameMicro}
            </div>
          </div>
          <div
            className={classNames(
              "w-10 flex-shrink-0 border-white text-primary-contrast",
              isLast ? "rounded-b-3xl" : "",
              isSelected ? "bg-primary" : "bg-white",
            )}
          >
            <div className="flex h-full w-full flex-col justify-center rounded-b-xl py-2 text-center">
              <div className="item flex h-6 w-full flex-row justify-evenly">
                <PlusMinusIcons
                  type="minus"
                  style={isSelected}
                  onAction={() => myHook.handleSub(macroId, microTopic.idMicro)}
                />
                <input
                  type="text"
                  value={microTopic.selectedNumber}
                  className={classNames(
                    "flex w-auto bg-transparent",
                    isSelected ? "text-white" : "text-primary",
                  )}
                  style={{
                    width: `${microTopic.selectedNumber.toString().length}ch`,
                  }}
                />
                <PlusMinusIcons
                  type="plus"
                  style={isSelected}
                  onAction={() => myHook.handleAdd(macroId, microTopic.idMicro)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroInnerListElem;
