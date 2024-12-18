# 作業流程

<script setup>
import { ref } from 'vue'
import FlowChart from '/components/FlowChart.vue'
const payerX = 100;
const payeeX = 400;
const nodes = ref([
  { 
    id: 'payer',
    type: 'input',
    position: { x: payerX, y: 40 },
    data: { label: '案主 (外部平台)' },
  },
  { 
    id: 'payee', 
    type: 'input',
    position: { x: payeeX, y: 40 },
    data: { label: '領款人 (本平台)' },
  },
  { 
    id: 'create',
    position: { x: payerX, y: 120 },
    data: { label: '1.建立勞報單' },
    sourcePosition: 'right',
  },
  { 
    id: 'fill',
    position: { x: payeeX, y: 120 },
    data: { label: '2.填寫勞報單內容' },
    targetPosition: 'left',
  },
  { 
    id: 'approved',
    position: { x: payerX, y: 210 },
    data: { label: '3.確認勞報單內容' },
  },
  { 
    id: 'payment',
    position: { x: payerX, y: 350 },
    data: { label: '4-1.請款' },
  },
  { 
    id: 'paid',
    position: { x: payerX, y: 420 },
    data: { label: '4-2.付款' },
    sourcePosition: 'right',
  },
  { 
    id: 'got',
    type: 'output',
    position: { x: payeeX, y: 420 },
    data: { label: '5.確認收款' },
    targetPosition: 'left',
  },
])

const edges = ref([
  { 
    id: 'payer->create',
    source: 'payer', 
    target: 'create',
    markerEnd: 'arrowclosed',
    type: 'smoothstep',
  },
  { 
    id: 'create->fill',
    source: 'create', 
    target: 'fill',
    markerEnd: 'arrowclosed',
    type: 'smoothstep',
  },
  { 
    id: 'fill->approved',
    source: 'fill', 
    target: 'approved',
    markerEnd: 'arrowclosed',
    type: 'smoothstep',
  },
  { 
    id: 'approved->payment',
    source: 'approved', 
    target: 'payment',
    markerEnd: 'arrowclosed',
    type: 'smoothstep',
    label: '是',
  },
  { 
    id: 'approved->fill',
    source: 'approved', 
    target: 'fill',
    markerEnd: 'arrowclosed',
    type: 'smoothstep',
    label: '否',
  },
  { 
    id: 'payment->paid',
    source: 'payment', 
    target: 'paid',
    markerEnd: 'arrowclosed',
    type: 'smoothstep',
  },
  { 
    id: 'paid->got',
    source: 'paid', 
    target: 'got',
    markerEnd: 'arrowclosed',
    type: 'smoothstep',
  },
])
</script>
<br />
<FlowChart :nodes="nodes" :edges="edges" height="510px" />

## 1. 流程1
流程1的說明

## 2. 流程2
流程2的說明

## 3. 流程3
流程3的說明
