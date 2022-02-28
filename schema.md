# API 명세서

## API 호출 예시

```js
import server from '@/config/server';
  axios.get(`${server}/api/....`);
  axios.post(`${server}/api/....`);
  axios.put(`${server}/api/....`);

const res = await axios.post(`${server}/api/goal/comment`, {
    params: {
      text: '댓글 입력입니당',
      id: 1,
    },
  });
console.log(res.data);
```

---

## __목표(goal)__

---

## GET /api/goal

### Params

없음

### Response

|Name|Type|Desc|
|---|---|---|
|success|Boolean!|호출 결과값|
|results|Object[]|조회 결과값, success false시 없음|

### results

|Name|Type|Desc|
|---|---|---|
|id|Number!|목표 ID|
|createAt|String!|작성 날짜, 시간|
|text|String!|목표 내용|
|age|Number!|연령대|
|likes|Number!|좋아요 Count|
|categories|String[]|목표, 최대 세개|
|comments|Object[]|댓글 목록|

### comments

|Name|Type|Desc|
|---|---|---|
|id|Number!|댓글 ID|
|createAt|String!|작성 일시|
|text|String!|댓글 내용|
|goalId|Number!|parent ID|

```json
{
    "success": true,
    "results": [
        {
            "id": 1,
            "createAt": "2022-02-27T15:00:04.509Z",
            "text": "내 집 마련하고 싶어요",
            "age": 20,
            "likes": 0,
            "categories": [
                "내집마련",
                "차 구매",
                "결혼"
            ],
            "comments": [
                {
                    "id": 1,
                    "createAt": "2022-02-27T15:06:11.178Z",
                    "text": "댓글 테스트입니당",
                    "goalId": 1
                }
            ]
        },
        {
            "id": 2,
            "createAt": "2022-02-27T15:00:04.545Z",
            "text": "내 집 마련하고 싶어요",
            "age": 50,
            "likes": 1,
            "categories": [
                "주거마련",
                "수입차구매",
                "노후자금"
            ],
            "comments": []
        }
    ]
}
```

---

## POST /api/goal

### Params

|Name|Type|Desc|
|---|---|---|
|text|String!|목표 본문 내용|
|age|Number!|연령대 10/20/30/40|

### Response

|Name|Type|Desc|
|---|---|---|
|success|Boolean!|호출 결과값|
|results|Object[]|조회 결과값, success false시 없음|

### results

|Name|Type|Desc|
|---|---|---|
|id|Number!|목표 ID|
|createAt|String!|작성 날짜, 시간|
|text|String!|목표 내용|
|age|Number!|연령대|
|likes|Number!|좋아요 Count|
|categories|String[]|목표, 최대 세개|
|comments|Object[]|댓글 목록|

---

## 투표(vote)
