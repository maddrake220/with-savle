# API 명세서

Created: February 28, 2022 8:28 PM
Last Edited Time: February 28, 2022 9:26 PM

# API 호출 예시

```jsx
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

# **목표(goal)**

## GET /api/goal

전체 목표 가져오는 API

### Params

없음

### Response

| Name | Type | Desc |
| --- | --- | --- |
| success | Boolean! | 호출 결과값 |
| results | Object[] | 조회 결과값, success false시 없음 |

**Results**

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 목표ID |
| createAt | String! | 작성 날짜, 시간 |
| text | String! | 목표 내용 |
| age | Number! | 연령대 |
| likes | Number! | 좋아요 Count |
| categories | String[] | 목표, 최대 세개 |
| comments | Object[] | 댓글 목록 |

**Comments**

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 댓글 ID |
| createAt | String! | 작성 일시 |
| text | String! | 댓글 내용 |
| goalId | Number! | Parent ID |

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

목표 등록할 때 사용하는 API

### **Params**

| Name | Type | Desc |
| --- | --- | --- |
| text | String! | 목표 본문 내용 |
| age | Number! | 연령대 10/20/30/40 |

### Response

| Name | Type | Desc |
| --- | --- | --- |
| success | Boolean! | 호출 결과값 |
| results | Object | 조회 결과값, success false시 없음 |

**Results**

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 목표ID |
| createAt | String! | 작성 날짜, 시간 |
| text | String! | 목표 내용 |
| age | Number! | 연령대 |
| likes | Number! | 좋아요 Count |
| categories | String[] | 목표, 최대 세개 |
| comments | Object[] | 댓글 목록 |

---

## GET /api/goal/[id]

특정 목표 조회 시에 사용하는 API

### Params

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 목표 ID |

### Response

| Name | Type | Desc |
| --- | --- | --- |
| success | Boolean! | 호출 결과값 |
| results | Object | 조회 결과값, success false시 없음 |

**Results**

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 목표ID |
| createAt | String! | 작성 날짜, 시간 |
| text | String! | 목표 내용 |
| age | Number! | 연령대 |
| likes | Number! | 좋아요 Count |
| categories | String[] | 목표, 최대 세개 |
| comments | Object[] | 댓글 목록 |

```json
{
	success: true,
	results: {
		id: 1,
		createAt: "2022-02-27T15:00:04.509Z",
		text: "내 집 마련하고 싶어요",
		age: 20,
		likes: 0,
		categories: [
			"내집마련",
			"차 구매",
			"결혼"
		],
		comments: [
			{
				id: 1,
				createAt: "2022-02-27T15:06:11.178Z",
				text: "댓글 테스트입니당",
				goalId: 1
			}
		]
	}
}
```

---

## POST /api/goal/comment

댓글 등록할 때 사용하는 API

### Params

| Name | Type | Desc |
| --- | --- | --- |
| text | String! | 댓글 내용 |
| goalId | Number! | 댓글을 추가할 목표 ID |

### Response

| Name | Type | Desc |
| --- | --- | --- |
| success | Boolean! | 호출 결과값 |
| results | Object | 결과값, success false시 없음 |

**Results**

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 댓글 ID |
| createAt | String! | 작성 일시 |
| text | String! | 댓글 내용 |
| goalId | Number! | Parent ID |

---

## PUT /api/goal/like

특정 목표에 대하여 좋아요 / 안좋아요

Params의 like가 true라면 +1, false : -1

### Params

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 좋아요 대상 ID |
| like | Boolean! | 좋아요:true, 안좋아요:false |

### Response

| Name | Type | Desc |
| --- | --- | --- |
| success | Boolean! | 호출 결과값 |
| results | Object[] | 결과값, success false시 없음 |

**Results**

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 목표ID |
| createAt | String! | 작성 날짜, 시간 |
| text | String! | 목표 내용 |
| age | Number! | 연령대 |
| likes | Number! | 좋아요 Count |
| categories | String[] | 목표, 최대 세개 |

---

# 투표(vote)

## GET /api/vote

전체 설문 가져오는 API

### Params

없음

### Response

| Name | Type | Desc |
| --- | --- | --- |
| success | Boolean! | 호출 결과값 |
| results | Object[] | 조회 결과값, success false시 없음 |

**Results**

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 목표ID |
| createAt | String! | 작성 날짜, 시간 |
| text | String! | 설문 내용 |
| title | String! | 설문 제목 |
| likes | Number! | 좋아요 Count |
| voteSelect | Object[] | 설문 항목 |
| voteComments | Object[] | 댓글 목록 |

**VoteSelect**

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 항목 ID |
| createAt | String! | 작성 일시 |
| item | String! | 항목 내용 |
| count | Number! | 설문 ID |
| voteId | Number! | Parent ID |

**VoteComments**

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 댓글 ID |
| createAt | String! | 작성 일시 |
| text | String! | 댓글 내용 |
| voteId | Number! | Parent ID |

```json
{
	success: true,
	results: [
		{
			id: 1,
			createAt: "2022-02-27T14:10:15.112Z",
			title: "저축할 때 가장 중요하게 생각하는 것?",
			text: "가장 중요하게 생각하는 것은 무엇인가요!?",
			likes: 0,
			voteSelect: [
				{
					id: 1,
					createAt: "2022-02-27T14:10:15.112Z",
					item: "목표 달성",
					count: 0,
					voteId: 1
				},
				{
					id: 2,
					createAt: "2022-02-27T14:10:15.112Z",
					item: "성취감",
					count: 0,
					voteId: 1
				},
				{
					id: 3,
					createAt: "2022-02-27T14:10:15.112Z",
					item: "이자",
					count: 0,
					voteId: 1
				}
			],
			voteComments: [ ]
		},
		{
			id: 2,
			createAt: "2022-02-27T14:10:15.111Z",
			title: "저축할 때 가장 중요하게 생각하는 것?",
			text: "가장 중요하게 생각하는 것은 무엇인가요!?",
			likes: 0,
			voteSelect: [
				{
					id: 4,
					createAt: "2022-02-27T14:10:15.112Z",
					item: "목표 달성",
					count: 0,
					voteId: 2
				},
				{
					id: 5,
					createAt: "2022-02-27T14:10:15.112Z",
					item: "성취감",
					count: 0,
					voteId: 2
				},
				{
					id: 6,
					createAt: "2022-02-27T14:10:15.112Z",
					item: "이자",
					count: 0,
					voteId: 2
				}
		],
		voteComments: [
				{
					id: 1,
					createAt: "2022-02-27T14:20:42.427Z",
					text: "코멘트 테스트1",
					voteId: 2
				}
			]
		},
	]
}
```

---

## POST /api/vote

설문 등록할 때 사용하는 API

### Params

| Name | Type | Desc |
| --- | --- | --- |
| text | String! | 설문 본문 내용 |
| title | String! | 설문 제목 |
| voteSelect | String[] | 설문 항목, 문자열 배열 |

### Response

| Name | Type | Desc |
| --- | --- | --- |
| success | Boolean! | 호출 결과값 |
| results | Object | 조회 결과값, success false시 없음 |

**Results**

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 목표ID |
| createAt | String! | 작성 날짜, 시간 |
| text | String! | 설문 내용 |
| title | String! | 설문 제목 |
| likes | Number! | 좋아요 Count |

---

## GET /api/vote/[id]

특정 설문(고민) 조회하는 API

### Params

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 설문 ID |

### Response

| Name | Type | Desc |
| --- | --- | --- |
| success | Boolean! | 호출 결과값 |
| results | Object | 조회 결과값, success false시 없음 |

**Results**

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 목표ID |
| createAt | String! | 작성 날짜, 시간 |
| text | String! | 설문 내용 |
| title | String! | 설문 제목 |
| likes | Number! | 좋아요 Count |
| voteSelect | Object[] | 설문 항목 |
| voteComments | Object[] | 댓글 목록 |

**VoteSelect**

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 항목 ID |
| createAt | String! | 작성 일시 |
| item | String! | 항목 내용 |
| count | Number! | 설문 ID |
| voteId | Number! | Parent ID |

**VoteComments**

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 댓글 ID |
| createAt | String! | 작성 일시 |
| text | String! | 댓글 내용 |
| voteId | Number! | Parent ID |

---

## POST /api/vote/comment

특정 설문(고민)에 대해 댓글 등록할 때 사용하는 API

### Params

| Name | Type | Desc |
| --- | --- | --- |
| text | String! | 댓글 내용 |
| voteId | Number! | 댓글을 추가할 설문 ID |

### Response

| Name | Type | Desc |
| --- | --- | --- |
| success | Boolean! | 호출 결과값 |
| results | Object | 결과값, success false시 없음 |

**Results**

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 댓글 ID |
| createAt | String! | 작성 일시 |
| text | String! | 댓글 내용 |
| voteId | Number! | Parent ID |

---

## PUT /api/vote/like

특정 설문에 대해 좋아요 / 안좋아요

Params의 like가 true라면 +1, false : -1

### Params

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 좋아요 대상 ID |
| like | Boolean! | 좋아요:true, 안좋아요:false |

### Response

| Name | Type | Desc |
| --- | --- | --- |
| success | Boolean! | 호출 결과값 |
| results | Object | 결과값, success false시 없음 |

**Results**

| Name | Type | Desc |
| --- | --- | --- |
| id | Number! | 목표ID |
| createAt | String! | 작성 날짜, 시간 |
| text | String! | 설문 내용 |
| title | String! | 설문 제목 |
| likes | Number! | 좋아요 Count |