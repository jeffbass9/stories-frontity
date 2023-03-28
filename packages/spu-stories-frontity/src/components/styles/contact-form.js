import { styled } from "frontity";

const ContactForm = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 72px;
width: 100%;
height: auto;
float: right;
border-width: 0 0 30px 30px;
border-style: solid;
border-color: black;
margin-left: 16px;
padding: 48px 52px 48px 52px;
@media screen and (min-width: 834px){
  margin-left: 120px;
  padding: 98px 254px 98px 104px;
}
.contact-form__content{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 30px;
  width: 100%;
  height: auto;
}
h1{
  width: 100%;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 70px;
  text-transform: capitalize;
  color: #232529;
  margin-top: 20px;
  margin-bottom: 10px;
}
h2 {
  width: 100%;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 50px;
  text-transform: capitalize;
  color: #232529;
}
p {
  width: 100%;
  font-family: "Inter", sans-serif;
  letter-spacing: 0.05em;
  color: #232529;
  font-size: 20px;
  line-height: 24px;
  margin: 0 calc(16% + 32px) 36px auto;
}
.wpcf7{
  width: 100%;
  background: none;
  padding: 0;
}

.wpcf7 select:not([multiple=multiple]){
  font-family: 'Trade Gothic Next LT Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: black;
  border-radius: 2px;
  width: 100%;
  border: 1px solid #D6D6D6;
  background: url("https://spu.edu/-/media/Images/icons/icon--arrow-drop-down.ashx") no-repeat calc(100% - 32px) 50% white;
  -webkit-appearance: none;
  line-height: 1.42857143;
  height: 95px;
  margin: 1em  .6em  .6em  0;
}


.wpcf7-submit{
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  margin: 1em  .6em  .6em  0;
  padding: .8em 1.6em;
  border: 2px solid black;
  border-radius: 2px;
  transition: all 0.2s ease;
  font-size: 1.2rem;
  font-family: 'Trade Gothic LT Pro', Arial, sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #232529;
  border: 2px solid #232529;
  color: white;
  width: auto;
}
.wpcf7-submit:hover{
  background-color: #333333;
  box-shadow: none;
  transform: translate(4px, 4px);
  cursor: pointer;
}

.wpcf7 h3{
  text-align: left;
  font-family: 'Trade Gothic Next LT Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #333333;
  margin-bottom: 20px;
  background: none;
  padding: 0;
}

.wpcf7 .name-field,
.wpcf7 .state-field,
.wpcf7 .zip-field{
  display: inline-block;
  width: calc(50% - 20px);
  margin-right: 10px;
}

.fsLabelVertical .fsLabel{
  font-family: 'Trade Gothic Next LT Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #333333;
}
.wpcf7 label{
  display: flex;
  flex-direction: column-reverse;
  font-family: 'Trade Gothic Next LT Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-transform: capitalize;
  color: #858585;
  width: 100%;
  padding-bottom: 12px;
}
.wpcf7-form-control-wrap{
  width: 100%;
}
.wpcf7 input[type=text],
.wpcf7 input[type=email],
.wpcf7 input[type=number],
.wpcf7 input[type=tel],
.wpcf7 select,
.wpcf7 textarea{
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  height: 48px;
  width: 100%;
}
select.fsFieldState,
.wpcf7 .fieldZip{
  padding: 0;
  margin: 0.7em 0.6em 0.6em 0;
  box-shadow: none;
}

.fsSectionHeader{
  display: none;
}
.wpcf7 .fsNameLast{
    display: inline-block;
    width: calc(50% - 10px);
    margin-right: 0;
}
.fsSubFieldGroup .fsSubField:nth-of-type(1):nth-last-of-type(2).fsNameFirst{
  display: inline-block;
}
.wpcf7 input:not([type=submit]), .fsForm input:not([type=submit]){
  width: 100%;
  font-size: 2em;
}
.wpcf7 .fsSubField.fsFieldState,
.fsFieldZip{
  display: inline-block;
  width: calc(50% - 10px);
}
.wpcf7 .fsSubField.fsFieldCity{
  width: 100%;
}
.wpcf7 .fsFieldZip{
  margin-right: 0;
}
.wpcf7 .fsFieldZip input{
    height: 48px;
    border: 1px solid rgba(0, 0, 0, 0.25);
}
`
export default ContactForm;
