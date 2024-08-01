import { INote } from 'types/types'
import { generateNoteId } from './generateNoteId'

export function createNewNote(): INote {
  return {
    id: generateNoteId(),
    title: '',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum facilis architecto nam quas amet rem. Pariatur vero aliquam molestiae asperiores architecto. Rerum facere laborum perferendis vel, vitae nisi, inventore obcaecati iure omnis sequi impedit dolores assumenda incidunt? Tempore et unde quasi quisquam suscipit, consequatur magnam labore quod. Nesciunt accusamus veniam aut, explicabo molestias nostrum eum, voluptas culpa a velit doloribus praesentium facilis voluptate laboriosam rerum magni rem dicta distinctio?',
    createdAt: new Date(),
  }
}
