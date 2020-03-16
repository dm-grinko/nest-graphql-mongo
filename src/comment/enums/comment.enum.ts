export enum commentEnum {
    male = 'male',
    female = 'female'
}

// then we can use it with mongoose:
// gender: {type: String, required: true, enum: Object.values(commentEnum)}
// see more https://www.youtube.com/watch?v=gQ8drDibN7c&list=PL6nKq4UB9xc56eoWJmwqEIJd03RIuqU7l&index=8&t=0s