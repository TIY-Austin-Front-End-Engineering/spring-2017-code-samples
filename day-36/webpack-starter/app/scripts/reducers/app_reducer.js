export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      quotes: [
        { author: "Raven, The", quote: "Nevermore" },
        { author: "Rave, The", quote: "PartyMore" },
        { author: "Rave, The", quote: "PartyMore" },
        { author: "Rave, The", quote: "PartyMore" },
        { author: "Rave, The", quote: "PartyMore" },
        { author: "Rave, The", quote: "PartyMore" },
        { author: "Rave, The", quote: "PartyMore" },
        { author: "Rave, The", quote: "PartyMore" },
        { author: "Rave, The", quote: "PartyMore" },
        { author: "Rave, The", quote: "PartyMore" },
        { author: "Rave, The", quote: "PartyMore" },
        { author: "Foo Bar", quote: "Fizzbuzz" },
        { author: "Rave, The", quote: "PartyMore" }
      ],
      favoriteQuote: { author: "Foo Bar", quote: "Fizzbuzz" }
    };
  }

  if (action.type === "NEW_FAVORITE") {
    return Object.assign({}, state, {
      favoriteQuote: action.quote
    });
  }

  console.debug("Unhandled Dispatch!", action);
  return state;
}
