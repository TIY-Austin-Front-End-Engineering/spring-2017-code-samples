export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      quotes: [
        { author: "Raven, The", quote: "Nevermore", flipped: false },
        { author: "Rave, The", quote: "PartyMore", flipped: false },
        { author: "Rave, The", quote: "PartyMore", flipped: false },
        { author: "Rave, The", quote: "PartyMore", flipped: false },
        { author: "Rave, The", quote: "PartyMore", flipped: false },
        { author: "Rave, The", quote: "PartyMore", flipped: false },
        { author: "Rave, The", quote: "PartyMore", flipped: false },
        { author: "Rave, The", quote: "PartyMore", flipped: false },
        { author: "Rave, The", quote: "PartyMore", flipped: false },
        { author: "Rave, The", quote: "PartyMore", flipped: false },
        { author: "Rave, The", quote: "PartyMore", flipped: false },
        { author: "Rave, The", quote: "PartyMore", flipped: false },
        { author: "Rave, The", quote: "PartyMore", flipped: false },
        { author: "Foo Bar", quote: "Fizzbuzz", flipped: false },
        { author: "Rave, The", quote: "PartyMore", flipped: false }
      ],
      favoriteQuote: { author: "Foo Bar", quote: "Fizzbuzz" }
    };
  }

  if (action.type === "NEW_FAVORITE") {
    return Object.assign({}, state, {
      favoriteQuote: action.quote
    });
  } else if (action.type === "FLIP_QUOTE") {
    var allQuotes = state.quotes.map(quote => {
      if (quote.author === action.quote.author && quote.quote === action.quote.quote) {
        return action.quote;
      } else {
        return quote;
      }
    });

    return Object.assign({}, state, {
      quotes: allQuotes
    });
  }

  console.debug("Unhandled Dispatch!", action);
  return state;
}
