import React, { Component } from 'react';
import './App.css';
import * as Survey from 'survey-react'; //traemo todo survey-react para agregrarlo
import config from './survey.js';
import Language from './Language';
import 'react-dropdown/style.css'

Survey.Survey.csstype = "bootstrap" //le indicamos que la survey va a usar al libreria de boopstrap que trae


class App extends Component {
  state = {
    locale: {
      value: "es"
   }
  }



  onChange = () => {
    console.log('lol');
  }

  saveProgress = (progress) => {
      console.log("SAVING", progress);
  }

  synServer = (options) => {
    options.showDataSavingClear('Encuesta almacenada exitosamente')
  }

  surveyComplete = (surveysComplete, optionsComplete) => {
    console.log('OPTIONSCOMPLETE', optionsComplete)
    console.log('SURVEYSCOMPLETE', surveysComplete)
    let texto=''
    !surveysComplete.data.PA3 ? texto='PA3 no existe' : texto = 'Guardando encuesta'

    optionsComplete.showDataSaving (texto)
    setTimeout (()=>{
      optionsComplete.showDataSavingSuccess('Escuesta guardada exitosamente')
    }, 3000);
    console.log(config.locale);
  }

  surveyValidateQuestion = (surveysValidator, optionsValidator) =>{
    console.log('OPTIONS', optionsValidator)
    console.log('SURVEYS', surveysValidator)
  }

  onValueChanged = (surveyChanged,optionsChanged) => {
    console.log('OPTIONSCHANGED', optionsChanged)
    console.log('SURVEYCHANGED', surveyChanged)
  }

  _onSelect = (option) => {
    console.log('VALUE', option)
    this.setState({ locale: option }, () => {
      console.log('LOCALE', this.state.locale.value)
      console.log('que valor será',option.value)
    })
  }

  render() {

    config.locale = this.state.locale.value  // Agregamos el valor de option a locale del survey
    return (
      <div className="App">
        <Language
          onSelect={this._onSelect}
          locale={this.state.locale}
          color={'#00000'}
        />
        <Survey.Survey
          json={config} //configuracion del surveys
          data={this.state} //donde se guardan los datos (componente)
          onCurrentPageChanged={this.saveProgress} //para almacenar la respesta de la pregunta
          onComplete={this.surveyComplete} //encuesta completa
          onValidateQuestion={this.surveyValidateQuestion} //validar los triggers, condiciones y validaciones
          onValueChanged={this.onValueChanged}// cada que cambia el valor de pregunta
        />
      </div>
    );
  }
}
export default App;
