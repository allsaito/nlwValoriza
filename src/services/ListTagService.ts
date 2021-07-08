import { getCustomRepository } from "typeorm"
import { TagRespositoreis } from "../repositories/TagsRepositoreis"
import {classToPlain} from "class-transformer"

class ListTagServices{

    async execute(){
        const tagsRepositories = getCustomRepository(TagRespositoreis) 

        const tags = await tagsRepositories.find()

        return classToPlain(tags)
    }
}

export {ListTagServices}