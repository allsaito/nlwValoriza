import { Entity, EntityRepository, Repository } from "typeorm"
import { Tag} from "../entities/Tag"

@EntityRepository(Tag)
class TagRespositoreis extends Repository<Tag>{}

export {TagRespositoreis}