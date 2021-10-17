(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={list:"ContactList_list__1D1GA",listItem:"ContactList_listItem__2KW3E"}},14:function(t,e,n){t.exports={label:"ContactFilter_label__2AK4S"}},2:function(t,e,n){t.exports={form:"ContactForm_form__2iOuO",label:"ContactForm_label__11fhh",input:"ContactForm_input__78vwW",btn:"ContactForm_btn__11vzR"}},20:function(t,e,n){},21:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(13),o=n.n(r),s=(n(20),n(15)),i=n(3),l=n(7),u=n(8),d=n(10),m=n(9),b=(n(21),n(4)),h=n.n(b),j=n(6),p=n(2),f=n.n(p),O=n(0),C=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=h.a.generate(),t.phoneInputId=h.a.generate(),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.addContact(Object(i.a)({},t.state)),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.nameInputId,e=this.phoneInputId,n=this.handleChange,a=this.handleSubmit,c=this.state,r=c.name,o=c.number;return Object(O.jsxs)("form",{className:f.a.form,onSubmit:a,children:[Object(O.jsx)("label",{className:f.a.label,htmlFor:t,children:"Name"}),Object(O.jsx)("input",{className:f.a.input,type:"text",name:"name",value:r,id:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:n}),Object(O.jsx)("label",{className:f.a.label,htmlFor:e,children:"Number"}),Object(O.jsx)("input",{className:f.a.input,type:"tel",name:"number",value:o,id:e,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:n}),Object(O.jsx)("button",{className:f.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=C,x=n(14),g=n.n(x);var _=function(t){var e=t.value,n=t.onChange;return Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{className:g.a.label,children:"Find contacts by name"}),Object(O.jsx)("input",{type:"text",value:e,onChange:n})]})},y=n(12),S=n.n(y);var I=function(t){var e=t.contactsList,n=t.deleteContact;return Object(O.jsx)("ul",{className:S.a.list,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(O.jsxs)("li",{className:S.a.listItem,children:[Object(O.jsxs)("p",{children:[e," : ",a]}),Object(O.jsx)("button",{type:"submit",onClick:function(){return n(c)},children:"Delete"})]},c)}))})},N=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filterValue:""},t.addContact=function(e){if(t.state.contacts.map((function(t){return t.name.toLocaleLowerCase()})).includes(e.name.toLocaleLowerCase()))alert("".concat(e.name," is already in contacts"));else{var n=Object(i.a)(Object(i.a)({},e),{},{id:h.a.generate()});t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[n])}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.\u0441hangeFilter=function(e){var n=e.target.value;t.setState({filterValue:n})},t.filterContacts=function(){var e=t.state,n=e.filterValue,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"render",value:function(){var t=this.addContact,e=this.\u0441hangeFilter,n=this.deleteContact,a=this.state.filterValue,c=this.filterContacts();return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(v,{addContact:t}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(_,{value:a,onChange:e}),Object(O.jsx)(I,{contactsList:c,deleteContact:n})]})}}]),n}(a.Component),w=N;o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.a145111a.chunk.js.map