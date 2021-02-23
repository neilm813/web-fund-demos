# Cascading Style Sheet (CSS) Overview

- Review and show simple examples then start adding CSS to the HTML intro code.
- [CSS GIF](https://i.giphy.com/media/13XW2MJE0XCoM0/giphy.gif)

## Cascading

- cascade: a process whereby something, typically information or knowledge, is successively passed on
- refers to the fact that you can have multiple stylesheets and each sheet can set a style for the same element, the 'cascade' determines which style will ultimately be displayed

## Specificity

- Specificity is a weight that is applied to a given CSS declaration, determined by the number of each selector type in the matching selector. When multiple declarations have equal specificity, the last declaration found in the CSS is applied to the element. Specificity only applies when the same element is targeted by multiple declarations. As per CSS rules, directly targeted elements will always take precedence over rules which an element inherits from its ancestor.
- [css rules reference](https://www.w3schools.com/)

## Compatibility

- Different web browsers have slight differences in the default Styles
- CSS resets are a common approach to `normalize` the base styles so a page will look the same on all browsers
- Basic reset you should use (should use a more robust one on large projects)

  - ```css
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ```

  - If you forgot to add this at the beginning, it might be too late to add it later
  - `box-sizing: border-box;`
    - Makes it so you don't have to re-adjust width/height any time you add borders or padding in order to keep the width/height the same

## `padding` vs `margin`

- `margin` is on the outside of the element
  - pushes entire element away from neighboring elements
- `padding` is on the inside
  - pushes content away from the edges

## 3 Ways to Add CSS to HTML

- in order of priority / specificity

### 1. Inline

- what happens when styling multiple tags of the same type the same way?

### 2. Internal `<style>` tag

### 3. External file via `<link>` tag

- **Q: Which one is the best practice?**
  - separation of concerns (also helps with organization)
    - CSS file is concerned with styles so keep it separate from HTML
    - HTML file is concerned with the structure and content of the website so keep it separate
    - JS file is concerned with the activity of the users and making the website react to user actions
    - someone can work on HTML file and someone can work on CSS file at same time without conflict

## Display Property

- `block`
  - Default width is full width of parent element
  - Can set height and width manually on block elements
  - Cannot be placed inside inline elements
- `inline-block`
  - Behaves like a block except it will be inline (side-by-side same line) if there is room
  - If too wide, it will get pushed to next line
- `inline`
  - Default height and width determined by it's content
  - **Cannot set width and height**

## CENTERING / ALIGNING

1. `inline-block` the element you want to align
   - use `text-align: center;` on the parent
2. `margin: 0 auto;` on a block element that is not 100% width
3. `display: flex;` and `justify-content: center;` on the parent of the element(s) you want aligned.
4. CSS grid

## Chrome Dev Tools

- Tabs: Elements, Console, Sources, Styles, etc.
- Base styling
- Box Model

## Box Model

- [Annotated Picture Frame Example](https://lh3.google.com/u/1/d/15YeSPnJoKgluOscTlYOq9ECPHX8fcVfb=w1920-h937-iv1)
- Default margin of header tags differs between browsers
- This is why css resets are used (eric myers css reset)
- `box-sizing: border-box;`
  - "By default in the CSS box model, the width and height you assign to an element is applied only to the element's content box. If the element has any border or padding, this is then added to the width and height to arrive at the size of the box that's rendered on the screen. This means that when you set width and height, you have to adjust the value you give to allow for any border or padding that may be added." - [Box Sizing CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

## HTML Attribute Pattern

- `<OpenTag attrName="attrVal" anotherAttr="someValue">`
- Can select an element based on it's attribute
- Most often by `class` attribute value or `id` attribute value

## Selectors Examples

- ```css
  /* selects all p tags */
  p {
    color: red;
  }

  /* select all HTML elements that have an orange class attribute */
  .orange {
    color: orange;
  }

  /* select only the HTML element matching id attribute */
  #id-name {
    font-weight: bold;
  }

  /* comma selector apply the same style to both all elements with orange and red class names */
  .orange,
  .red {
    font-size: 40px;
  }

  /* descendant combinator: selects all `span` tags that are descendants of `p` tags */
  div span {
    color: red;
  }

  /* difference combinator: selects all DIRECT `span` descendants of `div` tags */
  div > span {
    color: red;
  }

  /* select all elements with orange class that are inside div elements */
  div .orange {
    text-decoration: underline;
  }
  ```
