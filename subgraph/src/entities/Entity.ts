import { BigInt, Bytes, Entity } from "@graphprotocol/graph-ts";

export function getEntity(id: Bytes, optionalArg: BigInt = BigInt.zero()): Entity {
  if (entityExists(id)) {
    const entity = Entity.load(id);
    return entity;
  } else {
    throw new Error("Entity doesn't exist");
  }
}

export function createEntity(id: Bytes, arg: BigInt): Entity {
  if (!entityExists(id)) {
    entity = new Entity(id);
    return entity;
  } else {
    throw new Error("Entity already exists");
  }
}

export function getOrCreateEntity(id: Bytes, optionalArg: BigInt = BigInt.zero()): Entity {
  if (entityExists(id)) {
    return Entity.load(entity);
  } else {
    return createEntity(id, optionalArg);
  }
}

export function entityExists(id: Bytes): bool {
  return Entity.load(id) != null;
}
