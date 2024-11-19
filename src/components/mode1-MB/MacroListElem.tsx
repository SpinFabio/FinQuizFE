import React, { useContext } from "react";
import { MacroTopic } from "../../state/mode1/macroTopicList";
import PlusMinusIcons from "./PlusMinusIcons";
import { Mode1Context } from "./Mode1Context";

interface MacroListElemProps {
  macro: MacroTopic;
}

const MacroListElem: React.FC<MacroListElemProps> = ({ macro }) => {

  return (
    <div className="flex w-full flex-col px-4 py-3  ">
      <div
        id="top-part"
        className="flex h-7 flex-row items-center justify-start rounded-t-lg border border-info"
      >
        <div className="px-4 pt-1">
          <input type="checkbox" />
        </div>
        <div className="text-body-mb font-h2-mb">
          <h2>{macro.nome}</h2>
        </div>
      </div>

      <div id="bottom-part" className="flex w-full flex-row rounded-b-lg shadow-md shadow-slate-300">
        <div
          id="left-bottom"
          className="flex flex-row rounded-bl-lg bg-gradient-to-b from-primary to-primary-dark text-white"
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
          <div className="flex h-full flex-grow flex-row items-center justify-evenly rounded-bl-2xl rounded-br-lg bg-gradient-to-b from-primary to-primary-dark text-h2-mb font-h2-mb text-primary-contrast">
            <PlusMinusIcons type="minus" />
            <p>{macro.selectednumber}</p>
            <PlusMinusIcons type="plus" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacroListElem;
