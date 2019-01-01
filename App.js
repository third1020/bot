import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatBot from 'react-native-chatbot';




export default class App extends React.Component {
  componentDidMount() {
  this.handleEnd = this.handleEnd.bind(this);
}

handleEnd({ steps, values }) {
  var score,text,i;
  var result;
  // console.log(steps);
  // console.log(values);

  //values[0] คือ ชื่อผู้ใช้
  //valuse[1] คือ คุณกำลังทำอะไรอย
  //valuse[2-9] คือ เก็บตะแนนแบบทดสอบ

  // for(i = 2; i <= 9; i++ ){
  //   score += values[i];
  // }

  score = values[2]+values[3]+values[4]+values[5]+values[6]+values[7]+values[8]+values[9];




   //เนื่องจากตอนเก็บคะแนนใส่ values เป็นเลข0 ไม่ได้จึงเปลี่ยน เป็นเลข1 แทน แล้วมี8ตำถามคะแนนจึงลบ 8
  if (score == 8) { alert(`คะแนน ที่คุณได้: ${score-8}  จากการประเมินเบื้องต้นเราพบว่าคุณไม่มีความเสี่ยงในการทำร้ายตนเองและการฆ่าตัวตาย`); } //score =0
  else if (score >= 9 && score <= 10 ) { alert(`คะแนน ที่คุณได้: ${score-8}  จากการประเมินเบื้องต้นเราพบว่าคุณมีความเสี่ยงในการทำร้ายตัวเองในระดับปานกลาง และความเสี่ยงในการฆ่าตัวตายในระดับน้อย`); }//score =1-2
  else if (score >= 11 && score <= 12 ) {alert(`คะแนน ที่คุณได้: ${score-8} จากการประเมินเบื้องต้นเราพบว่าคุณมีความเสี่ยงในการทำร้ายตัวเองในระดับสูง และความเสี่ยงในการฆ่าตัวตายในระดับน้อย`); }//score =3-4
  else if (13 >= score && score <= 17) {alert(`คะแนน ที่คุณได้: ${score-8} จากการประเมินเบื้องต้นเราพบว่าึถณมีความเสี่ยงในการทำร้ายตัวเองในระดับรุนแรง และความเสี่ยงในการฆ่าตัวตายในระดับน้อย`); }//score =5-9
  else if (18 >= score && score <= 24) {alert(`คะแนน ที่คุณได้: ${score-8}จากการประเมินเบื้องต้นเราพบว่าคุณมีความเสี่ยงในการทำร้ายตัวเองในระดับรุนแรง และความเสี่ยงในการฆ่าตัวตายในระดับปานกลาง`); }//score =10-16
  else if (score > 24) { alert(`คะแนน ที่คุณได้: ${score-8}จากการประเมินเบื้องต้นเราพบว่าคุณมีความเสี่ยงในการทำร้ายตัวเองในระดับรุนแรง และมีความเสี่ยงในการฆ่าตัวตายในระดับสูง`); }//score > 16
  else { alert(`console.error()`); }



}
  render() {
    return (


      <ChatBot
              handleEnd={this.handleEnd}
              steps={[
                {
                  id: '1',
                  message: 'สวัสดีจ้า ฉันชื่อว่า Mindbot , แล้วคุณล่ะชื่ออะไร?',
                  trigger: 'askName',
                },
                {

                  id: 'askName',
                  user: true,
                  trigger: 'userName',
                },
                {
                  id: 'userName',
                  message: 'ยินดีที่ได้รู้จัก {previousValue}!',
                  trigger: 'introduce',
                },
                {
                  id: 'introduce',
                  message: 'ฉันคือหุ่นยนต์ตัวน้อยๆ ที่ถูกสร้างขึ้นมาเพื่อปฎิบัติภารกิจอันยิ่งใหญ่ที่ได้รับมอบหมายมาจากผู้สร้าง',
                  trigger: '2',
                  },

                  {
                  id: '2',
                  message: 'นั่นก็คือไตหาหัวจาม "ตามหาหัวใจ" คุณยังไงล่ะ เมื่อตามหาเจอแล้ว Mindbot สัญญาว่าจะดูแลใจคุณอย่างดี ❤️',
                  trigger: '3',
                },
                {
                  id: '3',
                  message: 'ตัวเลือกที่มีให้คุณเลือกในแต่ละครั้ง คือวิธีหลักในการสื่อสารกับ Mindbot นะ เว้นแต่เมื่อฉันจะขอให้คุณเขียน ✏️',
                  trigger: '4',
                },
                {
                  id: '4',
                  message: 'ยิ่งคุณคุยกับฉันมากเท่าไหร่ ก็จะยิ่งทำให้ฉันรู้จักและเข้าใจอารมณ์ของคุณได้มากขึ้น',
                  trigger: '5',
                },
                {
                  id: '5',
                  message: 'นอกจากนี้ข้อมูลต่างๆที่คุณได้พูดคุยกับฉันจะถูกเก็บเป็นความลับ ระหว่างเราเท่านั้นนะ 🤫 ซึ่งคุณสามารถลบประวัติการสนทนาของเราได้ทุกเมื่อ ในตัวเลือก',
                  trigger: '6',
                },
                {
                  id: '6',
                  message: 'ในกรณีที่คุณต้องการความช่วยเหลือฉุกเฉินสามารถพิม "ช่วยด้วย" หรือ "SOS" ได้ตลอดเวลาเลยนะ',
                  trigger: 'understand',
                },
                {
                  id: 'understand',
                  options: [
                    {  label: 'รับทราบ', trigger: 'start' },
                  ],
                },
                {
                  id: 'start',
                  message: 'โอเคจ้า งั้นเรามาเริ่มเปิดใจคุยกันเลยดีกว่า',
                  trigger: 'heart',
                },
                {
                  id: 'heart',
                  options: [
                    {  label: '❤️', trigger: 'doing' },
                  ],
                },
                {
                  id: 'doing',
                  message: 'ตอนนี้คุณกำลังทำอะไรอยู่',
                  trigger: 'userAnswer',
                },
                {
                  id: 'userAnswer',
                  user: true,
                  trigger: 'SOS',

                },
                {
                  id: 'SOS',
                  message: ({ previousValue, steps }) => 'Help',
                  trigger: ({ value, steps }) => 'selfHarm',
                },
                {
                  id: 'mood',
                  message: 'แล้วอารมณ์ของคุณตอนนี้เป็นอย่างไร',
                  trigger: 'moodChoice',
                },
                {
                  id: 'moodChoice',
                  options: [
                    { label: 'ดีมาก', trigger: 'veryGood' },
                    { label: 'ดี', trigger: 'Good' },
                    { label: 'เฉยๆ', trigger: 'notBothered' },
                    { label: 'ไม่ค่อยดี', trigger: 'quiteBad' },
                    { label: 'แย่มาก', trigger: 'bad' },
                  ],
                },
                {
                  id: 'veryGood',
                  message: 'ว้าว! ฉันอยากให้คุณแชร์ให้ฉันรู้หน่อยว่า ทำไมตอนนี้คุณถึงรู้สึกดี',
                  trigger: 'shareMood',
                },
                {
                  id: 'Good',
                  message: 'ว้าว! ฉันอยากให้คุณแชร์ให้ฉันรู้หน่อยว่า ทำไมตอนนี้คุณถึงรู้สึกดี',
                  trigger: 'shareMood',
                },
                {
                  id: 'notBothered',
                  message: 'งั้นเหรอ ฉันอยากให้คุณแชร์ให้ฉันรู้หน่อยว่าทำไม ตอนนี้คุณถึงรู้สึกเฉยๆ',
                  trigger: 'shareMood',
                },
                {
                  id: 'quiteBad',
                  message: 'ฉันพร้อมที่จะอยู่เคียงข้างเธอเสมอนะ! แชร์ให้ฉันรู้หน่อยว่าทำไมตอนนี้คุณถึงรู้สึกแย่ ✏️',
                  trigger: 'shareMood',
                },
                {
                  id: 'bad',
                  message: 'ฉันพร้อมที่จะอยู่เคียงข้างเธอเสมอนะ! แชร์ให้ฉันรู้หน่อยว่าทำไมตอนนี้คุณถึงรู้สึกแย่ ✏️',
                  trigger: 'shareMood',
                },
                {
                  id: 'shareMood',
                  user: true,
                  trigger: 'selfHarm',
                },
                {
                  id: 'selfHarm',
                  message: 'ฉันตรวจสอบคำที่คุณต้องการความช่วยเหลือ หรือจะเป็นอันตรายต่อคุณ คุณต้องการเข้ารับการประเมินเบื้องต้นหรือไม่ ใช้เวลาแค่ 2 นาที และจะเป็นประโยชน์ต่อตัวคุณมากๆเลยนะ 🙂',
                  trigger: 'selfHarmChoice',
                },
                {
                id: 'selfHarmChoice',
                  options: [
                    { label: 'ต้องการ', trigger: 'selfHarmStart' },
                    { label: 'ไม่ต้องการ', trigger: 'startCBT' },
                    { label: 'ช่วยฉันด้วย', trigger: 'selfHarmStart' },
                  ],
                },
                {
                  id: 'selfHarmQuestion1',
                  message: 'ในเดือนที่ผ่านมาจนถึงวันนี้ คุณได้คิดว่าอยากตายหรือคิดว่าตายไปจะดีกว่าบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice',
                },
                {
                  id: 'selfHarmQuestion2',
                  message: 'ในเดือนที่ผ่านมาจนถึงวันนี้ คุณได้คิดว่าอยากทำร้ายตัวเองหรือทำให้ตัวเองบาดเจ็บบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice2',
                },
                {
                  id: 'selfHarmQuestion3',
                  message: 'ในเดือนที่ผ่านมาจนถึงวันนี้ คุณได้คิดเกี่ยวกับการฆ่าตัวตายบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice3',
                },
                {
                  id: 'selfHarmQuestion3_1',
                  message: 'แล้วคุณสามารถควมคุมความอยากฆ่าตัวตายที่คุณคิดอยู่ในขณะนั้นได้หรือไม่?',
                  trigger: 'selfHarmQuestionChoice3_1',
                },
                {
                  id: 'selfHarmQuestion3_2',
                  message: 'ดีแล้วแหละครับ คุณจะไม่ฆ่าตัวตายแน่นอนใช่ไหม?',
                  trigger: 'selfHarmQuestionChoice3_2',
                },
                {
                  id: 'selfHarmQuestion4',
                  message: 'ในเดือนที่ผ่านมาจนถึงวันนี้ คุณได้มีแผนการที่จะฆ่าตัวตายบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice4',
                },
                {
                  id: 'selfHarmQuestion5',
                  message: 'ในเดือนที่ผ่านมาจนถึงวันนี้ คุณได้เตรียมการที่จะทำร้ายตัวเอง หรือเตรียมการฆ่าตัวตายโดยตั้งใจว่าจะให้ตัวเองตายบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice5',
                },
                {
                  id: 'selfHarmQuestion6',
                  message: 'ในเดือนที่ผ่านมาจนถึงวันนี้ คุณได้ทำให้ตัวเองบาดเจ็บแต่ไม่ได้ตั้งใจให้ตัวเองตายบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice6',
                },
                {
                  id: 'selfHarmQuestion7',
                  message: 'ในเดือนที่ผ่านมาจนถึงวันนี้ คุณได้พยายามฆ่าตัวตาย โดยคาดหวังหรือตั้งใจจะให้ตัวเองตายบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice7',
                },
                {
                  id: 'selfHarmQuestion8',
                  message: 'ในตลอดชีวิตที่ผ่านมา คุณเคยพยายามฆ่าตัวตายบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice8',
                },
                {
                  //value[2]
                id: 'selfHarmQuestionChoice',
                  options: [
                    { value:2, label: 'ใช่', trigger: 'selfHarmQuestion2' },
                    { value:1, label: 'ไม่ใช่', trigger: 'selfHarmQuestion2' },
                  ],
                },
                {
                  //value[3]
                  id: 'selfHarmQuestionChoice2',
                    options: [
                      { value:3, label: 'ใช่', trigger: 'selfHarmQuestion3' },
                      { value:1, label: 'ไม่ใช่', trigger: 'selfHarmQuestion3' },
                    ],
                  },
                  {
                    //value[4]
                    id: 'selfHarmQuestionChoice3',
                      options: [
                        { value:7, label: 'ใช่', trigger: 'selfHarmQuestion3_1' },
                        { value:1, label: 'ไม่ใช่', trigger: 'selfHarmQuestion3_2' },
                      ],
                    },
                    {
                      //value[5.1]
                      id: 'selfHarmQuestionChoice3_1',
                        options: [
                          { value:1, label: 'ควบคุมได้', trigger: 'selfHarmQuestion4' },
                          { value:9, label: 'ควบคุมไม่ได้', trigger: 'selfHarmQuestion4' },
                        ],
                      },
                      {
                          //value[5.2]
                        id: 'selfHarmQuestionChoice3_2',
                          options: [
                            { value:1 ,label: 'แน่นอน', trigger: 'selfHarmQuestion4' },
                          ],
                        },
                    {
                        //value[6]
                      id: 'selfHarmQuestionChoice4',
                        options: [
                          { value:9, label: 'มี', trigger: 'selfHarmQuestion5' },
                          { value:1, label: 'ไม่มี', trigger: 'selfHarmQuestion5' },
                        ],
                      },
                      {
                          //value[7]
                        id: 'selfHarmQuestionChoice5',
                          options: [
                            { value:10, label: 'ใช่', trigger: 'selfHarmQuestion6' },
                            { value:1, label: 'ไม่ใช่', trigger: 'selfHarmQuestion6' },
                          ],
                        },
                        {
                            //value[8]
                          id: 'selfHarmQuestionChoice6',
                            options: [
                              { value:5, label: 'ใช่', trigger: 'selfHarmQuestion7' },
                              { value:1, label: 'ไม่ใช่', trigger: 'selfHarmQuestion7' },
                            ],
                          },
                          {
                              //value[9]
                            id: 'selfHarmQuestionChoice7',
                              options: [
                                { value:11, label: 'ใช่', trigger: 'selfHarmQuestion8' },
                                { value:1, label: 'ไม่ใช่', trigger: 'selfHarmQuestion8' },
                              ],
                            },
                            {
                                //value[10]
                              id: 'selfHarmQuestionChoice8',
                                options: [
                                  { value:5, label: 'ใช่', trigger: 'seeuChoice' },
                                  { value:1, label: 'ไม่ใช่', trigger: 'seeuChoice' },
                                ],
                              },
                {
                  id: 'selfHarmStart',
                  message: 'โอเคจ้า งั้นเรามาเริ่มกันเลย ✌️',
                  trigger: 'selfHarmQuestion1',
                },
                {
                  id: 'startCBT',
                  message: 'สวัสดี หลังจากคราวที่แล้วที่เราคุยกัน วันนี้ฉันจึงมีแบบทดสอบให้คุณทำ ซึ่งใช้เวลาเพียง 2 นาทีเท่านั้น',
                  trigger: 'letstartCBT',
                },
                {
                  id: 'letstartCBT',
                  message: 'งั้นเรามาเริ่มกันเลยดีกว่า ✌️',
                  trigger: 'questionCBT',
                },
                {
                  id: 'questionCBT',
                  message: 'ข้อใดมีการใช้ความคิดแบบ All-or-Nothing',
                  trigger: 'questionCBTchoice',
                },
                {
                  id: 'questionCBTchoice',
                    options: [
                      { label: 'ฉันจะพยายามทำให้ดีที่สุด', trigger: 'WrongAnswer' },
                      { label: 'ฉันทำไม่ได้แน่ๆ', trigger: 'WrongAnswer' },
                      { label: 'ฉันทำได้ในบางครั้ง', trigger: 'RightAnswer' },
                      { label: 'All-or-Nothing คืออะไร?', trigger: 'WhatisAllorNothing' },

                    ],
                  },
                  {
                    id: 'WhatisAllorNothing',
                    message: 'All-or-Nothing คือความคิดสุดขั้วในด้านใดด้านหนึ่ง เป็นดำหรือขาวไปหมด เป็นบวกหรือลบไปหมด โดยไม่สามารถมองอะไรกลางๆได้',
                    trigger: 'questionCBT',
                  },
                  {
                    id: 'RightAnswer',
                    message: 'เย้ๆ เยี่ยมไปเลยจ้า คราวนี้ลองข้อต่อไปนะ 🙂',
                    trigger: 'questionCBT2',
                  },
                  {
                    id: 'WrongAnswer',
                    message: 'ลองคิดใหม่นะจ๊ะ ✌️' ,
                    trigger: 'questionCBTchoice',
                  },
                  {
                  id: 'questionCBTchoice',
                    options: [
                      {  label: 'ฉันจะพยายามทำให้ดีที่สุด', trigger: 'selfHarmStart' },
                      {  label: 'ฉันทำไม่ได้แน่ๆ', trigger: 'Good' },
                      {  label: 'ฉันทำได้ในบางครั้ง', trigger: 'Good' },
                      {  label: 'ฉันทำได้ในบางครั้ง', trigger: 'Good' },
                    ],
                  },
                  {
                    id: 'questionCBT2',
                    message: 'ข้อใดไม่มีการใช้ความคิดแบบ Labeling',
                    trigger: 'questionCBTchoice',
                  },
                  {
                    id: 'questionCBTchoice2',
                      options: [
                        {  label: 'ไม่มีใครชอบฉันอีกต่อไป', trigger: 'WrongAnswer' },
                        {  label: 'ฉันไม่สามารถเป็นเพื่อนกับใครได้อีก', trigger: 'WrongAnswer' },
                        {  label: 'ฉันคิดว่าแม่ฉันน่าจะงานยุ่งอยู่ เลยอาจจะมาสาย', trigger: 'RightAnswer2' },
                        {  label: 'Labeling คืออะไร', trigger: 'WhatisLabeling' },
                      ],
                    },
                    {
                      id: 'questionCBT3',
                      message: 'ข้อใดใช้ความคิดแบบ "Should" and "Must" statement',
                      trigger: 'questionCBTchoice3',
                    },
                    {
                      id: 'questionCBTchoice3',
                        options: [
                          {  label: 'ฉันต้องสอบคิดหมอให้ได้', trigger: 'WrongAnswer' },
                          {  label: 'ฉันยอมรับในการตัดสินใจของเพื่อน', trigger: 'WrongAnswer' },
                          {  label: 'ชีวิตของฉันมีค่า', trigger: 'RightAnswer2' },
                          {  label: '"Should" and "Must" statement คืออะไร?', trigger: 'WhatisShouldMust' },
                        ],
                      },
                    {
                      id: 'WhatisLabeling',
                      message: 'Labeling คือการตีตราตนเอง หรือ คนอื่นในทางลบ ไม่ว่าจะทำอะไรก็มักจะยึดติดกับความรู้สึกที่ตนได้ตีตราไว้',
                      trigger: 'questionCBT',
                    },
                    {
                      id: 'WhatisShouldMust',
                      message: '"Should and "Must" statement คือการคิดความหวังให้ตนเองหรือคนอื่นเป็นอย่างนั้นอย่างนี้ตามที่ตนคาดหวัง หรือตามความต้องการของตน',
                      trigger: 'questionCBT',
                    },
                    {
                      id: 'RightAnswer',
                      message: 'เย้ๆ เยี่ยมไปเลยจ้า คราวนี้ลองข้อต่อไปนะ 🙂',
                      trigger: 'questionCBT2',
                    },
                    {
                      id: 'RightAnswer2',
                      message: 'ว้าว! ยอดไปเลย ต่อไปข้อสุดท้ายนะ 🙂',
                      trigger: 'questionCBT2',
                    },
                    {
                      id: 'WrongAnswer',
                      message: 'ลองคิดใหม่นะจ๊ะ ✌️' ,
                      trigger: 'questionCBTchoice',
                    },

                    // Cognitive Behavior Therapy (CBT)
                    {
                      id: 'cbt1',
                      message: 'ฉันเข้าใจความรู้สึกของคุณนะ' ,
                      trigger: 'cbt2',
                    },
                    {
                      id: 'cbt2',
                      message: 'ฉันอาจจะใช้ของวิเศษชิ้นนี้ช่วยคุณได้ 🤔' ,
                      trigger: 'cbt3',
                    },
                    {
                      id: 'cbt3',
                      message: 'งั้นเรามาเริ่มกันเลยดีกว่า! ฉันจะยกตัวอย่างประโยคให้คุณดังนี้' ,
                      trigger: 'cbt4',
                    },
                    {
                      id: 'cbt4',
                      message: '"ทั้งหมดเป็นความผิดของฉัน"' ,
                      trigger: 'cbt5',
                    },
                    {
                      id: 'cbt5',
                        options: [
                          {  label: 'ทั้งหมด', trigger: 'cbt7' },
                          {  label: 'ความผิด', trigger: 'cbt6' },
                        ],
                      },
                      {
                        id: 'cbt6',
                        message: 'หืม... ฉันอยากให้คุณคิดอีกที คำว่า "ความผิด" ที่คุณคิดอยู่เป็นความจริงใช่หรือไม่ หรือเป็นความคิดที่แต่งเติมขึ้นมาจากความรู้สึกเราเอง' ,
                        trigger: 'cbt8',
                      },
                      {
                        id: 'cbt7',
                        message: 'ถูกต้องแล้วจ้า! ฉันคิดว่า "ความผิด" คือความจริง แต่ความคิดที่แต่งเติมคือคำว่า "ทั้งหมด" เพราะบางทีเราก็ไม่ได้เป็นคนผิดทั้งหมดเสมอไปนะ' ,
                        trigger: 'cbt9',
                      },
                      {
                        id: 'cbt8',
                          options: [
                            {  label: 'ใช่', trigger: 'cbt7' },
                            {  label: 'ความคิดที่แต่งเติม?', trigger: 'cbt6' },
                          ],
                        },
                        {
                          id: 'cbt8',
                            options: [
                              {  label: '😊', trigger: 'cbt9' },
                              {  label: '😢', trigger: 'cbt9' },
                            ],
                          },
                          {
                            id: 'cbt9',
                            message: 'บางทีการเปลี่ยนแปลงอาจจะเป็นสิ่งที่ยาก แต่การที่คุณได้พูดคุยกับฉันในวันนี้ จะเป็น "จุดเริ่มต้นที่ดี" ในการเปลี่ยนแปลงอารมณ์ของคุณ ✌️' ,
                            trigger: 'cbt10',
                          },
                          {
                            id: 'cbt10',
                            message: 'นี่คือสิ่งที่ทุกคนสามารถขัดเกลาและฝึกฝนตนเองได้แล้วฉันจะคอยอยู่เคียงข้างและช่วยเหลือคุณทุกเมื่อเลยนะ ❤️' ,
                            trigger: 'cbtlast',
                          },
                          {
                            id: 'cbtlast',
                              options: [
                                {  label: 'ขอบคุณนะ Mindbot', trigger: 'HowWasIt' },
                                {  label: 'ฉันจะพยายาม Mindbot', trigger: 'HowWasIt' },
                              ],
                            },
                          {
                            id: 'HowWasIt',
                            message: 'คุณรู้สึกยังไงที่ได้คุยกับฉันในวันนี้' ,
                            trigger: 'HowWasItChoice',
                          },
                          {
                            id: 'HowWasItChoice',
                              options: [
                                {  label: '👍', trigger: 'feedbackreply' },
                                {  label: '👎', trigger: 'feedbackreply' },
                              ],
                            },
                            {
                              id: 'feedbackreply',
                              message: 'ขอบคุณสำหรับการติชม ฉันมีความสุขทุกครั้งที่ได้เป็นเพื่อนดูแลใจของคุณ 😊' ,
                              trigger: 'feedbackemoji',
                            },
                            {
                              id: 'feedbackemoji',
                                options: [
                                  {  label: '❤️', trigger: 'seeu' },
                                ],
                              },
                                {
                                  id: 'seeu',
                                  message: 'แล้วพบกันอีกนะ 😊' ,
                                  trigger: 'seeuChoice',
                                },

                                {
                                  id: 'seeuChoice',
                                    options: [
                                      {  label: 'แล้วพบกัน Mindbot', end: true },
                                      {  label: 'Bye Mindbot', end: true },
                                    ],
                                  },

                                  // Deep-Mind analytic


              ]}
            />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
