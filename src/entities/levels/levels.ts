type Game = {
  header: string;
  selector: string;
  syntax: string;
  htmlCode: string;
  helpTitle: string;
  helpSubTitle: string;
  description: string;
  examples?: string[];
}

const levels: Game[] = [
  {
    header : "Select the plates",
    selector : "plate",
    syntax : "A",
    htmlCode: `
    <plate/>
    <plate/>
    `,
    helpTitle : "Type Selector",
    helpSubTitle : "Select elements by their type",
    description : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <strong>&lt;div&gt;</strong>, <strong>&lt;p&gt;</strong> and <strong>&lt;ul&gt;</strong> are all different element types.",
    examples : [
      '<strong>div</strong> selects all <strong>&lt;div&gt;</strong> elements.',
      '<strong>p</strong> selects all <strong>&lt;p&gt;</strong> elements.',
    ]
  },
  {
    header : "Select the bento boxes",
    selector : "bento",
    syntax : "A",
    htmlCode: `
    <bento/>
    <plate/>
    <bento/>
    `,
    helpTitle : "Type Selector",
    helpSubTitle : "Select elements by their type",
    description : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <strong>&lt;div&gt;</strong>, <strong>&lt;p&gt;</strong> and <strong>&lt;ul&gt;</strong> are all different element types.",
    examples : [
      '<strong>div</strong> selects all <strong>&lt;div&gt;</strong> elements.',
      '<strong>p</strong> selects all <strong>&lt;p&gt;</strong> elements.',
    ]
  },
  {
    header : "Select the fancy plate",
    selector : "#fancy",
    syntax: "#id",
    htmlCode : `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `,
    helpTitle: "ID Selector",
    helpSubTitle: "Select elements with an ID",
    description : 'Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
    examples : [
      '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
      '<strong>ul#long</strong> selects <strong>&lt;ul id="long"&gt;</strong>'
    ]
  },
  {
    header : "Select the apple on the plate",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",
    htmlCode : `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `,
    helpTitle : "Descendant Selector",
    helpSubTitle: "Select an element inside another element",
    description : "Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> selects all <strong>&lt;strong&gt;</strong> elements that are inside of any <strong>&lt;p&gt;</strong>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> selects any <strong>&lt;span&gt;</strong> elements that are inside of the element with <strong>id="fancy"</strong>',
    ]
  },
  {
    header : "Select the pickle on the fancy plate",
    selector : "#fancy pickle",
    syntax: "#id&nbsp;&nbsp;A",
    htmlCode : `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `,
    helpTitle: "Descendant Combinator",
    helpSubTitle: "Combine the Descendant & ID Selectors",
    description : 'You can combine any selector with the descendent selector.',
    examples : [
      '<strong>#cool&nbsp;span</strong> selects all <strong>&lt;span&gt;</strong> elements that are inside of elements with <strong>id="cool"</strong>'
    ]
  },
  {
    header : "Select the small apples",
    selector : ".small",
    syntax: ".classname",
    htmlCode : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `,
    helpTitle: "Class Selector",
    helpSubTitle: "Select elements by their class",
    description : 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    examples : [
    '<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'
    ]
  },
  {
    header : "Select the small oranges",
    selector : "orange.small",
    syntax: "A.className",
    htmlCode :`
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`,
    helpTitle: "Class Selector",
    helpSubTitle: "Combine the Class Selector with Element Selectors",
    description : 'You can combine the class selector with other selectors, like the type selector.',
    examples : [
      '<strong>ul.important</strong> selects all <strong>&lt;ul&gt;</strong> elements that have <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>'
    ]
  },
  {
    header : "Select the small oranges in the bentos",
    selector : "bento orange.small",
    syntax: "Put your back into it!",
    
    htmlCode : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `,
    helpTitle: "Combinators",
    helpSubTitle: "You can do it...",
    description : 'Combine what you learned in the last few levels to solve this one!',
  },
  {
    header : "Select all the plates and bentos",
    selector : "plate,bento",
    htmlCode : `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `,
    helpTitle : "Comma Combinator",
    helpSubTitle: "Combine, selectors, with... commas!",
    syntax : "A, B",
    description : 'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
    examples: [
    '<strong>p, .fun</strong> selects all <strong>&lt;p&gt;</strong> elements as well as all elements with <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> selects all <strong>&lt;a&gt;</strong>, <strong>&lt;p&gt;</strong> and <strong>&lt;div&gt;</strong> elements'
    ],
    
  },
  {
    header : "Select all the things!",
    selector : "*",
    syntax : "*",
    htmlCode : `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `,
    helpTitle:  "The Universal Selector",
    helpSubTitle: "You can select everything!",
    description : 'You can select all elements with the universal selector! ',
    examples : [
      '<strong>p *</strong> selects any element inside all <strong>&lt;p&gt;</strong> elements.',
    ]
  },
  {
    header : "Select everything on a plate",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    htmlCode: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`,
    helpTitle: "The Universal Selector",
    helpSubTitle: "Combine the Universal Selector",
    description : 'This selects all elements inside of <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> selects every element inside all <strong>&lt;p&gt;</strong> elements.',
      '<strong>ul.fancy *</strong> selects every element inside all <strong>&lt;ul class="fancy"&gt;</strong> elements.'
    ],
    
  },
  {
    header : "Select every apple that's next to a plate",
    selector : "plate + apple",
    syntax : "A + B",
    htmlCode : `
    <bento>
      <apple class="small"/>
    </bento>
    <plate />
    <apple class="small"/>
    <plate />
    <apple/>
    <apple class="small"/>
    <apple class="small"/>
    `,
    helpTitle: "Adjacent Sibling Selector",
    helpSubTitle: "Select an element that directly follows another element",
    description : "This selects all <strong>B</strong> elements that directly follow <strong>A</strong>. Elements that follow one another are called siblings. They're on the same level, or depth. <br/><br/>In the HTML markup for this level, elements that have the same indentation are siblings.",
    examples : [
      '<strong>p + .intro</strong> selects every element with <strong>class="intro"</strong> that directly follows a <strong>&lt;p&gt;</strong>',
      '<strong>div + a</strong> selects every <strong>&lt;a&gt;</strong> element that directly follows a <strong>&lt;div&gt;</strong>'
    ]
  },
  {
    header : "Select the pickles beside the bento",
    selector : "bento ~ pickle",
    syntax: "A ~ B",
    htmlCode : `
    <pickle/>
    <bento>
      <orange class="small"/>
    </bento>
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <plate>
      <pickle class="small"/>
    </plate>
    `,
    helpTitle: "General Sibling Selector",
    helpSubTitle: "Select elements that follows another element",
    description : "You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.",
    examples : [
      '<strong>A ~ B</strong> selects all <strong>B</strong> that follow a <strong>A</strong>'
    ]
  },
  {
    helpTitle: "Child Selector",
    syntax: "A > B&nbsp;",
    header : "Select the apple directly on a plate",
    selector : "plate > apple",
    helpSubTitle: "Select direct children of an element",
    description : "You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. <br><br>Elements that are nested deeper than that are called descendant elements.",
    examples : [
      '<strong>A > B</strong> selects all <strong>B</strong> that are a direct children <strong>A</strong>'
    ],
    htmlCode: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  },
  {
    helpTitle: "First Child Pseudo-selector",
    helpSubTitle: "Select a first child element inside of another element",
    header : "Select the top orange",
    selector : "plate :first-child",
    syntax: ":first-child",

    description : "You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.",
    examples : [
      '<strong>:first-child</strong> selects all first child elements.',
      '<strong>p:first-child</strong> selects all first child <strong>&lt;p&gt;</strong> elements.',
      '<strong>div p:first-child</strong> selects all first child <strong>&lt;p&gt;</strong> elements that are in a <strong>&lt;div&gt;</strong>.'
    ],
    htmlCode :`
    <bento/>
    <plate />
    <plate>
      <orange />
      <orange />
      <orange />
    </plate>
    <pickle class="small" />
    `
  },
  {
    helpTitle: "Only Child Pseudo-selector",
    helpSubTitle: "Select an element that are the only element inside of another one.",
    header : "Select the apple and the pickle on the plates",
    selector : "plate :only-child",
    syntax: ":only-child",
    description : "You can select any element that is the only element inside of another one.",
    examples : [
      '<strong>span:only-child</strong> selects the <strong>&lt;span&gt;</strong> elements that are the only child of some other element.',
      '<strong>ul li:only-child</strong> selects the only <strong>&lt;li&gt;</strong> element that are in a <strong>&lt;ul&gt;</strong>.'
    ],
    htmlCode : `
    <plate>
      <apple/>
    </plate>
    <plate>
      <pickle />
    </plate>
    <bento>
      <pickle />
    </bento>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    <pickle class="small"/>
    `
  },
  {
    helpTitle: "Last Child Pseudo-selector",
    helpSubTitle: "Select the last element inside of another element",
    header : "Select the small apple and the pickle",
    selector : ".small:last-child",
    syntax: ":last-child",
    description : "You can use this selector to select an element that is the last child element inside of another element. <br><br>Pro Tip &rarr; In cases where there is only one element, that element counts as the first-child, only-child and last-child!",
    examples : [
      '<strong>:last-child</strong> selects all last-child elements.',
      '<strong>span:last-child</strong> selects all last-child <strong>&lt;span&gt;</strong> elements.',
      '<strong>ul li:last-child</strong> selects the last <strong>&lt;li&gt;</strong> elements inside of any <strong>&lt;ul&gt;</strong>.'
    ],
    htmlCode : `
    <plate id="fancy">
      <apple class="small"/>
    </plate>
    <plate/>
    <plate>
      <orange class="small"/>
      <orange>
    </plate>
    <pickle class="small"/>`
  },
  {
    helpTitle: "Nth Child Pseudo-selector",
    helpSubTitle: "Select an element by its order in another element",
    header : "Select the 3rd plate",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    description : "Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.",
    examples : [
      '<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.',
      '<strong>div p:nth-child(2)</strong> selects the second <strong>p</strong> in every <strong>div</strong>',
    ],
    htmlCode : `
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    `
  },
  {
    helpTitle: "Nth Last Child Selector",
    helpSubTitle: "Select an element by its order in another element, counting from the back",
    header : "Select the 1st bento",
    selector : "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    description : "Selects the children from the bottom of the parent. This is like nth-child, but counting from the back!",
    examples : [
      '<strong>:nth-last-child(2)</strong> selects all second-to-last child elements.'
    ],
    htmlCode: `
    <plate/>
    <bento/>
    <plate>
      <orange/>
      <orange/>
      <orange/>
    </plate>
    <bento/>
    `
  },
  {
    helpTitle: "First of Type Selector",
    helpSubTitle: "Select the first element of a specific type",
    header : "Select first apple",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    description : "Selects the first element of that type within another element.",
    examples : [
      '<strong>span:first-of-type</strong> selects the first <strong>&lt;span&gt;</strong> in any element.'
    ],
    htmlCode: `
    <orange class="small"/>
    <apple/>
    <apple class="small"/>
    <apple/>
    <apple class="small"/>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    `
  },
  {
    header: "Select all even plates",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    htmlCode : `
    <plate/>
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    <plate/>
    `,
    helpTitle: "Nth of Type Selector",
    helpSubTitle: "Select every Nth element of a specific type",
    description: "Selects a specific element based on its type and order in another element - or even or odd instances of that element.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> selects the second instance of a div.',
      '<strong>.example:nth-of-type(odd)</strong> selects all odd instances of a the example class.'
    ],
    
  }
];

export default levels;

//   ,
//   {
//     helpTitle: "Nth-of-type Selector with Formula",
//     header: "Select every 2nd plate, starting from the 3rd",
//     selector: "plate:nth-of-type(2n+3)",
//     syntax: ":nth-of-type(An+B)",
//     help: "The nth-of-type formula selects every nth element, starting the count at a specific instance of that element.",
//     examples: [
//       '<strong>span:nth-of-type(6n+2)</strong> selects every 6th instance of a <strong>&lt;span&gt;</strong>, starting from (and including) the second instance.'
//     ],
//     htmlCode : `
//     <plate/>
//     <plate>
//       <pickle class="small" />
//     </plate>
//     <plate>
//       <apple class="small" />
//     </plate>
//     <plate/>
//     <plate>
//       <apple />
//     </plate>
//     <plate/>
//     `
//   },
//   {
//     helpTitle: "Only of Type Selector",
//     helpSubTitle: "Select elements that are the only ones of their type within their parent element",
//     selector : "apple:only-of-type",
//     syntax: ":only-of-type",
//     header : "Select the apple on the middle plate",
//     description : "Selects the only element of its type within another element.",
//     examples : [
//       '<strong>p span:only-of-type</strong> selects a <strong>&lt;span&gt;</strong> within any <strong>&lt;p&gt;</strong> if it is the only <strong>&lt;span&gt;</strong> in there.'
//     ],
//     htmlCode: `
//     <plate id="fancy">
//       <apple class="small" />
//       <apple />
//     </plate>
//     <plate>
//       <apple class="small" />
//     </plate>
//     <plate>
//       <pickle />
//     </plate>
//     `
//   },
//   {
//     helpTitle: "Last of Type Selector",
//     helpSubTitle: "Select the last element of a specific type",
//     header : "Select the last apple and orange",
//     selector : ".small:last-of-type",
//     syntax: ":last-of-type",
//     description : "Selects each last element of that type within another element. Remember type refers the kind of tag, so <strong>&lt;p&gt;</strong> and <strong>&lt;span&gt;</strong> are different types. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.",
//     examples : [
//       '<strong>div:last-of-type</strong> selects the last <strong>&lt;div&gt;</strong> in every element.',
//       '<strong>p span:last-of-type</strong> selects the last <strong>&lt;span&gt;</strong> in every <strong>&lt;p&gt;</strong>.'
//     ],
//     htmlCode : `
//     <orange class="small"/>
//     <orange class="small" />
//     <pickle />
//     <pickle />
//     <apple class="small" />
//     <apple class="small" />
//     `
//   },
//   {
//     helpTitle: "Empty Selector",
//     helpSubTitle: "Select elements that don't have children",
//     header : "Select the empty bentos",
//     selector : "bento:empty",
//     syntax: ":empty",
//     description : "Selects elements that don't have any other elements inside of them.",
//     examples : [
//       '<strong>div:empty</strong> selects all empty <strong>&lt;div&gt;</strong> elements.'
//     ],
//     htmlCode:`
//     <bento/>
//     <bento>
//       <pickle class="small"/>
//     </bento>
//     <plate/>
//     <bento/>`
//   },
//   {
//     helpTitle: "Negation Pseudo-class",
//     helpSubTitle: "Select all elements that don't match the negation selector",
//     header : "Select the big apples",
//     selector : "apple:not(.small)",
//     syntax: ":not(X)",
//     description : 'You can use this to select all elements that do not match selector <strong>"X"</strong>.',
//     examples : [
//       '<strong>:not(#fancy)</strong> selects all elements that do not have <strong>id="fancy"</strong>.',
//       '<strong>div:not(:first-child)</strong> selects every <strong>&lt;div&gt;</strong> that is not a first child.',
//       '<strong>:not(.big, .medium)</strong> selects all elements that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'
//     ],
//     htmlCode: `
//     <plate id="fancy">
//       <apple class="small" />
//     </plate>
//     <plate>
//       <apple />
//     </plate>
//     <apple />
//     <plate>
//       <orange class="small" />
//     </plate>
//     <pickle class="small" />
//     `
//   },
//   {
//     helpTitle: "Attribute Selector",
//     helpSubTitle: "Select all elements that have a specific attribute",
//     header : "Select the items for someone",
//     selector : "[for]",
//     syntax: "[attribute]",
//     description : 'Attributes appear inside the opening tag of an element, like this: <strong>&lt;span attribute="value"&gt;</strong>. An attribute does not always have a value, it can be blank!',
//     examples : [
//       '<strong>a[href]</strong> selects all <strong>&lt;a&gt;</strong> elements that have a <strong>href="anything"</strong> attribute.',
//       '<strong>[type]</strong> selects all elements that have a <strong>type="anything"</strong>. attribute'
//     ],
//     htmlCode:`
//     <bento><apple class="small"/></bento>
//     <apple for="Ethan"/>
//     <plate for="Alice"><pickle/></plate>
//     <bento for="Clara"><orange/></bento>
//     <pickle/>`
//   },
//   {
//     helpTitle: "Attribute Selector",
//     helpSubTitle: "Select all elements that have a specific attribute",
//     header : "Select the plates for someone",
//     selector : "plate[for]",
//     syntax: "A[attribute]",
//     description : "Combine the attribute selector with another selector (like the tag name selector) by adding it to the end.",
//     examples : [
//       '<strong>[value]</strong> selects all elements that have a <strong>value="anything"</strong> attribute.',
//       '<strong>a[href]</strong> selects all <strong>&lt;a&gt;</strong> elements that have a <strong>href="anything"</strong> attribute.',
//       '<strong>input[disabled]</strong> selects all <strong>&lt;input&gt;</strong> elements with the <strong>disabled</strong> attribute'
//     ],
//     htmlCode:`
//     <plate for="Sarah"><pickle/></plate>
//     <plate for="Luke"><apple/></plate>
//     <plate/>
//     <bento for="Steve"><orange/></bento>
//     `
//   },
//   {
//     helpTitle: "Attribute Value Selector",
//     helpSubTitle: "Select all elements that have a specific attribute value",
//     header : "Select Vitaly's meal",
//     selector : "[for=Vitaly]",
//     syntax: '[attribute="value"]',
//     description : "Attribute selectors are case sensitive, each character must match exactly.",
//     examples : [
//       '<strong>input[type="checkbox"]</strong> selects all checkbox input elements.'
//     ],
//     htmlCode:`
//     <apple for="Alexei" />
//     <bento for="Albina"><apple /></bento>
//     <bento for="Vitaly"><orange/></bento>
//     <pickle/>
//     `
//   },
//   {
//     helpTitle: "Attribute Starts With Selector",
//     helpSubTitle: "Select all elements with an attribute value that starts with specific characters",
//     header : "Select the items for names that start with 'Sa'",
//     selector : '[for^="Sa"]',
//     syntax: '[attribute^="value"]',
//     // description : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
//     examples : [
//       '<strong>.toy[category^="Swim"]</strong> selects elements with class <strong>toy</strong> and either <strong>category="Swimwear"</strong> or <strong>category="Swimming"</strong>.'
//     ],
//     htmlCode: `
//     <plate for="Sam"><pickle/></plate>
//     <bento for="Sarah"><apple class="small"/></bento>
//     <bento for="Mary"><orange/></bento>
//     `
//   },
//   {
//     helpTitle: "Attribute Ends With Selector",
//     helpSubTitle: "Select all elements with an attribute value that ends with specific characters",
//     header : "Select the items for names that end with 'ato'",
//     selector : '[for$="ato"]',
//     syntax: '[attribute$="value"]',
//     description : '',
//     examples : [
//       '<strong>img[src$=".jpg"]</strong> selects all images display a <strong>.jpg</strong> image.',
//     ],
//     htmlCode:`
//     <apple class="small"/>
//     <bento for="Hayato"><pickle/></bento>
//     <apple for="Ryota"></apple>
//     <plate for="Minato"><orange/></plate>
//     <pickle class="small"/>
//     `
//   },
//   {
//     helpTitle: "Attribute Wildcard Selector",
//     helpSubTitle: "Select all elements with an attribute value that contains specific characters anywhere",
//     syntax: '[attribute*="value"]',
//     header : "Select the meals for names that contain 'obb'",
//     selector : '[for*="obb"]',
//     description : 'A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.',
//     examples : [
//       '<strong>img[src*="/thumbnails/"]</strong> selects all image elements that show images from the "thumbnails" folder.',
//       '<strong>[class*="heading"]</strong> selects all elements with "heading" in their class, like <strong>class="main-heading"</strong> and <strong>class="sub-heading"</strong>'
//     ],
//     htmlCode:`
//     <bento for="Robbie"><apple /></bento>
//     <bento for="Timmy"><pickle /></bento>
//     <bento for="Bobby"><orange /></bento>
//     `
//   }
// ]