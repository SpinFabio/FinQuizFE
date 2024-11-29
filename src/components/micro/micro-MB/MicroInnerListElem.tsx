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
  macroId:number;
}

const MicroInnerListElem: React.FC<MicroInnerListElemProps> = ({
  microTopic,
  isLast,
  macroId
}) => {

  const myHook=useMicroConsumer()

  return (
    <>
      <div
        className={classNames(
          "border-l border-r",
          isLast ? "rounded-bl-xl" : "",
        )}
      >
        <div className="flex flex-row justify-between rounded-b-xl">
          <div className="flex flex-grow rounded-bl-xl border-b py-2">
            <div className="pl-2 pr-1">
              {microTopic.isChecked ? FULL_CHECK_ICON : EMPTY_CHECK_ICON}
            </div>
            {microTopic.nameMicro}
          </div>
          <div
            className={classNames(
              "w-10 flex-shrink-0 text-primary-contrast  border-white",
              isLast ? "bg-white" : "bg-primary",
            )}
          >
            <div className="flex h-full border-b-2 border-white w-full flex-col justify-center rounded-b-xl bg-gradient-to-b from-primary to-primary-dark py-2 text-center">
              <div className="item flex h-6 w-full flex-row justify-evenly">
                <PlusMinusIcons type="minus" style={true} onAction={() => myHook.handleSub(macroId,microTopic.idMicro)}  />
                <input
                  type="text"
                  value={microTopic.selectedNumber}
                  className="flex w-auto bg-transparent"
                  style={{
                    width: `${microTopic.selectedNumber.toString().length}ch`,
                  }}
                />
                <PlusMinusIcons type="plus" style={true} onAction={()=>myHook.handleAdd(macroId,microTopic.idMicro)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroInnerListElem;
