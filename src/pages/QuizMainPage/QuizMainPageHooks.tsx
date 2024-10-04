import {useState} from "react";
import {Quiz} from "./dummyData.ts";

export const quizManagerHook = (quizArray : Quiz[])=>{
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevEnable,setPrevEnable]= useState(false);
  const [nextEnable, setNextEnable]= useState(true);
  const [flagged, setFlagged]= useState(quizArray[currentIndex].flagged);
  const [currentQuiz, setCurrentQuiz]= useState(quizArray[currentIndex]);
  const [currentSelectedAnsw, setCurrentSelectedAnsw]= useState(quizArray[currentIndex].userAnsware);

  const handleClickPrev= ()=>{
    if(currentIndex > 0 && prevEnable){
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setCurrentQuiz(quizArray[newIndex]);


      setCurrentSelectedAnsw(quizArray[newIndex].userAnsware);
      setFlagged(quizArray[newIndex].flagged)
      setPrevEnable(newIndex > 0);
      setNextEnable(true)
    }
  }

  const handleClickNext=()=>{
    if(currentIndex<(quizArray.length-1) &&  nextEnable ){
      const newIndex= currentIndex+1;
      setCurrentIndex(newIndex);
      setCurrentQuiz(quizArray[newIndex]);

      setCurrentSelectedAnsw(quizArray[newIndex].userAnsware);
      setFlagged(quizArray[newIndex].flagged)
      setPrevEnable(true);
      setNextEnable(newIndex<(quizArray.length-1));
    }
  };

  const handleClickFlag=()=>{
    let currentFlag : boolean = quizArray[currentIndex].flagged;
    quizArray[currentIndex].flagged= !currentFlag;
    setFlagged(!currentFlag);
  }

  const handleRadioButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => { // ricordati che sta roba la devi poi mettere dentro al <Radio onClick={handleRadioButtonClick}/>
    const target = event.target as HTMLInputElement;
    const selectedAnswer = target.value;

    if (selectedAnswer === currentSelectedAnsw) {
      //console.log("Deselezionato");
      setCurrentSelectedAnsw(''); // Deseleziona
      currentQuiz.userAnsware = ''; // Resetta la risposta nel quiz corrente
    } else {
      //console.log("Selezionato: ", selectedAnswer);
      setCurrentSelectedAnsw(selectedAnswer); // Seleziona la nuova risposta
      currentQuiz.userAnsware = selectedAnswer;
    }
  };

  const handleNavListClick=(index: number)=>{
    setCurrentIndex(index);
    setCurrentQuiz(quizArray[index]);
    setFlagged(quizArray[index].flagged)
    setNextEnable(index<(quizArray.length-1));
    setPrevEnable(index > 0);


  }

  return{currentIndex, prevEnable, flagged, currentQuiz, nextEnable, currentSelectedAnsw,handleClickPrev, handleClickFlag, handleClickNext,handleRadioButtonClick,handleNavListClick,}
}