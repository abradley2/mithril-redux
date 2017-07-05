# Mithril Redux

A brilliant alternative to React + Redux

The bundle output by `npm run build` is < 14kb gzipped!

# Dependencies Walkthrough

**Mithril**  
Smaller than React, extremely fast, and batteries included (routing and xhr!).

**Redux**  
Dead simple state management. Of course, Mithril's natural state management is
still available if Redux is too much for the use case.

**Icepick**  
Nice and small bag of some functions that make it easy to treat object manipulations
as if they were dealing with immutable data. This jumps over all the hurdles
of constantly doing `Object.assign(..)` in your reducers.

**Reselect**  
A simple way to make performant selectors for your state tree..

**Tachyons**  
For rapid styling and prototyping of the interface.

**Sheetify**  
Simple library that allows you to inject imported css into the head. Much nicer
than awkward Webpack loaders. Useful here for any css that isn't covered by
Tachyons.

