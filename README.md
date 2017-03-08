# Mithril Redux

A brilliant alternative to React + Redux

The bundle output by `npm run build` is < 14kb gzipped!

# Dependencies Walkthrough
From the package.json:
```
{
  "hyperx": "^2.0.5",
  "icepick": "^1.3.0",
  "mithril": "^1.0.1",
  "redux": "^3.6.0",
  "reselect": "^2.5.4"
}
```

**mithril**  
Smaller than React, extremely fast, and batteries included (routing and xhr!).

**redux**  
Dead simple state management that. Of course, since we're using Mithril we don't
have to have everything in the main store, and can just use models for convenience.
It's the best of both worlds, really.

**icepick**  
Nice and small bag of some functions that make it easy to treat object manipulations
as if they were dealing with immutable data. This jumps over all the hurdles
of constantly doing `Object.assign(..)` in your reducers.

**reselect**
A simple way to make selectors from your state that are memoized.

**hyperx**  
Now that Template literals are _a thing_ we don't need JSX anymore. With hyperxify
this transform is done at compile time so you don't lose any speed!

