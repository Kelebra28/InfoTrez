import React from 'react';
import Autosuggest from 'react-autosuggest';


const languages = [
  {
    area: 'Servicios',
    url : '/servicios'
  },
  {
    area: 'Remedios Comerciales',
    url : '/Servicios/RemediosC'
  },
  {
    area: 'Anti-subvenciones',
    url : '/Servicios/RemediosC'
  },
  {
    area: 'Salvaguardias',
    url : '/Servicios/RemediosC'
  },
  {
    area: 'Exámenes de vigencia',
    url : '/Servicios/RemediosC'
  },
  {
    area: 'Revisiones anuales',
    url : '/Servicios/RemediosC'
  },
  {
    area: 'Anti - elusión',
    url : '/Servicios/RemediosC'
  },
  {
    area: 'Cobertura de producto',
    url : '/Servicios/RemediosC'
  },
  {
    area: '"Paneles TLC -TMEC',
    url : '/DisputasComerciales'
  },
  {
    area: 'Paneles OMC',
    url : '/DisputasComerciales'
  },
  {
    area: 'Recursos de revocación',
    url : '/LitigiosAntidumping/'
  },
  {
    area: 'Juicios de nulidad',
    url : '/LitigiosAntidumping/'
  },
  {
    area: 'Amparos',
    url : '/LitigiosAntidumping/'
  },
  {
    area: 'Peritajes',
    url : '/LitigiosAntidumping/'
  },
  {
    area: 'Análisis de importaciones',
    url : '/EconomiaLitigios/'
  },
  {
    area: 'Márgenes de dumping',
    url : '/EconomiaLitigios/'
  },
  {
    area: 'Daño a la industria',
    url : '/EconomiaLitigios/'
  },
  {
    area: 'Cálculo de Subvenciones',
    url : '/EconomiaLitigios/'
  },{
    area: 'Verificaciones “in situ”',
    url : '/EconomiaLitigios/'
  },
  {
    area: 'Monitoreo de precios',
    url : '/MonitoreoEstrategico/'
  },
  {
    area: 'Alertas Anti-Dumping',
    url : 'MonitoreoEstrategico/'
  },
  {
    area: 'Riesgo antidumping en USA',
    url : '/Mx-USA-TradePlanning/'
  },
  {
    area: 'Cuestionarios DOC y ITC',
    url : '/Mx-USA-TradePlanning/'
  },
  {
    area: 'Verificaciones in situ USDOC',
    url : '/Mx-USA-TradePlanning/'
  },
  {
    area: 'Agropecuario',
    url : '/Industrias'
  },
  {
    area: 'Manufacturero',
    url : '/Industrias'
  },
  {
    area: 'Consumo Final',
    url : '/Industrias'
  }
]

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.area.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.area;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.area}
  </div>
);

class AutoComplete extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default AutoComplete;