
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model UserGroup
 * 
 */
export type UserGroup = $Result.DefaultSelection<Prisma.$UserGroupPayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model CookingStep
 * 
 */
export type CookingStep = $Result.DefaultSelection<Prisma.$CookingStepPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model RecipeTag
 * 
 */
export type RecipeTag = $Result.DefaultSelection<Prisma.$RecipeTagPayload>
/**
 * Model RecipeImage
 * 
 */
export type RecipeImage = $Result.DefaultSelection<Prisma.$RecipeImagePayload>
/**
 * Model ShoppingList
 * 
 */
export type ShoppingList = $Result.DefaultSelection<Prisma.$ShoppingListPayload>
/**
 * Model ShoppingItem
 * 
 */
export type ShoppingItem = $Result.DefaultSelection<Prisma.$ShoppingItemPayload>
/**
 * Model RecipeGroup
 * 
 */
export type RecipeGroup = $Result.DefaultSelection<Prisma.$RecipeGroupPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleName: {
  admin: 'admin',
  editor: 'editor',
  viewer: 'viewer'
};

export type RoleName = (typeof RoleName)[keyof typeof RoleName]


export const UnitType: {
  weight: 'weight',
  volume: 'volume',
  count: 'count',
  length: 'length'
};

export type UnitType = (typeof UnitType)[keyof typeof UnitType]

}

export type RoleName = $Enums.RoleName

export const RoleName: typeof $Enums.RoleName

export type UnitType = $Enums.UnitType

export const UnitType: typeof $Enums.UnitType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGroup`: Exposes CRUD operations for the **UserGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGroups
    * const userGroups = await prisma.userGroup.findMany()
    * ```
    */
  get userGroup(): Prisma.UserGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cookingStep`: Exposes CRUD operations for the **CookingStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CookingSteps
    * const cookingSteps = await prisma.cookingStep.findMany()
    * ```
    */
  get cookingStep(): Prisma.CookingStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeTag`: Exposes CRUD operations for the **RecipeTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeTags
    * const recipeTags = await prisma.recipeTag.findMany()
    * ```
    */
  get recipeTag(): Prisma.RecipeTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeImage`: Exposes CRUD operations for the **RecipeImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeImages
    * const recipeImages = await prisma.recipeImage.findMany()
    * ```
    */
  get recipeImage(): Prisma.RecipeImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shoppingList`: Exposes CRUD operations for the **ShoppingList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingLists
    * const shoppingLists = await prisma.shoppingList.findMany()
    * ```
    */
  get shoppingList(): Prisma.ShoppingListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shoppingItem`: Exposes CRUD operations for the **ShoppingItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingItems
    * const shoppingItems = await prisma.shoppingItem.findMany()
    * ```
    */
  get shoppingItem(): Prisma.ShoppingItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeGroup`: Exposes CRUD operations for the **RecipeGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeGroups
    * const recipeGroups = await prisma.recipeGroup.findMany()
    * ```
    */
  get recipeGroup(): Prisma.RecipeGroupDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Role: 'Role',
    Group: 'Group',
    UserGroup: 'UserGroup',
    Unit: 'Unit',
    Recipe: 'Recipe',
    Ingredient: 'Ingredient',
    CookingStep: 'CookingStep',
    Tag: 'Tag',
    RecipeTag: 'RecipeTag',
    RecipeImage: 'RecipeImage',
    ShoppingList: 'ShoppingList',
    ShoppingItem: 'ShoppingItem',
    RecipeGroup: 'RecipeGroup'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "group" | "userGroup" | "unit" | "recipe" | "ingredient" | "cookingStep" | "tag" | "recipeTag" | "recipeImage" | "shoppingList" | "shoppingItem" | "recipeGroup"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      UserGroup: {
        payload: Prisma.$UserGroupPayload<ExtArgs>
        fields: Prisma.UserGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload>
          }
          findFirst: {
            args: Prisma.UserGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload>
          }
          findMany: {
            args: Prisma.UserGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload>[]
          }
          create: {
            args: Prisma.UserGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload>
          }
          createMany: {
            args: Prisma.UserGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload>[]
          }
          delete: {
            args: Prisma.UserGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload>
          }
          update: {
            args: Prisma.UserGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload>
          }
          deleteMany: {
            args: Prisma.UserGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload>[]
          }
          upsert: {
            args: Prisma.UserGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroupPayload>
          }
          aggregate: {
            args: Prisma.UserGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGroup>
          }
          groupBy: {
            args: Prisma.UserGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGroupCountArgs<ExtArgs>
            result: $Utils.Optional<UserGroupCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      CookingStep: {
        payload: Prisma.$CookingStepPayload<ExtArgs>
        fields: Prisma.CookingStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CookingStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookingStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CookingStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookingStepPayload>
          }
          findFirst: {
            args: Prisma.CookingStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookingStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CookingStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookingStepPayload>
          }
          findMany: {
            args: Prisma.CookingStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookingStepPayload>[]
          }
          create: {
            args: Prisma.CookingStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookingStepPayload>
          }
          createMany: {
            args: Prisma.CookingStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CookingStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookingStepPayload>[]
          }
          delete: {
            args: Prisma.CookingStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookingStepPayload>
          }
          update: {
            args: Prisma.CookingStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookingStepPayload>
          }
          deleteMany: {
            args: Prisma.CookingStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CookingStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CookingStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookingStepPayload>[]
          }
          upsert: {
            args: Prisma.CookingStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CookingStepPayload>
          }
          aggregate: {
            args: Prisma.CookingStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCookingStep>
          }
          groupBy: {
            args: Prisma.CookingStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<CookingStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.CookingStepCountArgs<ExtArgs>
            result: $Utils.Optional<CookingStepCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      RecipeTag: {
        payload: Prisma.$RecipeTagPayload<ExtArgs>
        fields: Prisma.RecipeTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeTagPayload>
          }
          findFirst: {
            args: Prisma.RecipeTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeTagPayload>
          }
          findMany: {
            args: Prisma.RecipeTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeTagPayload>[]
          }
          create: {
            args: Prisma.RecipeTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeTagPayload>
          }
          createMany: {
            args: Prisma.RecipeTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeTagPayload>[]
          }
          delete: {
            args: Prisma.RecipeTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeTagPayload>
          }
          update: {
            args: Prisma.RecipeTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeTagPayload>
          }
          deleteMany: {
            args: Prisma.RecipeTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeTagPayload>[]
          }
          upsert: {
            args: Prisma.RecipeTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeTagPayload>
          }
          aggregate: {
            args: Prisma.RecipeTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeTag>
          }
          groupBy: {
            args: Prisma.RecipeTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeTagCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeTagCountAggregateOutputType> | number
          }
        }
      }
      RecipeImage: {
        payload: Prisma.$RecipeImagePayload<ExtArgs>
        fields: Prisma.RecipeImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>
          }
          findFirst: {
            args: Prisma.RecipeImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>
          }
          findMany: {
            args: Prisma.RecipeImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>[]
          }
          create: {
            args: Prisma.RecipeImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>
          }
          createMany: {
            args: Prisma.RecipeImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>[]
          }
          delete: {
            args: Prisma.RecipeImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>
          }
          update: {
            args: Prisma.RecipeImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>
          }
          deleteMany: {
            args: Prisma.RecipeImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>[]
          }
          upsert: {
            args: Prisma.RecipeImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeImagePayload>
          }
          aggregate: {
            args: Prisma.RecipeImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeImage>
          }
          groupBy: {
            args: Prisma.RecipeImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeImageCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeImageCountAggregateOutputType> | number
          }
        }
      }
      ShoppingList: {
        payload: Prisma.$ShoppingListPayload<ExtArgs>
        fields: Prisma.ShoppingListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShoppingListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShoppingListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          findFirst: {
            args: Prisma.ShoppingListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShoppingListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          findMany: {
            args: Prisma.ShoppingListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>[]
          }
          create: {
            args: Prisma.ShoppingListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          createMany: {
            args: Prisma.ShoppingListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShoppingListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>[]
          }
          delete: {
            args: Prisma.ShoppingListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          update: {
            args: Prisma.ShoppingListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          deleteMany: {
            args: Prisma.ShoppingListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShoppingListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShoppingListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>[]
          }
          upsert: {
            args: Prisma.ShoppingListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          aggregate: {
            args: Prisma.ShoppingListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShoppingList>
          }
          groupBy: {
            args: Prisma.ShoppingListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShoppingListCountArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListCountAggregateOutputType> | number
          }
        }
      }
      ShoppingItem: {
        payload: Prisma.$ShoppingItemPayload<ExtArgs>
        fields: Prisma.ShoppingItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShoppingItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShoppingItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload>
          }
          findFirst: {
            args: Prisma.ShoppingItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShoppingItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload>
          }
          findMany: {
            args: Prisma.ShoppingItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload>[]
          }
          create: {
            args: Prisma.ShoppingItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload>
          }
          createMany: {
            args: Prisma.ShoppingItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShoppingItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload>[]
          }
          delete: {
            args: Prisma.ShoppingItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload>
          }
          update: {
            args: Prisma.ShoppingItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload>
          }
          deleteMany: {
            args: Prisma.ShoppingItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShoppingItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShoppingItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload>[]
          }
          upsert: {
            args: Prisma.ShoppingItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload>
          }
          aggregate: {
            args: Prisma.ShoppingItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShoppingItem>
          }
          groupBy: {
            args: Prisma.ShoppingItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShoppingItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShoppingItemCountArgs<ExtArgs>
            result: $Utils.Optional<ShoppingItemCountAggregateOutputType> | number
          }
        }
      }
      RecipeGroup: {
        payload: Prisma.$RecipeGroupPayload<ExtArgs>
        fields: Prisma.RecipeGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeGroupPayload>
          }
          findFirst: {
            args: Prisma.RecipeGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeGroupPayload>
          }
          findMany: {
            args: Prisma.RecipeGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeGroupPayload>[]
          }
          create: {
            args: Prisma.RecipeGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeGroupPayload>
          }
          createMany: {
            args: Prisma.RecipeGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeGroupPayload>[]
          }
          delete: {
            args: Prisma.RecipeGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeGroupPayload>
          }
          update: {
            args: Prisma.RecipeGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeGroupPayload>
          }
          deleteMany: {
            args: Prisma.RecipeGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeGroupPayload>[]
          }
          upsert: {
            args: Prisma.RecipeGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeGroupPayload>
          }
          aggregate: {
            args: Prisma.RecipeGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeGroup>
          }
          groupBy: {
            args: Prisma.RecipeGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeGroupCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    group?: GroupOmit
    userGroup?: UserGroupOmit
    unit?: UnitOmit
    recipe?: RecipeOmit
    ingredient?: IngredientOmit
    cookingStep?: CookingStepOmit
    tag?: TagOmit
    recipeTag?: RecipeTagOmit
    recipeImage?: RecipeImageOmit
    shoppingList?: ShoppingListOmit
    shoppingItem?: ShoppingItemOmit
    recipeGroup?: RecipeGroupOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedGroups: number
    userGroups: number
    recipes: number
    shoppingLists: number
    sharedRecipes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedGroups?: boolean | UserCountOutputTypeCountOwnedGroupsArgs
    userGroups?: boolean | UserCountOutputTypeCountUserGroupsArgs
    recipes?: boolean | UserCountOutputTypeCountRecipesArgs
    shoppingLists?: boolean | UserCountOutputTypeCountShoppingListsArgs
    sharedRecipes?: boolean | UserCountOutputTypeCountSharedRecipesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShoppingListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeGroupWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    userGroups: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userGroups?: boolean | RoleCountOutputTypeCountUserGroupsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGroupWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    userGroups: number
    recipeGroups: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userGroups?: boolean | GroupCountOutputTypeCountUserGroupsArgs
    recipeGroups?: boolean | GroupCountOutputTypeCountRecipeGroupsArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountUserGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGroupWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountRecipeGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeGroupWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    ingredients: number
    shoppingItems: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | UnitCountOutputTypeCountIngredientsArgs
    shoppingItems?: boolean | UnitCountOutputTypeCountShoppingItemsArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountShoppingItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingItemWhereInput
  }


  /**
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    ingredients: number
    steps: number
    images: number
    tags: number
    groups: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | RecipeCountOutputTypeCountIngredientsArgs
    steps?: boolean | RecipeCountOutputTypeCountStepsArgs
    images?: boolean | RecipeCountOutputTypeCountImagesArgs
    tags?: boolean | RecipeCountOutputTypeCountTagsArgs
    groups?: boolean | RecipeCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CookingStepWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeImageWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeTagWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeGroupWhereInput
  }


  /**
   * Count Type IngredientCountOutputType
   */

  export type IngredientCountOutputType = {
    shoppingItems: number
  }

  export type IngredientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingItems?: boolean | IngredientCountOutputTypeCountShoppingItemsArgs
  }

  // Custom InputTypes
  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientCountOutputType
     */
    select?: IngredientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountShoppingItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingItemWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    recipes: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | TagCountOutputTypeCountRecipesArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeTagWhereInput
  }


  /**
   * Count Type ShoppingListCountOutputType
   */

  export type ShoppingListCountOutputType = {
    items: number
  }

  export type ShoppingListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ShoppingListCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ShoppingListCountOutputType without action
   */
  export type ShoppingListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListCountOutputType
     */
    select?: ShoppingListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShoppingListCountOutputType without action
   */
  export type ShoppingListCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password_hash: string | null
    first_name: string | null
    last_name: string | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password_hash: string | null
    first_name: string | null
    last_name: string | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password_hash: number
    first_name: number
    last_name: number
    created_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    created_at?: boolean
    ownedGroups?: boolean | User$ownedGroupsArgs<ExtArgs>
    userGroups?: boolean | User$userGroupsArgs<ExtArgs>
    recipes?: boolean | User$recipesArgs<ExtArgs>
    shoppingLists?: boolean | User$shoppingListsArgs<ExtArgs>
    sharedRecipes?: boolean | User$sharedRecipesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password_hash" | "first_name" | "last_name" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedGroups?: boolean | User$ownedGroupsArgs<ExtArgs>
    userGroups?: boolean | User$userGroupsArgs<ExtArgs>
    recipes?: boolean | User$recipesArgs<ExtArgs>
    shoppingLists?: boolean | User$shoppingListsArgs<ExtArgs>
    sharedRecipes?: boolean | User$sharedRecipesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedGroups: Prisma.$GroupPayload<ExtArgs>[]
      userGroups: Prisma.$UserGroupPayload<ExtArgs>[]
      recipes: Prisma.$RecipePayload<ExtArgs>[]
      shoppingLists: Prisma.$ShoppingListPayload<ExtArgs>[]
      sharedRecipes: Prisma.$RecipeGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password_hash: string
      first_name: string
      last_name: string
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedGroups<T extends User$ownedGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userGroups<T extends User$userGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$userGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipes<T extends User$recipesArgs<ExtArgs> = {}>(args?: Subset<T, User$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shoppingLists<T extends User$shoppingListsArgs<ExtArgs> = {}>(args?: Subset<T, User$shoppingListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sharedRecipes<T extends User$sharedRecipesArgs<ExtArgs> = {}>(args?: Subset<T, User$sharedRecipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ownedGroups
   */
  export type User$ownedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * User.userGroups
   */
  export type User$userGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    where?: UserGroupWhereInput
    orderBy?: UserGroupOrderByWithRelationInput | UserGroupOrderByWithRelationInput[]
    cursor?: UserGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGroupScalarFieldEnum | UserGroupScalarFieldEnum[]
  }

  /**
   * User.recipes
   */
  export type User$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    cursor?: RecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * User.shoppingLists
   */
  export type User$shoppingListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    where?: ShoppingListWhereInput
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    cursor?: ShoppingListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * User.sharedRecipes
   */
  export type User$sharedRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeGroup
     */
    select?: RecipeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeGroup
     */
    omit?: RecipeGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeGroupInclude<ExtArgs> | null
    where?: RecipeGroupWhereInput
    orderBy?: RecipeGroupOrderByWithRelationInput | RecipeGroupOrderByWithRelationInput[]
    cursor?: RecipeGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeGroupScalarFieldEnum | RecipeGroupScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: $Enums.RoleName | null
    description: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: $Enums.RoleName | null
    description: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: $Enums.RoleName
    description: string | null
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userGroups?: boolean | Role$userGroupsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userGroups?: boolean | Role$userGroupsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      userGroups: Prisma.$UserGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: $Enums.RoleName
      description: string | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userGroups<T extends Role$userGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Role$userGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'RoleName'>
    readonly description: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.userGroups
   */
  export type Role$userGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    where?: UserGroupWhereInput
    orderBy?: UserGroupOrderByWithRelationInput | UserGroupOrderByWithRelationInput[]
    cursor?: UserGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGroupScalarFieldEnum | UserGroupScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    owner_id: string | null
    name: string | null
    description: string | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    owner_id: string | null
    name: string | null
    description: string | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    owner_id: number
    name: number
    description: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    description?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    description?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    owner_id: string
    name: string
    description: string | null
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    name?: boolean
    description?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    userGroups?: boolean | Group$userGroupsArgs<ExtArgs>
    recipeGroups?: boolean | Group$recipeGroupsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    name?: boolean
    description?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    name?: boolean
    description?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    owner_id?: boolean
    name?: boolean
    description?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "owner_id" | "name" | "description", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    userGroups?: boolean | Group$userGroupsArgs<ExtArgs>
    recipeGroups?: boolean | Group$recipeGroupsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      userGroups: Prisma.$UserGroupPayload<ExtArgs>[]
      recipeGroups: Prisma.$RecipeGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      owner_id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userGroups<T extends Group$userGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Group$userGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipeGroups<T extends Group$recipeGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Group$recipeGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly owner_id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly description: FieldRef<"Group", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.userGroups
   */
  export type Group$userGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    where?: UserGroupWhereInput
    orderBy?: UserGroupOrderByWithRelationInput | UserGroupOrderByWithRelationInput[]
    cursor?: UserGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGroupScalarFieldEnum | UserGroupScalarFieldEnum[]
  }

  /**
   * Group.recipeGroups
   */
  export type Group$recipeGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeGroup
     */
    select?: RecipeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeGroup
     */
    omit?: RecipeGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeGroupInclude<ExtArgs> | null
    where?: RecipeGroupWhereInput
    orderBy?: RecipeGroupOrderByWithRelationInput | RecipeGroupOrderByWithRelationInput[]
    cursor?: RecipeGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeGroupScalarFieldEnum | RecipeGroupScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model UserGroup
   */

  export type AggregateUserGroup = {
    _count: UserGroupCountAggregateOutputType | null
    _min: UserGroupMinAggregateOutputType | null
    _max: UserGroupMaxAggregateOutputType | null
  }

  export type UserGroupMinAggregateOutputType = {
    user_id: string | null
    role_id: string | null
    group_id: string | null
    is_owner: boolean | null
    joined_at: Date | null
  }

  export type UserGroupMaxAggregateOutputType = {
    user_id: string | null
    role_id: string | null
    group_id: string | null
    is_owner: boolean | null
    joined_at: Date | null
  }

  export type UserGroupCountAggregateOutputType = {
    user_id: number
    role_id: number
    group_id: number
    is_owner: number
    joined_at: number
    _all: number
  }


  export type UserGroupMinAggregateInputType = {
    user_id?: true
    role_id?: true
    group_id?: true
    is_owner?: true
    joined_at?: true
  }

  export type UserGroupMaxAggregateInputType = {
    user_id?: true
    role_id?: true
    group_id?: true
    is_owner?: true
    joined_at?: true
  }

  export type UserGroupCountAggregateInputType = {
    user_id?: true
    role_id?: true
    group_id?: true
    is_owner?: true
    joined_at?: true
    _all?: true
  }

  export type UserGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGroup to aggregate.
     */
    where?: UserGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGroups to fetch.
     */
    orderBy?: UserGroupOrderByWithRelationInput | UserGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGroups
    **/
    _count?: true | UserGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGroupMaxAggregateInputType
  }

  export type GetUserGroupAggregateType<T extends UserGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGroup[P]>
      : GetScalarType<T[P], AggregateUserGroup[P]>
  }




  export type UserGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGroupWhereInput
    orderBy?: UserGroupOrderByWithAggregationInput | UserGroupOrderByWithAggregationInput[]
    by: UserGroupScalarFieldEnum[] | UserGroupScalarFieldEnum
    having?: UserGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGroupCountAggregateInputType | true
    _min?: UserGroupMinAggregateInputType
    _max?: UserGroupMaxAggregateInputType
  }

  export type UserGroupGroupByOutputType = {
    user_id: string
    role_id: string
    group_id: string
    is_owner: boolean
    joined_at: Date
    _count: UserGroupCountAggregateOutputType | null
    _min: UserGroupMinAggregateOutputType | null
    _max: UserGroupMaxAggregateOutputType | null
  }

  type GetUserGroupGroupByPayload<T extends UserGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupGroupByOutputType[P]>
        }
      >
    >


  export type UserGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    group_id?: boolean
    is_owner?: boolean
    joined_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGroup"]>

  export type UserGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    group_id?: boolean
    is_owner?: boolean
    joined_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGroup"]>

  export type UserGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    group_id?: boolean
    is_owner?: boolean
    joined_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGroup"]>

  export type UserGroupSelectScalar = {
    user_id?: boolean
    role_id?: boolean
    group_id?: boolean
    is_owner?: boolean
    joined_at?: boolean
  }

  export type UserGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "role_id" | "group_id" | "is_owner" | "joined_at", ExtArgs["result"]["userGroup"]>
  export type UserGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type UserGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type UserGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $UserGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGroup"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      role_id: string
      group_id: string
      is_owner: boolean
      joined_at: Date
    }, ExtArgs["result"]["userGroup"]>
    composites: {}
  }

  type UserGroupGetPayload<S extends boolean | null | undefined | UserGroupDefaultArgs> = $Result.GetResult<Prisma.$UserGroupPayload, S>

  type UserGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGroupCountAggregateInputType | true
    }

  export interface UserGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGroup'], meta: { name: 'UserGroup' } }
    /**
     * Find zero or one UserGroup that matches the filter.
     * @param {UserGroupFindUniqueArgs} args - Arguments to find a UserGroup
     * @example
     * // Get one UserGroup
     * const userGroup = await prisma.userGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGroupFindUniqueArgs>(args: SelectSubset<T, UserGroupFindUniqueArgs<ExtArgs>>): Prisma__UserGroupClient<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGroupFindUniqueOrThrowArgs} args - Arguments to find a UserGroup
     * @example
     * // Get one UserGroup
     * const userGroup = await prisma.userGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGroupClient<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupFindFirstArgs} args - Arguments to find a UserGroup
     * @example
     * // Get one UserGroup
     * const userGroup = await prisma.userGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGroupFindFirstArgs>(args?: SelectSubset<T, UserGroupFindFirstArgs<ExtArgs>>): Prisma__UserGroupClient<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupFindFirstOrThrowArgs} args - Arguments to find a UserGroup
     * @example
     * // Get one UserGroup
     * const userGroup = await prisma.userGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGroupClient<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGroups
     * const userGroups = await prisma.userGroup.findMany()
     * 
     * // Get first 10 UserGroups
     * const userGroups = await prisma.userGroup.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userGroupWithUser_idOnly = await prisma.userGroup.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserGroupFindManyArgs>(args?: SelectSubset<T, UserGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGroup.
     * @param {UserGroupCreateArgs} args - Arguments to create a UserGroup.
     * @example
     * // Create one UserGroup
     * const UserGroup = await prisma.userGroup.create({
     *   data: {
     *     // ... data to create a UserGroup
     *   }
     * })
     * 
     */
    create<T extends UserGroupCreateArgs>(args: SelectSubset<T, UserGroupCreateArgs<ExtArgs>>): Prisma__UserGroupClient<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGroups.
     * @param {UserGroupCreateManyArgs} args - Arguments to create many UserGroups.
     * @example
     * // Create many UserGroups
     * const userGroup = await prisma.userGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGroupCreateManyArgs>(args?: SelectSubset<T, UserGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGroups and returns the data saved in the database.
     * @param {UserGroupCreateManyAndReturnArgs} args - Arguments to create many UserGroups.
     * @example
     * // Create many UserGroups
     * const userGroup = await prisma.userGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGroups and only return the `user_id`
     * const userGroupWithUser_idOnly = await prisma.userGroup.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGroup.
     * @param {UserGroupDeleteArgs} args - Arguments to delete one UserGroup.
     * @example
     * // Delete one UserGroup
     * const UserGroup = await prisma.userGroup.delete({
     *   where: {
     *     // ... filter to delete one UserGroup
     *   }
     * })
     * 
     */
    delete<T extends UserGroupDeleteArgs>(args: SelectSubset<T, UserGroupDeleteArgs<ExtArgs>>): Prisma__UserGroupClient<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGroup.
     * @param {UserGroupUpdateArgs} args - Arguments to update one UserGroup.
     * @example
     * // Update one UserGroup
     * const userGroup = await prisma.userGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGroupUpdateArgs>(args: SelectSubset<T, UserGroupUpdateArgs<ExtArgs>>): Prisma__UserGroupClient<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGroups.
     * @param {UserGroupDeleteManyArgs} args - Arguments to filter UserGroups to delete.
     * @example
     * // Delete a few UserGroups
     * const { count } = await prisma.userGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGroupDeleteManyArgs>(args?: SelectSubset<T, UserGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGroups
     * const userGroup = await prisma.userGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGroupUpdateManyArgs>(args: SelectSubset<T, UserGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGroups and returns the data updated in the database.
     * @param {UserGroupUpdateManyAndReturnArgs} args - Arguments to update many UserGroups.
     * @example
     * // Update many UserGroups
     * const userGroup = await prisma.userGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGroups and only return the `user_id`
     * const userGroupWithUser_idOnly = await prisma.userGroup.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGroup.
     * @param {UserGroupUpsertArgs} args - Arguments to update or create a UserGroup.
     * @example
     * // Update or create a UserGroup
     * const userGroup = await prisma.userGroup.upsert({
     *   create: {
     *     // ... data to create a UserGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGroup we want to update
     *   }
     * })
     */
    upsert<T extends UserGroupUpsertArgs>(args: SelectSubset<T, UserGroupUpsertArgs<ExtArgs>>): Prisma__UserGroupClient<$Result.GetResult<Prisma.$UserGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupCountArgs} args - Arguments to filter UserGroups to count.
     * @example
     * // Count the number of UserGroups
     * const count = await prisma.userGroup.count({
     *   where: {
     *     // ... the filter for the UserGroups we want to count
     *   }
     * })
    **/
    count<T extends UserGroupCountArgs>(
      args?: Subset<T, UserGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserGroupAggregateArgs>(args: Subset<T, UserGroupAggregateArgs>): Prisma.PrismaPromise<GetUserGroupAggregateType<T>>

    /**
     * Group by UserGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGroup model
   */
  readonly fields: UserGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserGroup model
   */
  interface UserGroupFieldRefs {
    readonly user_id: FieldRef<"UserGroup", 'String'>
    readonly role_id: FieldRef<"UserGroup", 'String'>
    readonly group_id: FieldRef<"UserGroup", 'String'>
    readonly is_owner: FieldRef<"UserGroup", 'Boolean'>
    readonly joined_at: FieldRef<"UserGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserGroup findUnique
   */
  export type UserGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserGroup to fetch.
     */
    where: UserGroupWhereUniqueInput
  }

  /**
   * UserGroup findUniqueOrThrow
   */
  export type UserGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserGroup to fetch.
     */
    where: UserGroupWhereUniqueInput
  }

  /**
   * UserGroup findFirst
   */
  export type UserGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserGroup to fetch.
     */
    where?: UserGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGroups to fetch.
     */
    orderBy?: UserGroupOrderByWithRelationInput | UserGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGroups.
     */
    cursor?: UserGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGroups.
     */
    distinct?: UserGroupScalarFieldEnum | UserGroupScalarFieldEnum[]
  }

  /**
   * UserGroup findFirstOrThrow
   */
  export type UserGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserGroup to fetch.
     */
    where?: UserGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGroups to fetch.
     */
    orderBy?: UserGroupOrderByWithRelationInput | UserGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGroups.
     */
    cursor?: UserGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGroups.
     */
    distinct?: UserGroupScalarFieldEnum | UserGroupScalarFieldEnum[]
  }

  /**
   * UserGroup findMany
   */
  export type UserGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserGroups to fetch.
     */
    where?: UserGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGroups to fetch.
     */
    orderBy?: UserGroupOrderByWithRelationInput | UserGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGroups.
     */
    cursor?: UserGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGroups.
     */
    skip?: number
    distinct?: UserGroupScalarFieldEnum | UserGroupScalarFieldEnum[]
  }

  /**
   * UserGroup create
   */
  export type UserGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGroup.
     */
    data: XOR<UserGroupCreateInput, UserGroupUncheckedCreateInput>
  }

  /**
   * UserGroup createMany
   */
  export type UserGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGroups.
     */
    data: UserGroupCreateManyInput | UserGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGroup createManyAndReturn
   */
  export type UserGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * The data used to create many UserGroups.
     */
    data: UserGroupCreateManyInput | UserGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGroup update
   */
  export type UserGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGroup.
     */
    data: XOR<UserGroupUpdateInput, UserGroupUncheckedUpdateInput>
    /**
     * Choose, which UserGroup to update.
     */
    where: UserGroupWhereUniqueInput
  }

  /**
   * UserGroup updateMany
   */
  export type UserGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGroups.
     */
    data: XOR<UserGroupUpdateManyMutationInput, UserGroupUncheckedUpdateManyInput>
    /**
     * Filter which UserGroups to update
     */
    where?: UserGroupWhereInput
    /**
     * Limit how many UserGroups to update.
     */
    limit?: number
  }

  /**
   * UserGroup updateManyAndReturn
   */
  export type UserGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * The data used to update UserGroups.
     */
    data: XOR<UserGroupUpdateManyMutationInput, UserGroupUncheckedUpdateManyInput>
    /**
     * Filter which UserGroups to update
     */
    where?: UserGroupWhereInput
    /**
     * Limit how many UserGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGroup upsert
   */
  export type UserGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGroup to update in case it exists.
     */
    where: UserGroupWhereUniqueInput
    /**
     * In case the UserGroup found by the `where` argument doesn't exist, create a new UserGroup with this data.
     */
    create: XOR<UserGroupCreateInput, UserGroupUncheckedCreateInput>
    /**
     * In case the UserGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGroupUpdateInput, UserGroupUncheckedUpdateInput>
  }

  /**
   * UserGroup delete
   */
  export type UserGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
    /**
     * Filter which UserGroup to delete.
     */
    where: UserGroupWhereUniqueInput
  }

  /**
   * UserGroup deleteMany
   */
  export type UserGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGroups to delete
     */
    where?: UserGroupWhereInput
    /**
     * Limit how many UserGroups to delete.
     */
    limit?: number
  }

  /**
   * UserGroup without action
   */
  export type UserGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroup
     */
    select?: UserGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroup
     */
    omit?: UserGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroupInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitMinAggregateOutputType = {
    id: string | null
    name: string | null
    abbreviation: string | null
    unit_type: $Enums.UnitType | null
  }

  export type UnitMaxAggregateOutputType = {
    id: string | null
    name: string | null
    abbreviation: string | null
    unit_type: $Enums.UnitType | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    name: number
    abbreviation: number
    unit_type: number
    _all: number
  }


  export type UnitMinAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    unit_type?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    unit_type?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    unit_type?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: string
    name: string
    abbreviation: string
    unit_type: $Enums.UnitType
    _count: UnitCountAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    unit_type?: boolean
    ingredients?: boolean | Unit$ingredientsArgs<ExtArgs>
    shoppingItems?: boolean | Unit$shoppingItemsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    unit_type?: boolean
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    unit_type?: boolean
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    unit_type?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "abbreviation" | "unit_type", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | Unit$ingredientsArgs<ExtArgs>
    shoppingItems?: boolean | Unit$shoppingItemsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      ingredients: Prisma.$IngredientPayload<ExtArgs>[]
      shoppingItems: Prisma.$ShoppingItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      abbreviation: string
      unit_type: $Enums.UnitType
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {UnitUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnitUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients<T extends Unit$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shoppingItems<T extends Unit$shoppingItemsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$shoppingItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'String'>
    readonly name: FieldRef<"Unit", 'String'>
    readonly abbreviation: FieldRef<"Unit", 'String'>
    readonly unit_type: FieldRef<"Unit", 'UnitType'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit updateManyAndReturn
   */
  export type UnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.ingredients
   */
  export type Unit$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    cursor?: IngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Unit.shoppingItems
   */
  export type Unit$shoppingItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingItem
     */
    omit?: ShoppingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    where?: ShoppingItemWhereInput
    orderBy?: ShoppingItemOrderByWithRelationInput | ShoppingItemOrderByWithRelationInput[]
    cursor?: ShoppingItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingItemScalarFieldEnum | ShoppingItemScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    time_required_min: number | null
    servings: number | null
  }

  export type RecipeSumAggregateOutputType = {
    time_required_min: number | null
    servings: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: string | null
    author_id: string | null
    title: string | null
    description: string | null
    time_required_min: number | null
    difficulty: string | null
    servings: number | null
    is_public: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: string | null
    author_id: string | null
    title: string | null
    description: string | null
    time_required_min: number | null
    difficulty: string | null
    servings: number | null
    is_public: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    author_id: number
    title: number
    description: number
    time_required_min: number
    difficulty: number
    servings: number
    is_public: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    time_required_min?: true
    servings?: true
  }

  export type RecipeSumAggregateInputType = {
    time_required_min?: true
    servings?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    author_id?: true
    title?: true
    description?: true
    time_required_min?: true
    difficulty?: true
    servings?: true
    is_public?: true
    created_at?: true
    updated_at?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    author_id?: true
    title?: true
    description?: true
    time_required_min?: true
    difficulty?: true
    servings?: true
    is_public?: true
    created_at?: true
    updated_at?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    author_id?: true
    title?: true
    description?: true
    time_required_min?: true
    difficulty?: true
    servings?: true
    is_public?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: string
    author_id: string
    title: string
    description: string | null
    time_required_min: number | null
    difficulty: string | null
    servings: number | null
    is_public: boolean
    created_at: Date
    updated_at: Date
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author_id?: boolean
    title?: boolean
    description?: boolean
    time_required_min?: boolean
    difficulty?: boolean
    servings?: boolean
    is_public?: boolean
    created_at?: boolean
    updated_at?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    steps?: boolean | Recipe$stepsArgs<ExtArgs>
    images?: boolean | Recipe$imagesArgs<ExtArgs>
    tags?: boolean | Recipe$tagsArgs<ExtArgs>
    groups?: boolean | Recipe$groupsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author_id?: boolean
    title?: boolean
    description?: boolean
    time_required_min?: boolean
    difficulty?: boolean
    servings?: boolean
    is_public?: boolean
    created_at?: boolean
    updated_at?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author_id?: boolean
    title?: boolean
    description?: boolean
    time_required_min?: boolean
    difficulty?: boolean
    servings?: boolean
    is_public?: boolean
    created_at?: boolean
    updated_at?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    author_id?: boolean
    title?: boolean
    description?: boolean
    time_required_min?: boolean
    difficulty?: boolean
    servings?: boolean
    is_public?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "author_id" | "title" | "description" | "time_required_min" | "difficulty" | "servings" | "is_public" | "created_at" | "updated_at", ExtArgs["result"]["recipe"]>
  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    steps?: boolean | Recipe$stepsArgs<ExtArgs>
    images?: boolean | Recipe$imagesArgs<ExtArgs>
    tags?: boolean | Recipe$tagsArgs<ExtArgs>
    groups?: boolean | Recipe$groupsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      ingredients: Prisma.$IngredientPayload<ExtArgs>[]
      steps: Prisma.$CookingStepPayload<ExtArgs>[]
      images: Prisma.$RecipeImagePayload<ExtArgs>[]
      tags: Prisma.$RecipeTagPayload<ExtArgs>[]
      groups: Prisma.$RecipeGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      author_id: string
      title: string
      description: string | null
      time_required_min: number | null
      difficulty: string | null
      servings: number | null
      is_public: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeFindManyArgs>(args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends RecipeCreateArgs>(args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeCreateManyArgs>(args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends RecipeDeleteArgs>(args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUpdateArgs>(args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredients<T extends Recipe$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    steps<T extends Recipe$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CookingStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Recipe$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Recipe$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends Recipe$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recipe model
   */
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'String'>
    readonly author_id: FieldRef<"Recipe", 'String'>
    readonly title: FieldRef<"Recipe", 'String'>
    readonly description: FieldRef<"Recipe", 'String'>
    readonly time_required_min: FieldRef<"Recipe", 'Int'>
    readonly difficulty: FieldRef<"Recipe", 'String'>
    readonly servings: FieldRef<"Recipe", 'Int'>
    readonly is_public: FieldRef<"Recipe", 'Boolean'>
    readonly created_at: FieldRef<"Recipe", 'DateTime'>
    readonly updated_at: FieldRef<"Recipe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe createManyAndReturn
   */
  export type RecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe updateManyAndReturn
   */
  export type RecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number
  }

  /**
   * Recipe.ingredients
   */
  export type Recipe$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    cursor?: IngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Recipe.steps
   */
  export type Recipe$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookingStep
     */
    select?: CookingStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookingStep
     */
    omit?: CookingStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookingStepInclude<ExtArgs> | null
    where?: CookingStepWhereInput
    orderBy?: CookingStepOrderByWithRelationInput | CookingStepOrderByWithRelationInput[]
    cursor?: CookingStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CookingStepScalarFieldEnum | CookingStepScalarFieldEnum[]
  }

  /**
   * Recipe.images
   */
  export type Recipe$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    where?: RecipeImageWhereInput
    orderBy?: RecipeImageOrderByWithRelationInput | RecipeImageOrderByWithRelationInput[]
    cursor?: RecipeImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeImageScalarFieldEnum | RecipeImageScalarFieldEnum[]
  }

  /**
   * Recipe.tags
   */
  export type Recipe$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeTag
     */
    select?: RecipeTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeTag
     */
    omit?: RecipeTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeTagInclude<ExtArgs> | null
    where?: RecipeTagWhereInput
    orderBy?: RecipeTagOrderByWithRelationInput | RecipeTagOrderByWithRelationInput[]
    cursor?: RecipeTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeTagScalarFieldEnum | RecipeTagScalarFieldEnum[]
  }

  /**
   * Recipe.groups
   */
  export type Recipe$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeGroup
     */
    select?: RecipeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeGroup
     */
    omit?: RecipeGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeGroupInclude<ExtArgs> | null
    where?: RecipeGroupWhereInput
    orderBy?: RecipeGroupOrderByWithRelationInput | RecipeGroupOrderByWithRelationInput[]
    cursor?: RecipeGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeGroupScalarFieldEnum | RecipeGroupScalarFieldEnum[]
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
  }


  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    quantity: Decimal | null
    calories: Decimal | null
    protein_g: Decimal | null
    carbs_g: Decimal | null
    fat_g: Decimal | null
    sort_order: number | null
  }

  export type IngredientSumAggregateOutputType = {
    quantity: Decimal | null
    calories: Decimal | null
    protein_g: Decimal | null
    carbs_g: Decimal | null
    fat_g: Decimal | null
    sort_order: number | null
  }

  export type IngredientMinAggregateOutputType = {
    id: string | null
    recipe_id: string | null
    unit_id: string | null
    name: string | null
    quantity: Decimal | null
    calories: Decimal | null
    protein_g: Decimal | null
    carbs_g: Decimal | null
    fat_g: Decimal | null
    sort_order: number | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: string | null
    recipe_id: string | null
    unit_id: string | null
    name: string | null
    quantity: Decimal | null
    calories: Decimal | null
    protein_g: Decimal | null
    carbs_g: Decimal | null
    fat_g: Decimal | null
    sort_order: number | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    recipe_id: number
    unit_id: number
    name: number
    quantity: number
    calories: number
    protein_g: number
    carbs_g: number
    fat_g: number
    sort_order: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    quantity?: true
    calories?: true
    protein_g?: true
    carbs_g?: true
    fat_g?: true
    sort_order?: true
  }

  export type IngredientSumAggregateInputType = {
    quantity?: true
    calories?: true
    protein_g?: true
    carbs_g?: true
    fat_g?: true
    sort_order?: true
  }

  export type IngredientMinAggregateInputType = {
    id?: true
    recipe_id?: true
    unit_id?: true
    name?: true
    quantity?: true
    calories?: true
    protein_g?: true
    carbs_g?: true
    fat_g?: true
    sort_order?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    recipe_id?: true
    unit_id?: true
    name?: true
    quantity?: true
    calories?: true
    protein_g?: true
    carbs_g?: true
    fat_g?: true
    sort_order?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    recipe_id?: true
    unit_id?: true
    name?: true
    quantity?: true
    calories?: true
    protein_g?: true
    carbs_g?: true
    fat_g?: true
    sort_order?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: string
    recipe_id: string
    unit_id: string
    name: string
    quantity: Decimal
    calories: Decimal | null
    protein_g: Decimal | null
    carbs_g: Decimal | null
    fat_g: Decimal | null
    sort_order: number
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipe_id?: boolean
    unit_id?: boolean
    name?: boolean
    quantity?: boolean
    calories?: boolean
    protein_g?: boolean
    carbs_g?: boolean
    fat_g?: boolean
    sort_order?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    shoppingItems?: boolean | Ingredient$shoppingItemsArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipe_id?: boolean
    unit_id?: boolean
    name?: boolean
    quantity?: boolean
    calories?: boolean
    protein_g?: boolean
    carbs_g?: boolean
    fat_g?: boolean
    sort_order?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipe_id?: boolean
    unit_id?: boolean
    name?: boolean
    quantity?: boolean
    calories?: boolean
    protein_g?: boolean
    carbs_g?: boolean
    fat_g?: boolean
    sort_order?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    recipe_id?: boolean
    unit_id?: boolean
    name?: boolean
    quantity?: boolean
    calories?: boolean
    protein_g?: boolean
    carbs_g?: boolean
    fat_g?: boolean
    sort_order?: boolean
  }

  export type IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipe_id" | "unit_id" | "name" | "quantity" | "calories" | "protein_g" | "carbs_g" | "fat_g" | "sort_order", ExtArgs["result"]["ingredient"]>
  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    shoppingItems?: boolean | Ingredient$shoppingItemsArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }

  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs>
      shoppingItems: Prisma.$ShoppingItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipe_id: string
      unit_id: string
      name: string
      quantity: Prisma.Decimal
      calories: Prisma.Decimal | null
      protein_g: Prisma.Decimal | null
      carbs_g: Prisma.Decimal | null
      fat_g: Prisma.Decimal | null
      sort_order: number
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientFindUniqueArgs>(args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientFindFirstArgs>(args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientFindManyArgs>(args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends IngredientCreateArgs>(args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientCreateManyArgs>(args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends IngredientDeleteArgs>(args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientUpdateArgs>(args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientDeleteManyArgs>(args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientUpdateManyArgs>(args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUpsertArgs>(args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shoppingItems<T extends Ingredient$shoppingItemsArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$shoppingItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ingredient model
   */
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'String'>
    readonly recipe_id: FieldRef<"Ingredient", 'String'>
    readonly unit_id: FieldRef<"Ingredient", 'String'>
    readonly name: FieldRef<"Ingredient", 'String'>
    readonly quantity: FieldRef<"Ingredient", 'Decimal'>
    readonly calories: FieldRef<"Ingredient", 'Decimal'>
    readonly protein_g: FieldRef<"Ingredient", 'Decimal'>
    readonly carbs_g: FieldRef<"Ingredient", 'Decimal'>
    readonly fat_g: FieldRef<"Ingredient", 'Decimal'>
    readonly sort_order: FieldRef<"Ingredient", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient createManyAndReturn
   */
  export type IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient updateManyAndReturn
   */
  export type IngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredient.shoppingItems
   */
  export type Ingredient$shoppingItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingItem
     */
    omit?: ShoppingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    where?: ShoppingItemWhereInput
    orderBy?: ShoppingItemOrderByWithRelationInput | ShoppingItemOrderByWithRelationInput[]
    cursor?: ShoppingItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingItemScalarFieldEnum | ShoppingItemScalarFieldEnum[]
  }

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
  }


  /**
   * Model CookingStep
   */

  export type AggregateCookingStep = {
    _count: CookingStepCountAggregateOutputType | null
    _avg: CookingStepAvgAggregateOutputType | null
    _sum: CookingStepSumAggregateOutputType | null
    _min: CookingStepMinAggregateOutputType | null
    _max: CookingStepMaxAggregateOutputType | null
  }

  export type CookingStepAvgAggregateOutputType = {
    step_number: number | null
    duration_min: number | null
  }

  export type CookingStepSumAggregateOutputType = {
    step_number: number | null
    duration_min: number | null
  }

  export type CookingStepMinAggregateOutputType = {
    id: string | null
    recipe_id: string | null
    step_number: number | null
    instruction: string | null
    duration_min: number | null
  }

  export type CookingStepMaxAggregateOutputType = {
    id: string | null
    recipe_id: string | null
    step_number: number | null
    instruction: string | null
    duration_min: number | null
  }

  export type CookingStepCountAggregateOutputType = {
    id: number
    recipe_id: number
    step_number: number
    instruction: number
    duration_min: number
    _all: number
  }


  export type CookingStepAvgAggregateInputType = {
    step_number?: true
    duration_min?: true
  }

  export type CookingStepSumAggregateInputType = {
    step_number?: true
    duration_min?: true
  }

  export type CookingStepMinAggregateInputType = {
    id?: true
    recipe_id?: true
    step_number?: true
    instruction?: true
    duration_min?: true
  }

  export type CookingStepMaxAggregateInputType = {
    id?: true
    recipe_id?: true
    step_number?: true
    instruction?: true
    duration_min?: true
  }

  export type CookingStepCountAggregateInputType = {
    id?: true
    recipe_id?: true
    step_number?: true
    instruction?: true
    duration_min?: true
    _all?: true
  }

  export type CookingStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CookingStep to aggregate.
     */
    where?: CookingStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CookingSteps to fetch.
     */
    orderBy?: CookingStepOrderByWithRelationInput | CookingStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CookingStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CookingSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CookingSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CookingSteps
    **/
    _count?: true | CookingStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CookingStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CookingStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CookingStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CookingStepMaxAggregateInputType
  }

  export type GetCookingStepAggregateType<T extends CookingStepAggregateArgs> = {
        [P in keyof T & keyof AggregateCookingStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCookingStep[P]>
      : GetScalarType<T[P], AggregateCookingStep[P]>
  }




  export type CookingStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CookingStepWhereInput
    orderBy?: CookingStepOrderByWithAggregationInput | CookingStepOrderByWithAggregationInput[]
    by: CookingStepScalarFieldEnum[] | CookingStepScalarFieldEnum
    having?: CookingStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CookingStepCountAggregateInputType | true
    _avg?: CookingStepAvgAggregateInputType
    _sum?: CookingStepSumAggregateInputType
    _min?: CookingStepMinAggregateInputType
    _max?: CookingStepMaxAggregateInputType
  }

  export type CookingStepGroupByOutputType = {
    id: string
    recipe_id: string
    step_number: number
    instruction: string
    duration_min: number | null
    _count: CookingStepCountAggregateOutputType | null
    _avg: CookingStepAvgAggregateOutputType | null
    _sum: CookingStepSumAggregateOutputType | null
    _min: CookingStepMinAggregateOutputType | null
    _max: CookingStepMaxAggregateOutputType | null
  }

  type GetCookingStepGroupByPayload<T extends CookingStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CookingStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CookingStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CookingStepGroupByOutputType[P]>
            : GetScalarType<T[P], CookingStepGroupByOutputType[P]>
        }
      >
    >


  export type CookingStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipe_id?: boolean
    step_number?: boolean
    instruction?: boolean
    duration_min?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cookingStep"]>

  export type CookingStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipe_id?: boolean
    step_number?: boolean
    instruction?: boolean
    duration_min?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cookingStep"]>

  export type CookingStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipe_id?: boolean
    step_number?: boolean
    instruction?: boolean
    duration_min?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cookingStep"]>

  export type CookingStepSelectScalar = {
    id?: boolean
    recipe_id?: boolean
    step_number?: boolean
    instruction?: boolean
    duration_min?: boolean
  }

  export type CookingStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipe_id" | "step_number" | "instruction" | "duration_min", ExtArgs["result"]["cookingStep"]>
  export type CookingStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type CookingStepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type CookingStepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $CookingStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CookingStep"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipe_id: string
      step_number: number
      instruction: string
      duration_min: number | null
    }, ExtArgs["result"]["cookingStep"]>
    composites: {}
  }

  type CookingStepGetPayload<S extends boolean | null | undefined | CookingStepDefaultArgs> = $Result.GetResult<Prisma.$CookingStepPayload, S>

  type CookingStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CookingStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CookingStepCountAggregateInputType | true
    }

  export interface CookingStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CookingStep'], meta: { name: 'CookingStep' } }
    /**
     * Find zero or one CookingStep that matches the filter.
     * @param {CookingStepFindUniqueArgs} args - Arguments to find a CookingStep
     * @example
     * // Get one CookingStep
     * const cookingStep = await prisma.cookingStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CookingStepFindUniqueArgs>(args: SelectSubset<T, CookingStepFindUniqueArgs<ExtArgs>>): Prisma__CookingStepClient<$Result.GetResult<Prisma.$CookingStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CookingStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CookingStepFindUniqueOrThrowArgs} args - Arguments to find a CookingStep
     * @example
     * // Get one CookingStep
     * const cookingStep = await prisma.cookingStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CookingStepFindUniqueOrThrowArgs>(args: SelectSubset<T, CookingStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CookingStepClient<$Result.GetResult<Prisma.$CookingStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CookingStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookingStepFindFirstArgs} args - Arguments to find a CookingStep
     * @example
     * // Get one CookingStep
     * const cookingStep = await prisma.cookingStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CookingStepFindFirstArgs>(args?: SelectSubset<T, CookingStepFindFirstArgs<ExtArgs>>): Prisma__CookingStepClient<$Result.GetResult<Prisma.$CookingStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CookingStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookingStepFindFirstOrThrowArgs} args - Arguments to find a CookingStep
     * @example
     * // Get one CookingStep
     * const cookingStep = await prisma.cookingStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CookingStepFindFirstOrThrowArgs>(args?: SelectSubset<T, CookingStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__CookingStepClient<$Result.GetResult<Prisma.$CookingStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CookingSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookingStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CookingSteps
     * const cookingSteps = await prisma.cookingStep.findMany()
     * 
     * // Get first 10 CookingSteps
     * const cookingSteps = await prisma.cookingStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cookingStepWithIdOnly = await prisma.cookingStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CookingStepFindManyArgs>(args?: SelectSubset<T, CookingStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CookingStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CookingStep.
     * @param {CookingStepCreateArgs} args - Arguments to create a CookingStep.
     * @example
     * // Create one CookingStep
     * const CookingStep = await prisma.cookingStep.create({
     *   data: {
     *     // ... data to create a CookingStep
     *   }
     * })
     * 
     */
    create<T extends CookingStepCreateArgs>(args: SelectSubset<T, CookingStepCreateArgs<ExtArgs>>): Prisma__CookingStepClient<$Result.GetResult<Prisma.$CookingStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CookingSteps.
     * @param {CookingStepCreateManyArgs} args - Arguments to create many CookingSteps.
     * @example
     * // Create many CookingSteps
     * const cookingStep = await prisma.cookingStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CookingStepCreateManyArgs>(args?: SelectSubset<T, CookingStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CookingSteps and returns the data saved in the database.
     * @param {CookingStepCreateManyAndReturnArgs} args - Arguments to create many CookingSteps.
     * @example
     * // Create many CookingSteps
     * const cookingStep = await prisma.cookingStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CookingSteps and only return the `id`
     * const cookingStepWithIdOnly = await prisma.cookingStep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CookingStepCreateManyAndReturnArgs>(args?: SelectSubset<T, CookingStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CookingStepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CookingStep.
     * @param {CookingStepDeleteArgs} args - Arguments to delete one CookingStep.
     * @example
     * // Delete one CookingStep
     * const CookingStep = await prisma.cookingStep.delete({
     *   where: {
     *     // ... filter to delete one CookingStep
     *   }
     * })
     * 
     */
    delete<T extends CookingStepDeleteArgs>(args: SelectSubset<T, CookingStepDeleteArgs<ExtArgs>>): Prisma__CookingStepClient<$Result.GetResult<Prisma.$CookingStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CookingStep.
     * @param {CookingStepUpdateArgs} args - Arguments to update one CookingStep.
     * @example
     * // Update one CookingStep
     * const cookingStep = await prisma.cookingStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CookingStepUpdateArgs>(args: SelectSubset<T, CookingStepUpdateArgs<ExtArgs>>): Prisma__CookingStepClient<$Result.GetResult<Prisma.$CookingStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CookingSteps.
     * @param {CookingStepDeleteManyArgs} args - Arguments to filter CookingSteps to delete.
     * @example
     * // Delete a few CookingSteps
     * const { count } = await prisma.cookingStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CookingStepDeleteManyArgs>(args?: SelectSubset<T, CookingStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CookingSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookingStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CookingSteps
     * const cookingStep = await prisma.cookingStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CookingStepUpdateManyArgs>(args: SelectSubset<T, CookingStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CookingSteps and returns the data updated in the database.
     * @param {CookingStepUpdateManyAndReturnArgs} args - Arguments to update many CookingSteps.
     * @example
     * // Update many CookingSteps
     * const cookingStep = await prisma.cookingStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CookingSteps and only return the `id`
     * const cookingStepWithIdOnly = await prisma.cookingStep.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CookingStepUpdateManyAndReturnArgs>(args: SelectSubset<T, CookingStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CookingStepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CookingStep.
     * @param {CookingStepUpsertArgs} args - Arguments to update or create a CookingStep.
     * @example
     * // Update or create a CookingStep
     * const cookingStep = await prisma.cookingStep.upsert({
     *   create: {
     *     // ... data to create a CookingStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CookingStep we want to update
     *   }
     * })
     */
    upsert<T extends CookingStepUpsertArgs>(args: SelectSubset<T, CookingStepUpsertArgs<ExtArgs>>): Prisma__CookingStepClient<$Result.GetResult<Prisma.$CookingStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CookingSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookingStepCountArgs} args - Arguments to filter CookingSteps to count.
     * @example
     * // Count the number of CookingSteps
     * const count = await prisma.cookingStep.count({
     *   where: {
     *     // ... the filter for the CookingSteps we want to count
     *   }
     * })
    **/
    count<T extends CookingStepCountArgs>(
      args?: Subset<T, CookingStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CookingStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CookingStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookingStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CookingStepAggregateArgs>(args: Subset<T, CookingStepAggregateArgs>): Prisma.PrismaPromise<GetCookingStepAggregateType<T>>

    /**
     * Group by CookingStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookingStepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CookingStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CookingStepGroupByArgs['orderBy'] }
        : { orderBy?: CookingStepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CookingStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCookingStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CookingStep model
   */
  readonly fields: CookingStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CookingStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CookingStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CookingStep model
   */
  interface CookingStepFieldRefs {
    readonly id: FieldRef<"CookingStep", 'String'>
    readonly recipe_id: FieldRef<"CookingStep", 'String'>
    readonly step_number: FieldRef<"CookingStep", 'Int'>
    readonly instruction: FieldRef<"CookingStep", 'String'>
    readonly duration_min: FieldRef<"CookingStep", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CookingStep findUnique
   */
  export type CookingStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookingStep
     */
    select?: CookingStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookingStep
     */
    omit?: CookingStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookingStepInclude<ExtArgs> | null
    /**
     * Filter, which CookingStep to fetch.
     */
    where: CookingStepWhereUniqueInput
  }

  /**
   * CookingStep findUniqueOrThrow
   */
  export type CookingStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookingStep
     */
    select?: CookingStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookingStep
     */
    omit?: CookingStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookingStepInclude<ExtArgs> | null
    /**
     * Filter, which CookingStep to fetch.
     */
    where: CookingStepWhereUniqueInput
  }

  /**
   * CookingStep findFirst
   */
  export type CookingStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookingStep
     */
    select?: CookingStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookingStep
     */
    omit?: CookingStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookingStepInclude<ExtArgs> | null
    /**
     * Filter, which CookingStep to fetch.
     */
    where?: CookingStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CookingSteps to fetch.
     */
    orderBy?: CookingStepOrderByWithRelationInput | CookingStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CookingSteps.
     */
    cursor?: CookingStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CookingSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CookingSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CookingSteps.
     */
    distinct?: CookingStepScalarFieldEnum | CookingStepScalarFieldEnum[]
  }

  /**
   * CookingStep findFirstOrThrow
   */
  export type CookingStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookingStep
     */
    select?: CookingStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookingStep
     */
    omit?: CookingStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookingStepInclude<ExtArgs> | null
    /**
     * Filter, which CookingStep to fetch.
     */
    where?: CookingStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CookingSteps to fetch.
     */
    orderBy?: CookingStepOrderByWithRelationInput | CookingStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CookingSteps.
     */
    cursor?: CookingStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CookingSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CookingSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CookingSteps.
     */
    distinct?: CookingStepScalarFieldEnum | CookingStepScalarFieldEnum[]
  }

  /**
   * CookingStep findMany
   */
  export type CookingStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookingStep
     */
    select?: CookingStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookingStep
     */
    omit?: CookingStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookingStepInclude<ExtArgs> | null
    /**
     * Filter, which CookingSteps to fetch.
     */
    where?: CookingStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CookingSteps to fetch.
     */
    orderBy?: CookingStepOrderByWithRelationInput | CookingStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CookingSteps.
     */
    cursor?: CookingStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CookingSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CookingSteps.
     */
    skip?: number
    distinct?: CookingStepScalarFieldEnum | CookingStepScalarFieldEnum[]
  }

  /**
   * CookingStep create
   */
  export type CookingStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookingStep
     */
    select?: CookingStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookingStep
     */
    omit?: CookingStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookingStepInclude<ExtArgs> | null
    /**
     * The data needed to create a CookingStep.
     */
    data: XOR<CookingStepCreateInput, CookingStepUncheckedCreateInput>
  }

  /**
   * CookingStep createMany
   */
  export type CookingStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CookingSteps.
     */
    data: CookingStepCreateManyInput | CookingStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CookingStep createManyAndReturn
   */
  export type CookingStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookingStep
     */
    select?: CookingStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CookingStep
     */
    omit?: CookingStepOmit<ExtArgs> | null
    /**
     * The data used to create many CookingSteps.
     */
    data: CookingStepCreateManyInput | CookingStepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookingStepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CookingStep update
   */
  export type CookingStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookingStep
     */
    select?: CookingStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookingStep
     */
    omit?: CookingStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookingStepInclude<ExtArgs> | null
    /**
     * The data needed to update a CookingStep.
     */
    data: XOR<CookingStepUpdateInput, CookingStepUncheckedUpdateInput>
    /**
     * Choose, which CookingStep to update.
     */
    where: CookingStepWhereUniqueInput
  }

  /**
   * CookingStep updateMany
   */
  export type CookingStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CookingSteps.
     */
    data: XOR<CookingStepUpdateManyMutationInput, CookingStepUncheckedUpdateManyInput>
    /**
     * Filter which CookingSteps to update
     */
    where?: CookingStepWhereInput
    /**
     * Limit how many CookingSteps to update.
     */
    limit?: number
  }

  /**
   * CookingStep updateManyAndReturn
   */
  export type CookingStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookingStep
     */
    select?: CookingStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CookingStep
     */
    omit?: CookingStepOmit<ExtArgs> | null
    /**
     * The data used to update CookingSteps.
     */
    data: XOR<CookingStepUpdateManyMutationInput, CookingStepUncheckedUpdateManyInput>
    /**
     * Filter which CookingSteps to update
     */
    where?: CookingStepWhereInput
    /**
     * Limit how many CookingSteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookingStepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CookingStep upsert
   */
  export type CookingStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookingStep
     */
    select?: CookingStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookingStep
     */
    omit?: CookingStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookingStepInclude<ExtArgs> | null
    /**
     * The filter to search for the CookingStep to update in case it exists.
     */
    where: CookingStepWhereUniqueInput
    /**
     * In case the CookingStep found by the `where` argument doesn't exist, create a new CookingStep with this data.
     */
    create: XOR<CookingStepCreateInput, CookingStepUncheckedCreateInput>
    /**
     * In case the CookingStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CookingStepUpdateInput, CookingStepUncheckedUpdateInput>
  }

  /**
   * CookingStep delete
   */
  export type CookingStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookingStep
     */
    select?: CookingStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookingStep
     */
    omit?: CookingStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookingStepInclude<ExtArgs> | null
    /**
     * Filter which CookingStep to delete.
     */
    where: CookingStepWhereUniqueInput
  }

  /**
   * CookingStep deleteMany
   */
  export type CookingStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CookingSteps to delete
     */
    where?: CookingStepWhereInput
    /**
     * Limit how many CookingSteps to delete.
     */
    limit?: number
  }

  /**
   * CookingStep without action
   */
  export type CookingStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CookingStep
     */
    select?: CookingStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CookingStep
     */
    omit?: CookingStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CookingStepInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    recipes?: boolean | Tag$recipesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | Tag$recipesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      recipes: Prisma.$RecipeTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipes<T extends Tag$recipesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.recipes
   */
  export type Tag$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeTag
     */
    select?: RecipeTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeTag
     */
    omit?: RecipeTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeTagInclude<ExtArgs> | null
    where?: RecipeTagWhereInput
    orderBy?: RecipeTagOrderByWithRelationInput | RecipeTagOrderByWithRelationInput[]
    cursor?: RecipeTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeTagScalarFieldEnum | RecipeTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model RecipeTag
   */

  export type AggregateRecipeTag = {
    _count: RecipeTagCountAggregateOutputType | null
    _min: RecipeTagMinAggregateOutputType | null
    _max: RecipeTagMaxAggregateOutputType | null
  }

  export type RecipeTagMinAggregateOutputType = {
    recipe_id: string | null
    tag_id: string | null
  }

  export type RecipeTagMaxAggregateOutputType = {
    recipe_id: string | null
    tag_id: string | null
  }

  export type RecipeTagCountAggregateOutputType = {
    recipe_id: number
    tag_id: number
    _all: number
  }


  export type RecipeTagMinAggregateInputType = {
    recipe_id?: true
    tag_id?: true
  }

  export type RecipeTagMaxAggregateInputType = {
    recipe_id?: true
    tag_id?: true
  }

  export type RecipeTagCountAggregateInputType = {
    recipe_id?: true
    tag_id?: true
    _all?: true
  }

  export type RecipeTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeTag to aggregate.
     */
    where?: RecipeTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeTags to fetch.
     */
    orderBy?: RecipeTagOrderByWithRelationInput | RecipeTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeTags
    **/
    _count?: true | RecipeTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeTagMaxAggregateInputType
  }

  export type GetRecipeTagAggregateType<T extends RecipeTagAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeTag[P]>
      : GetScalarType<T[P], AggregateRecipeTag[P]>
  }




  export type RecipeTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeTagWhereInput
    orderBy?: RecipeTagOrderByWithAggregationInput | RecipeTagOrderByWithAggregationInput[]
    by: RecipeTagScalarFieldEnum[] | RecipeTagScalarFieldEnum
    having?: RecipeTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeTagCountAggregateInputType | true
    _min?: RecipeTagMinAggregateInputType
    _max?: RecipeTagMaxAggregateInputType
  }

  export type RecipeTagGroupByOutputType = {
    recipe_id: string
    tag_id: string
    _count: RecipeTagCountAggregateOutputType | null
    _min: RecipeTagMinAggregateOutputType | null
    _max: RecipeTagMaxAggregateOutputType | null
  }

  type GetRecipeTagGroupByPayload<T extends RecipeTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeTagGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeTagGroupByOutputType[P]>
        }
      >
    >


  export type RecipeTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recipe_id?: boolean
    tag_id?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeTag"]>

  export type RecipeTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recipe_id?: boolean
    tag_id?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeTag"]>

  export type RecipeTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recipe_id?: boolean
    tag_id?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeTag"]>

  export type RecipeTagSelectScalar = {
    recipe_id?: boolean
    tag_id?: boolean
  }

  export type RecipeTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"recipe_id" | "tag_id", ExtArgs["result"]["recipeTag"]>
  export type RecipeTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type RecipeTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type RecipeTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $RecipeTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeTag"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      recipe_id: string
      tag_id: string
    }, ExtArgs["result"]["recipeTag"]>
    composites: {}
  }

  type RecipeTagGetPayload<S extends boolean | null | undefined | RecipeTagDefaultArgs> = $Result.GetResult<Prisma.$RecipeTagPayload, S>

  type RecipeTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeTagCountAggregateInputType | true
    }

  export interface RecipeTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeTag'], meta: { name: 'RecipeTag' } }
    /**
     * Find zero or one RecipeTag that matches the filter.
     * @param {RecipeTagFindUniqueArgs} args - Arguments to find a RecipeTag
     * @example
     * // Get one RecipeTag
     * const recipeTag = await prisma.recipeTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeTagFindUniqueArgs>(args: SelectSubset<T, RecipeTagFindUniqueArgs<ExtArgs>>): Prisma__RecipeTagClient<$Result.GetResult<Prisma.$RecipeTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeTagFindUniqueOrThrowArgs} args - Arguments to find a RecipeTag
     * @example
     * // Get one RecipeTag
     * const recipeTag = await prisma.recipeTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeTagFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeTagClient<$Result.GetResult<Prisma.$RecipeTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeTagFindFirstArgs} args - Arguments to find a RecipeTag
     * @example
     * // Get one RecipeTag
     * const recipeTag = await prisma.recipeTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeTagFindFirstArgs>(args?: SelectSubset<T, RecipeTagFindFirstArgs<ExtArgs>>): Prisma__RecipeTagClient<$Result.GetResult<Prisma.$RecipeTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeTagFindFirstOrThrowArgs} args - Arguments to find a RecipeTag
     * @example
     * // Get one RecipeTag
     * const recipeTag = await prisma.recipeTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeTagFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeTagClient<$Result.GetResult<Prisma.$RecipeTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeTags
     * const recipeTags = await prisma.recipeTag.findMany()
     * 
     * // Get first 10 RecipeTags
     * const recipeTags = await prisma.recipeTag.findMany({ take: 10 })
     * 
     * // Only select the `recipe_id`
     * const recipeTagWithRecipe_idOnly = await prisma.recipeTag.findMany({ select: { recipe_id: true } })
     * 
     */
    findMany<T extends RecipeTagFindManyArgs>(args?: SelectSubset<T, RecipeTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeTag.
     * @param {RecipeTagCreateArgs} args - Arguments to create a RecipeTag.
     * @example
     * // Create one RecipeTag
     * const RecipeTag = await prisma.recipeTag.create({
     *   data: {
     *     // ... data to create a RecipeTag
     *   }
     * })
     * 
     */
    create<T extends RecipeTagCreateArgs>(args: SelectSubset<T, RecipeTagCreateArgs<ExtArgs>>): Prisma__RecipeTagClient<$Result.GetResult<Prisma.$RecipeTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeTags.
     * @param {RecipeTagCreateManyArgs} args - Arguments to create many RecipeTags.
     * @example
     * // Create many RecipeTags
     * const recipeTag = await prisma.recipeTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeTagCreateManyArgs>(args?: SelectSubset<T, RecipeTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeTags and returns the data saved in the database.
     * @param {RecipeTagCreateManyAndReturnArgs} args - Arguments to create many RecipeTags.
     * @example
     * // Create many RecipeTags
     * const recipeTag = await prisma.recipeTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeTags and only return the `recipe_id`
     * const recipeTagWithRecipe_idOnly = await prisma.recipeTag.createManyAndReturn({
     *   select: { recipe_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeTagCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeTag.
     * @param {RecipeTagDeleteArgs} args - Arguments to delete one RecipeTag.
     * @example
     * // Delete one RecipeTag
     * const RecipeTag = await prisma.recipeTag.delete({
     *   where: {
     *     // ... filter to delete one RecipeTag
     *   }
     * })
     * 
     */
    delete<T extends RecipeTagDeleteArgs>(args: SelectSubset<T, RecipeTagDeleteArgs<ExtArgs>>): Prisma__RecipeTagClient<$Result.GetResult<Prisma.$RecipeTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeTag.
     * @param {RecipeTagUpdateArgs} args - Arguments to update one RecipeTag.
     * @example
     * // Update one RecipeTag
     * const recipeTag = await prisma.recipeTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeTagUpdateArgs>(args: SelectSubset<T, RecipeTagUpdateArgs<ExtArgs>>): Prisma__RecipeTagClient<$Result.GetResult<Prisma.$RecipeTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeTags.
     * @param {RecipeTagDeleteManyArgs} args - Arguments to filter RecipeTags to delete.
     * @example
     * // Delete a few RecipeTags
     * const { count } = await prisma.recipeTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeTagDeleteManyArgs>(args?: SelectSubset<T, RecipeTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeTags
     * const recipeTag = await prisma.recipeTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeTagUpdateManyArgs>(args: SelectSubset<T, RecipeTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeTags and returns the data updated in the database.
     * @param {RecipeTagUpdateManyAndReturnArgs} args - Arguments to update many RecipeTags.
     * @example
     * // Update many RecipeTags
     * const recipeTag = await prisma.recipeTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeTags and only return the `recipe_id`
     * const recipeTagWithRecipe_idOnly = await prisma.recipeTag.updateManyAndReturn({
     *   select: { recipe_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeTagUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeTag.
     * @param {RecipeTagUpsertArgs} args - Arguments to update or create a RecipeTag.
     * @example
     * // Update or create a RecipeTag
     * const recipeTag = await prisma.recipeTag.upsert({
     *   create: {
     *     // ... data to create a RecipeTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeTag we want to update
     *   }
     * })
     */
    upsert<T extends RecipeTagUpsertArgs>(args: SelectSubset<T, RecipeTagUpsertArgs<ExtArgs>>): Prisma__RecipeTagClient<$Result.GetResult<Prisma.$RecipeTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeTagCountArgs} args - Arguments to filter RecipeTags to count.
     * @example
     * // Count the number of RecipeTags
     * const count = await prisma.recipeTag.count({
     *   where: {
     *     // ... the filter for the RecipeTags we want to count
     *   }
     * })
    **/
    count<T extends RecipeTagCountArgs>(
      args?: Subset<T, RecipeTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeTagAggregateArgs>(args: Subset<T, RecipeTagAggregateArgs>): Prisma.PrismaPromise<GetRecipeTagAggregateType<T>>

    /**
     * Group by RecipeTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeTagGroupByArgs['orderBy'] }
        : { orderBy?: RecipeTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeTag model
   */
  readonly fields: RecipeTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecipeTag model
   */
  interface RecipeTagFieldRefs {
    readonly recipe_id: FieldRef<"RecipeTag", 'String'>
    readonly tag_id: FieldRef<"RecipeTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecipeTag findUnique
   */
  export type RecipeTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeTag
     */
    select?: RecipeTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeTag
     */
    omit?: RecipeTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeTagInclude<ExtArgs> | null
    /**
     * Filter, which RecipeTag to fetch.
     */
    where: RecipeTagWhereUniqueInput
  }

  /**
   * RecipeTag findUniqueOrThrow
   */
  export type RecipeTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeTag
     */
    select?: RecipeTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeTag
     */
    omit?: RecipeTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeTagInclude<ExtArgs> | null
    /**
     * Filter, which RecipeTag to fetch.
     */
    where: RecipeTagWhereUniqueInput
  }

  /**
   * RecipeTag findFirst
   */
  export type RecipeTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeTag
     */
    select?: RecipeTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeTag
     */
    omit?: RecipeTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeTagInclude<ExtArgs> | null
    /**
     * Filter, which RecipeTag to fetch.
     */
    where?: RecipeTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeTags to fetch.
     */
    orderBy?: RecipeTagOrderByWithRelationInput | RecipeTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeTags.
     */
    cursor?: RecipeTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeTags.
     */
    distinct?: RecipeTagScalarFieldEnum | RecipeTagScalarFieldEnum[]
  }

  /**
   * RecipeTag findFirstOrThrow
   */
  export type RecipeTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeTag
     */
    select?: RecipeTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeTag
     */
    omit?: RecipeTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeTagInclude<ExtArgs> | null
    /**
     * Filter, which RecipeTag to fetch.
     */
    where?: RecipeTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeTags to fetch.
     */
    orderBy?: RecipeTagOrderByWithRelationInput | RecipeTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeTags.
     */
    cursor?: RecipeTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeTags.
     */
    distinct?: RecipeTagScalarFieldEnum | RecipeTagScalarFieldEnum[]
  }

  /**
   * RecipeTag findMany
   */
  export type RecipeTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeTag
     */
    select?: RecipeTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeTag
     */
    omit?: RecipeTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeTagInclude<ExtArgs> | null
    /**
     * Filter, which RecipeTags to fetch.
     */
    where?: RecipeTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeTags to fetch.
     */
    orderBy?: RecipeTagOrderByWithRelationInput | RecipeTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeTags.
     */
    cursor?: RecipeTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeTags.
     */
    skip?: number
    distinct?: RecipeTagScalarFieldEnum | RecipeTagScalarFieldEnum[]
  }

  /**
   * RecipeTag create
   */
  export type RecipeTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeTag
     */
    select?: RecipeTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeTag
     */
    omit?: RecipeTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeTagInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeTag.
     */
    data: XOR<RecipeTagCreateInput, RecipeTagUncheckedCreateInput>
  }

  /**
   * RecipeTag createMany
   */
  export type RecipeTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeTags.
     */
    data: RecipeTagCreateManyInput | RecipeTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeTag createManyAndReturn
   */
  export type RecipeTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeTag
     */
    select?: RecipeTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeTag
     */
    omit?: RecipeTagOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeTags.
     */
    data: RecipeTagCreateManyInput | RecipeTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeTag update
   */
  export type RecipeTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeTag
     */
    select?: RecipeTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeTag
     */
    omit?: RecipeTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeTagInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeTag.
     */
    data: XOR<RecipeTagUpdateInput, RecipeTagUncheckedUpdateInput>
    /**
     * Choose, which RecipeTag to update.
     */
    where: RecipeTagWhereUniqueInput
  }

  /**
   * RecipeTag updateMany
   */
  export type RecipeTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeTags.
     */
    data: XOR<RecipeTagUpdateManyMutationInput, RecipeTagUncheckedUpdateManyInput>
    /**
     * Filter which RecipeTags to update
     */
    where?: RecipeTagWhereInput
    /**
     * Limit how many RecipeTags to update.
     */
    limit?: number
  }

  /**
   * RecipeTag updateManyAndReturn
   */
  export type RecipeTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeTag
     */
    select?: RecipeTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeTag
     */
    omit?: RecipeTagOmit<ExtArgs> | null
    /**
     * The data used to update RecipeTags.
     */
    data: XOR<RecipeTagUpdateManyMutationInput, RecipeTagUncheckedUpdateManyInput>
    /**
     * Filter which RecipeTags to update
     */
    where?: RecipeTagWhereInput
    /**
     * Limit how many RecipeTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeTag upsert
   */
  export type RecipeTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeTag
     */
    select?: RecipeTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeTag
     */
    omit?: RecipeTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeTagInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeTag to update in case it exists.
     */
    where: RecipeTagWhereUniqueInput
    /**
     * In case the RecipeTag found by the `where` argument doesn't exist, create a new RecipeTag with this data.
     */
    create: XOR<RecipeTagCreateInput, RecipeTagUncheckedCreateInput>
    /**
     * In case the RecipeTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeTagUpdateInput, RecipeTagUncheckedUpdateInput>
  }

  /**
   * RecipeTag delete
   */
  export type RecipeTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeTag
     */
    select?: RecipeTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeTag
     */
    omit?: RecipeTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeTagInclude<ExtArgs> | null
    /**
     * Filter which RecipeTag to delete.
     */
    where: RecipeTagWhereUniqueInput
  }

  /**
   * RecipeTag deleteMany
   */
  export type RecipeTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeTags to delete
     */
    where?: RecipeTagWhereInput
    /**
     * Limit how many RecipeTags to delete.
     */
    limit?: number
  }

  /**
   * RecipeTag without action
   */
  export type RecipeTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeTag
     */
    select?: RecipeTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeTag
     */
    omit?: RecipeTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeTagInclude<ExtArgs> | null
  }


  /**
   * Model RecipeImage
   */

  export type AggregateRecipeImage = {
    _count: RecipeImageCountAggregateOutputType | null
    _min: RecipeImageMinAggregateOutputType | null
    _max: RecipeImageMaxAggregateOutputType | null
  }

  export type RecipeImageMinAggregateOutputType = {
    id: string | null
    recipe_id: string | null
    storage_url: string | null
    provider: string | null
    storage_key: string | null
    is_primary: boolean | null
    mime_type: string | null
    uploaded_at: Date | null
  }

  export type RecipeImageMaxAggregateOutputType = {
    id: string | null
    recipe_id: string | null
    storage_url: string | null
    provider: string | null
    storage_key: string | null
    is_primary: boolean | null
    mime_type: string | null
    uploaded_at: Date | null
  }

  export type RecipeImageCountAggregateOutputType = {
    id: number
    recipe_id: number
    storage_url: number
    provider: number
    storage_key: number
    is_primary: number
    mime_type: number
    uploaded_at: number
    _all: number
  }


  export type RecipeImageMinAggregateInputType = {
    id?: true
    recipe_id?: true
    storage_url?: true
    provider?: true
    storage_key?: true
    is_primary?: true
    mime_type?: true
    uploaded_at?: true
  }

  export type RecipeImageMaxAggregateInputType = {
    id?: true
    recipe_id?: true
    storage_url?: true
    provider?: true
    storage_key?: true
    is_primary?: true
    mime_type?: true
    uploaded_at?: true
  }

  export type RecipeImageCountAggregateInputType = {
    id?: true
    recipe_id?: true
    storage_url?: true
    provider?: true
    storage_key?: true
    is_primary?: true
    mime_type?: true
    uploaded_at?: true
    _all?: true
  }

  export type RecipeImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeImage to aggregate.
     */
    where?: RecipeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeImages to fetch.
     */
    orderBy?: RecipeImageOrderByWithRelationInput | RecipeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeImages
    **/
    _count?: true | RecipeImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeImageMaxAggregateInputType
  }

  export type GetRecipeImageAggregateType<T extends RecipeImageAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeImage[P]>
      : GetScalarType<T[P], AggregateRecipeImage[P]>
  }




  export type RecipeImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeImageWhereInput
    orderBy?: RecipeImageOrderByWithAggregationInput | RecipeImageOrderByWithAggregationInput[]
    by: RecipeImageScalarFieldEnum[] | RecipeImageScalarFieldEnum
    having?: RecipeImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeImageCountAggregateInputType | true
    _min?: RecipeImageMinAggregateInputType
    _max?: RecipeImageMaxAggregateInputType
  }

  export type RecipeImageGroupByOutputType = {
    id: string
    recipe_id: string
    storage_url: string
    provider: string
    storage_key: string
    is_primary: boolean
    mime_type: string
    uploaded_at: Date
    _count: RecipeImageCountAggregateOutputType | null
    _min: RecipeImageMinAggregateOutputType | null
    _max: RecipeImageMaxAggregateOutputType | null
  }

  type GetRecipeImageGroupByPayload<T extends RecipeImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeImageGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeImageGroupByOutputType[P]>
        }
      >
    >


  export type RecipeImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipe_id?: boolean
    storage_url?: boolean
    provider?: boolean
    storage_key?: boolean
    is_primary?: boolean
    mime_type?: boolean
    uploaded_at?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeImage"]>

  export type RecipeImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipe_id?: boolean
    storage_url?: boolean
    provider?: boolean
    storage_key?: boolean
    is_primary?: boolean
    mime_type?: boolean
    uploaded_at?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeImage"]>

  export type RecipeImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipe_id?: boolean
    storage_url?: boolean
    provider?: boolean
    storage_key?: boolean
    is_primary?: boolean
    mime_type?: boolean
    uploaded_at?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeImage"]>

  export type RecipeImageSelectScalar = {
    id?: boolean
    recipe_id?: boolean
    storage_url?: boolean
    provider?: boolean
    storage_key?: boolean
    is_primary?: boolean
    mime_type?: boolean
    uploaded_at?: boolean
  }

  export type RecipeImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipe_id" | "storage_url" | "provider" | "storage_key" | "is_primary" | "mime_type" | "uploaded_at", ExtArgs["result"]["recipeImage"]>
  export type RecipeImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type RecipeImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type RecipeImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $RecipeImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeImage"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipe_id: string
      storage_url: string
      provider: string
      storage_key: string
      is_primary: boolean
      mime_type: string
      uploaded_at: Date
    }, ExtArgs["result"]["recipeImage"]>
    composites: {}
  }

  type RecipeImageGetPayload<S extends boolean | null | undefined | RecipeImageDefaultArgs> = $Result.GetResult<Prisma.$RecipeImagePayload, S>

  type RecipeImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeImageCountAggregateInputType | true
    }

  export interface RecipeImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeImage'], meta: { name: 'RecipeImage' } }
    /**
     * Find zero or one RecipeImage that matches the filter.
     * @param {RecipeImageFindUniqueArgs} args - Arguments to find a RecipeImage
     * @example
     * // Get one RecipeImage
     * const recipeImage = await prisma.recipeImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeImageFindUniqueArgs>(args: SelectSubset<T, RecipeImageFindUniqueArgs<ExtArgs>>): Prisma__RecipeImageClient<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeImageFindUniqueOrThrowArgs} args - Arguments to find a RecipeImage
     * @example
     * // Get one RecipeImage
     * const recipeImage = await prisma.recipeImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeImageFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeImageClient<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeImageFindFirstArgs} args - Arguments to find a RecipeImage
     * @example
     * // Get one RecipeImage
     * const recipeImage = await prisma.recipeImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeImageFindFirstArgs>(args?: SelectSubset<T, RecipeImageFindFirstArgs<ExtArgs>>): Prisma__RecipeImageClient<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeImageFindFirstOrThrowArgs} args - Arguments to find a RecipeImage
     * @example
     * // Get one RecipeImage
     * const recipeImage = await prisma.recipeImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeImageFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeImageClient<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeImages
     * const recipeImages = await prisma.recipeImage.findMany()
     * 
     * // Get first 10 RecipeImages
     * const recipeImages = await prisma.recipeImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeImageWithIdOnly = await prisma.recipeImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeImageFindManyArgs>(args?: SelectSubset<T, RecipeImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeImage.
     * @param {RecipeImageCreateArgs} args - Arguments to create a RecipeImage.
     * @example
     * // Create one RecipeImage
     * const RecipeImage = await prisma.recipeImage.create({
     *   data: {
     *     // ... data to create a RecipeImage
     *   }
     * })
     * 
     */
    create<T extends RecipeImageCreateArgs>(args: SelectSubset<T, RecipeImageCreateArgs<ExtArgs>>): Prisma__RecipeImageClient<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeImages.
     * @param {RecipeImageCreateManyArgs} args - Arguments to create many RecipeImages.
     * @example
     * // Create many RecipeImages
     * const recipeImage = await prisma.recipeImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeImageCreateManyArgs>(args?: SelectSubset<T, RecipeImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeImages and returns the data saved in the database.
     * @param {RecipeImageCreateManyAndReturnArgs} args - Arguments to create many RecipeImages.
     * @example
     * // Create many RecipeImages
     * const recipeImage = await prisma.recipeImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeImages and only return the `id`
     * const recipeImageWithIdOnly = await prisma.recipeImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeImageCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeImage.
     * @param {RecipeImageDeleteArgs} args - Arguments to delete one RecipeImage.
     * @example
     * // Delete one RecipeImage
     * const RecipeImage = await prisma.recipeImage.delete({
     *   where: {
     *     // ... filter to delete one RecipeImage
     *   }
     * })
     * 
     */
    delete<T extends RecipeImageDeleteArgs>(args: SelectSubset<T, RecipeImageDeleteArgs<ExtArgs>>): Prisma__RecipeImageClient<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeImage.
     * @param {RecipeImageUpdateArgs} args - Arguments to update one RecipeImage.
     * @example
     * // Update one RecipeImage
     * const recipeImage = await prisma.recipeImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeImageUpdateArgs>(args: SelectSubset<T, RecipeImageUpdateArgs<ExtArgs>>): Prisma__RecipeImageClient<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeImages.
     * @param {RecipeImageDeleteManyArgs} args - Arguments to filter RecipeImages to delete.
     * @example
     * // Delete a few RecipeImages
     * const { count } = await prisma.recipeImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeImageDeleteManyArgs>(args?: SelectSubset<T, RecipeImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeImages
     * const recipeImage = await prisma.recipeImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeImageUpdateManyArgs>(args: SelectSubset<T, RecipeImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeImages and returns the data updated in the database.
     * @param {RecipeImageUpdateManyAndReturnArgs} args - Arguments to update many RecipeImages.
     * @example
     * // Update many RecipeImages
     * const recipeImage = await prisma.recipeImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeImages and only return the `id`
     * const recipeImageWithIdOnly = await prisma.recipeImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeImageUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeImage.
     * @param {RecipeImageUpsertArgs} args - Arguments to update or create a RecipeImage.
     * @example
     * // Update or create a RecipeImage
     * const recipeImage = await prisma.recipeImage.upsert({
     *   create: {
     *     // ... data to create a RecipeImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeImage we want to update
     *   }
     * })
     */
    upsert<T extends RecipeImageUpsertArgs>(args: SelectSubset<T, RecipeImageUpsertArgs<ExtArgs>>): Prisma__RecipeImageClient<$Result.GetResult<Prisma.$RecipeImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeImageCountArgs} args - Arguments to filter RecipeImages to count.
     * @example
     * // Count the number of RecipeImages
     * const count = await prisma.recipeImage.count({
     *   where: {
     *     // ... the filter for the RecipeImages we want to count
     *   }
     * })
    **/
    count<T extends RecipeImageCountArgs>(
      args?: Subset<T, RecipeImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeImageAggregateArgs>(args: Subset<T, RecipeImageAggregateArgs>): Prisma.PrismaPromise<GetRecipeImageAggregateType<T>>

    /**
     * Group by RecipeImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeImageGroupByArgs['orderBy'] }
        : { orderBy?: RecipeImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeImage model
   */
  readonly fields: RecipeImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecipeImage model
   */
  interface RecipeImageFieldRefs {
    readonly id: FieldRef<"RecipeImage", 'String'>
    readonly recipe_id: FieldRef<"RecipeImage", 'String'>
    readonly storage_url: FieldRef<"RecipeImage", 'String'>
    readonly provider: FieldRef<"RecipeImage", 'String'>
    readonly storage_key: FieldRef<"RecipeImage", 'String'>
    readonly is_primary: FieldRef<"RecipeImage", 'Boolean'>
    readonly mime_type: FieldRef<"RecipeImage", 'String'>
    readonly uploaded_at: FieldRef<"RecipeImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecipeImage findUnique
   */
  export type RecipeImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * Filter, which RecipeImage to fetch.
     */
    where: RecipeImageWhereUniqueInput
  }

  /**
   * RecipeImage findUniqueOrThrow
   */
  export type RecipeImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * Filter, which RecipeImage to fetch.
     */
    where: RecipeImageWhereUniqueInput
  }

  /**
   * RecipeImage findFirst
   */
  export type RecipeImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * Filter, which RecipeImage to fetch.
     */
    where?: RecipeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeImages to fetch.
     */
    orderBy?: RecipeImageOrderByWithRelationInput | RecipeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeImages.
     */
    cursor?: RecipeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeImages.
     */
    distinct?: RecipeImageScalarFieldEnum | RecipeImageScalarFieldEnum[]
  }

  /**
   * RecipeImage findFirstOrThrow
   */
  export type RecipeImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * Filter, which RecipeImage to fetch.
     */
    where?: RecipeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeImages to fetch.
     */
    orderBy?: RecipeImageOrderByWithRelationInput | RecipeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeImages.
     */
    cursor?: RecipeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeImages.
     */
    distinct?: RecipeImageScalarFieldEnum | RecipeImageScalarFieldEnum[]
  }

  /**
   * RecipeImage findMany
   */
  export type RecipeImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * Filter, which RecipeImages to fetch.
     */
    where?: RecipeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeImages to fetch.
     */
    orderBy?: RecipeImageOrderByWithRelationInput | RecipeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeImages.
     */
    cursor?: RecipeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeImages.
     */
    skip?: number
    distinct?: RecipeImageScalarFieldEnum | RecipeImageScalarFieldEnum[]
  }

  /**
   * RecipeImage create
   */
  export type RecipeImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeImage.
     */
    data: XOR<RecipeImageCreateInput, RecipeImageUncheckedCreateInput>
  }

  /**
   * RecipeImage createMany
   */
  export type RecipeImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeImages.
     */
    data: RecipeImageCreateManyInput | RecipeImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeImage createManyAndReturn
   */
  export type RecipeImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeImages.
     */
    data: RecipeImageCreateManyInput | RecipeImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeImage update
   */
  export type RecipeImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeImage.
     */
    data: XOR<RecipeImageUpdateInput, RecipeImageUncheckedUpdateInput>
    /**
     * Choose, which RecipeImage to update.
     */
    where: RecipeImageWhereUniqueInput
  }

  /**
   * RecipeImage updateMany
   */
  export type RecipeImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeImages.
     */
    data: XOR<RecipeImageUpdateManyMutationInput, RecipeImageUncheckedUpdateManyInput>
    /**
     * Filter which RecipeImages to update
     */
    where?: RecipeImageWhereInput
    /**
     * Limit how many RecipeImages to update.
     */
    limit?: number
  }

  /**
   * RecipeImage updateManyAndReturn
   */
  export type RecipeImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * The data used to update RecipeImages.
     */
    data: XOR<RecipeImageUpdateManyMutationInput, RecipeImageUncheckedUpdateManyInput>
    /**
     * Filter which RecipeImages to update
     */
    where?: RecipeImageWhereInput
    /**
     * Limit how many RecipeImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeImage upsert
   */
  export type RecipeImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeImage to update in case it exists.
     */
    where: RecipeImageWhereUniqueInput
    /**
     * In case the RecipeImage found by the `where` argument doesn't exist, create a new RecipeImage with this data.
     */
    create: XOR<RecipeImageCreateInput, RecipeImageUncheckedCreateInput>
    /**
     * In case the RecipeImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeImageUpdateInput, RecipeImageUncheckedUpdateInput>
  }

  /**
   * RecipeImage delete
   */
  export type RecipeImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
    /**
     * Filter which RecipeImage to delete.
     */
    where: RecipeImageWhereUniqueInput
  }

  /**
   * RecipeImage deleteMany
   */
  export type RecipeImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeImages to delete
     */
    where?: RecipeImageWhereInput
    /**
     * Limit how many RecipeImages to delete.
     */
    limit?: number
  }

  /**
   * RecipeImage without action
   */
  export type RecipeImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeImage
     */
    select?: RecipeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeImage
     */
    omit?: RecipeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeImageInclude<ExtArgs> | null
  }


  /**
   * Model ShoppingList
   */

  export type AggregateShoppingList = {
    _count: ShoppingListCountAggregateOutputType | null
    _min: ShoppingListMinAggregateOutputType | null
    _max: ShoppingListMaxAggregateOutputType | null
  }

  export type ShoppingListMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    name: string | null
    is_complete: boolean | null
    completed_at: Date | null
  }

  export type ShoppingListMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    name: string | null
    is_complete: boolean | null
    completed_at: Date | null
  }

  export type ShoppingListCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    is_complete: number
    completed_at: number
    _all: number
  }


  export type ShoppingListMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    is_complete?: true
    completed_at?: true
  }

  export type ShoppingListMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    is_complete?: true
    completed_at?: true
  }

  export type ShoppingListCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    is_complete?: true
    completed_at?: true
    _all?: true
  }

  export type ShoppingListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingList to aggregate.
     */
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     */
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShoppingLists
    **/
    _count?: true | ShoppingListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingListMaxAggregateInputType
  }

  export type GetShoppingListAggregateType<T extends ShoppingListAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingList[P]>
      : GetScalarType<T[P], AggregateShoppingList[P]>
  }




  export type ShoppingListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListWhereInput
    orderBy?: ShoppingListOrderByWithAggregationInput | ShoppingListOrderByWithAggregationInput[]
    by: ShoppingListScalarFieldEnum[] | ShoppingListScalarFieldEnum
    having?: ShoppingListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingListCountAggregateInputType | true
    _min?: ShoppingListMinAggregateInputType
    _max?: ShoppingListMaxAggregateInputType
  }

  export type ShoppingListGroupByOutputType = {
    id: string
    user_id: string
    name: string
    is_complete: boolean
    completed_at: Date | null
    _count: ShoppingListCountAggregateOutputType | null
    _min: ShoppingListMinAggregateOutputType | null
    _max: ShoppingListMaxAggregateOutputType | null
  }

  type GetShoppingListGroupByPayload<T extends ShoppingListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingListGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingListGroupByOutputType[P]>
        }
      >
    >


  export type ShoppingListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    is_complete?: boolean
    completed_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | ShoppingList$itemsArgs<ExtArgs>
    _count?: boolean | ShoppingListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingList"]>

  export type ShoppingListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    is_complete?: boolean
    completed_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingList"]>

  export type ShoppingListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    is_complete?: boolean
    completed_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingList"]>

  export type ShoppingListSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    is_complete?: boolean
    completed_at?: boolean
  }

  export type ShoppingListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "is_complete" | "completed_at", ExtArgs["result"]["shoppingList"]>
  export type ShoppingListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | ShoppingList$itemsArgs<ExtArgs>
    _count?: boolean | ShoppingListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShoppingListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShoppingListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShoppingListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShoppingList"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$ShoppingItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      name: string
      is_complete: boolean
      completed_at: Date | null
    }, ExtArgs["result"]["shoppingList"]>
    composites: {}
  }

  type ShoppingListGetPayload<S extends boolean | null | undefined | ShoppingListDefaultArgs> = $Result.GetResult<Prisma.$ShoppingListPayload, S>

  type ShoppingListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShoppingListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShoppingListCountAggregateInputType | true
    }

  export interface ShoppingListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShoppingList'], meta: { name: 'ShoppingList' } }
    /**
     * Find zero or one ShoppingList that matches the filter.
     * @param {ShoppingListFindUniqueArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShoppingListFindUniqueArgs>(args: SelectSubset<T, ShoppingListFindUniqueArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShoppingList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShoppingListFindUniqueOrThrowArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShoppingListFindUniqueOrThrowArgs>(args: SelectSubset<T, ShoppingListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFindFirstArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShoppingListFindFirstArgs>(args?: SelectSubset<T, ShoppingListFindFirstArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFindFirstOrThrowArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShoppingListFindFirstOrThrowArgs>(args?: SelectSubset<T, ShoppingListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShoppingLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingLists
     * const shoppingLists = await prisma.shoppingList.findMany()
     * 
     * // Get first 10 ShoppingLists
     * const shoppingLists = await prisma.shoppingList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoppingListWithIdOnly = await prisma.shoppingList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShoppingListFindManyArgs>(args?: SelectSubset<T, ShoppingListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShoppingList.
     * @param {ShoppingListCreateArgs} args - Arguments to create a ShoppingList.
     * @example
     * // Create one ShoppingList
     * const ShoppingList = await prisma.shoppingList.create({
     *   data: {
     *     // ... data to create a ShoppingList
     *   }
     * })
     * 
     */
    create<T extends ShoppingListCreateArgs>(args: SelectSubset<T, ShoppingListCreateArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShoppingLists.
     * @param {ShoppingListCreateManyArgs} args - Arguments to create many ShoppingLists.
     * @example
     * // Create many ShoppingLists
     * const shoppingList = await prisma.shoppingList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShoppingListCreateManyArgs>(args?: SelectSubset<T, ShoppingListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShoppingLists and returns the data saved in the database.
     * @param {ShoppingListCreateManyAndReturnArgs} args - Arguments to create many ShoppingLists.
     * @example
     * // Create many ShoppingLists
     * const shoppingList = await prisma.shoppingList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShoppingLists and only return the `id`
     * const shoppingListWithIdOnly = await prisma.shoppingList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShoppingListCreateManyAndReturnArgs>(args?: SelectSubset<T, ShoppingListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShoppingList.
     * @param {ShoppingListDeleteArgs} args - Arguments to delete one ShoppingList.
     * @example
     * // Delete one ShoppingList
     * const ShoppingList = await prisma.shoppingList.delete({
     *   where: {
     *     // ... filter to delete one ShoppingList
     *   }
     * })
     * 
     */
    delete<T extends ShoppingListDeleteArgs>(args: SelectSubset<T, ShoppingListDeleteArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShoppingList.
     * @param {ShoppingListUpdateArgs} args - Arguments to update one ShoppingList.
     * @example
     * // Update one ShoppingList
     * const shoppingList = await prisma.shoppingList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShoppingListUpdateArgs>(args: SelectSubset<T, ShoppingListUpdateArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShoppingLists.
     * @param {ShoppingListDeleteManyArgs} args - Arguments to filter ShoppingLists to delete.
     * @example
     * // Delete a few ShoppingLists
     * const { count } = await prisma.shoppingList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShoppingListDeleteManyArgs>(args?: SelectSubset<T, ShoppingListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingLists
     * const shoppingList = await prisma.shoppingList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShoppingListUpdateManyArgs>(args: SelectSubset<T, ShoppingListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingLists and returns the data updated in the database.
     * @param {ShoppingListUpdateManyAndReturnArgs} args - Arguments to update many ShoppingLists.
     * @example
     * // Update many ShoppingLists
     * const shoppingList = await prisma.shoppingList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShoppingLists and only return the `id`
     * const shoppingListWithIdOnly = await prisma.shoppingList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShoppingListUpdateManyAndReturnArgs>(args: SelectSubset<T, ShoppingListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShoppingList.
     * @param {ShoppingListUpsertArgs} args - Arguments to update or create a ShoppingList.
     * @example
     * // Update or create a ShoppingList
     * const shoppingList = await prisma.shoppingList.upsert({
     *   create: {
     *     // ... data to create a ShoppingList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingList we want to update
     *   }
     * })
     */
    upsert<T extends ShoppingListUpsertArgs>(args: SelectSubset<T, ShoppingListUpsertArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShoppingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListCountArgs} args - Arguments to filter ShoppingLists to count.
     * @example
     * // Count the number of ShoppingLists
     * const count = await prisma.shoppingList.count({
     *   where: {
     *     // ... the filter for the ShoppingLists we want to count
     *   }
     * })
    **/
    count<T extends ShoppingListCountArgs>(
      args?: Subset<T, ShoppingListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShoppingListAggregateArgs>(args: Subset<T, ShoppingListAggregateArgs>): Prisma.PrismaPromise<GetShoppingListAggregateType<T>>

    /**
     * Group by ShoppingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShoppingListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingListGroupByArgs['orderBy'] }
        : { orderBy?: ShoppingListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShoppingListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShoppingList model
   */
  readonly fields: ShoppingListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShoppingListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends ShoppingList$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingList$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShoppingList model
   */
  interface ShoppingListFieldRefs {
    readonly id: FieldRef<"ShoppingList", 'String'>
    readonly user_id: FieldRef<"ShoppingList", 'String'>
    readonly name: FieldRef<"ShoppingList", 'String'>
    readonly is_complete: FieldRef<"ShoppingList", 'Boolean'>
    readonly completed_at: FieldRef<"ShoppingList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShoppingList findUnique
   */
  export type ShoppingListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingList to fetch.
     */
    where: ShoppingListWhereUniqueInput
  }

  /**
   * ShoppingList findUniqueOrThrow
   */
  export type ShoppingListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingList to fetch.
     */
    where: ShoppingListWhereUniqueInput
  }

  /**
   * ShoppingList findFirst
   */
  export type ShoppingListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingList to fetch.
     */
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     */
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingLists.
     */
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingLists.
     */
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * ShoppingList findFirstOrThrow
   */
  export type ShoppingListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingList to fetch.
     */
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     */
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingLists.
     */
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingLists.
     */
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * ShoppingList findMany
   */
  export type ShoppingListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingLists to fetch.
     */
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     */
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShoppingLists.
     */
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     */
    skip?: number
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * ShoppingList create
   */
  export type ShoppingListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * The data needed to create a ShoppingList.
     */
    data: XOR<ShoppingListCreateInput, ShoppingListUncheckedCreateInput>
  }

  /**
   * ShoppingList createMany
   */
  export type ShoppingListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShoppingLists.
     */
    data: ShoppingListCreateManyInput | ShoppingListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShoppingList createManyAndReturn
   */
  export type ShoppingListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * The data used to create many ShoppingLists.
     */
    data: ShoppingListCreateManyInput | ShoppingListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingList update
   */
  export type ShoppingListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * The data needed to update a ShoppingList.
     */
    data: XOR<ShoppingListUpdateInput, ShoppingListUncheckedUpdateInput>
    /**
     * Choose, which ShoppingList to update.
     */
    where: ShoppingListWhereUniqueInput
  }

  /**
   * ShoppingList updateMany
   */
  export type ShoppingListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShoppingLists.
     */
    data: XOR<ShoppingListUpdateManyMutationInput, ShoppingListUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingLists to update
     */
    where?: ShoppingListWhereInput
    /**
     * Limit how many ShoppingLists to update.
     */
    limit?: number
  }

  /**
   * ShoppingList updateManyAndReturn
   */
  export type ShoppingListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * The data used to update ShoppingLists.
     */
    data: XOR<ShoppingListUpdateManyMutationInput, ShoppingListUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingLists to update
     */
    where?: ShoppingListWhereInput
    /**
     * Limit how many ShoppingLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingList upsert
   */
  export type ShoppingListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * The filter to search for the ShoppingList to update in case it exists.
     */
    where: ShoppingListWhereUniqueInput
    /**
     * In case the ShoppingList found by the `where` argument doesn't exist, create a new ShoppingList with this data.
     */
    create: XOR<ShoppingListCreateInput, ShoppingListUncheckedCreateInput>
    /**
     * In case the ShoppingList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShoppingListUpdateInput, ShoppingListUncheckedUpdateInput>
  }

  /**
   * ShoppingList delete
   */
  export type ShoppingListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter which ShoppingList to delete.
     */
    where: ShoppingListWhereUniqueInput
  }

  /**
   * ShoppingList deleteMany
   */
  export type ShoppingListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingLists to delete
     */
    where?: ShoppingListWhereInput
    /**
     * Limit how many ShoppingLists to delete.
     */
    limit?: number
  }

  /**
   * ShoppingList.items
   */
  export type ShoppingList$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingItem
     */
    omit?: ShoppingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    where?: ShoppingItemWhereInput
    orderBy?: ShoppingItemOrderByWithRelationInput | ShoppingItemOrderByWithRelationInput[]
    cursor?: ShoppingItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingItemScalarFieldEnum | ShoppingItemScalarFieldEnum[]
  }

  /**
   * ShoppingList without action
   */
  export type ShoppingListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
  }


  /**
   * Model ShoppingItem
   */

  export type AggregateShoppingItem = {
    _count: ShoppingItemCountAggregateOutputType | null
    _avg: ShoppingItemAvgAggregateOutputType | null
    _sum: ShoppingItemSumAggregateOutputType | null
    _min: ShoppingItemMinAggregateOutputType | null
    _max: ShoppingItemMaxAggregateOutputType | null
  }

  export type ShoppingItemAvgAggregateOutputType = {
    quantity: Decimal | null
  }

  export type ShoppingItemSumAggregateOutputType = {
    quantity: Decimal | null
  }

  export type ShoppingItemMinAggregateOutputType = {
    id: string | null
    list_id: string | null
    ingredient_id: string | null
    unit_id: string | null
    custom_name: string | null
    quantity: Decimal | null
    is_checked: boolean | null
  }

  export type ShoppingItemMaxAggregateOutputType = {
    id: string | null
    list_id: string | null
    ingredient_id: string | null
    unit_id: string | null
    custom_name: string | null
    quantity: Decimal | null
    is_checked: boolean | null
  }

  export type ShoppingItemCountAggregateOutputType = {
    id: number
    list_id: number
    ingredient_id: number
    unit_id: number
    custom_name: number
    quantity: number
    is_checked: number
    _all: number
  }


  export type ShoppingItemAvgAggregateInputType = {
    quantity?: true
  }

  export type ShoppingItemSumAggregateInputType = {
    quantity?: true
  }

  export type ShoppingItemMinAggregateInputType = {
    id?: true
    list_id?: true
    ingredient_id?: true
    unit_id?: true
    custom_name?: true
    quantity?: true
    is_checked?: true
  }

  export type ShoppingItemMaxAggregateInputType = {
    id?: true
    list_id?: true
    ingredient_id?: true
    unit_id?: true
    custom_name?: true
    quantity?: true
    is_checked?: true
  }

  export type ShoppingItemCountAggregateInputType = {
    id?: true
    list_id?: true
    ingredient_id?: true
    unit_id?: true
    custom_name?: true
    quantity?: true
    is_checked?: true
    _all?: true
  }

  export type ShoppingItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingItem to aggregate.
     */
    where?: ShoppingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingItems to fetch.
     */
    orderBy?: ShoppingItemOrderByWithRelationInput | ShoppingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShoppingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShoppingItems
    **/
    _count?: true | ShoppingItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShoppingItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShoppingItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingItemMaxAggregateInputType
  }

  export type GetShoppingItemAggregateType<T extends ShoppingItemAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingItem[P]>
      : GetScalarType<T[P], AggregateShoppingItem[P]>
  }




  export type ShoppingItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingItemWhereInput
    orderBy?: ShoppingItemOrderByWithAggregationInput | ShoppingItemOrderByWithAggregationInput[]
    by: ShoppingItemScalarFieldEnum[] | ShoppingItemScalarFieldEnum
    having?: ShoppingItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingItemCountAggregateInputType | true
    _avg?: ShoppingItemAvgAggregateInputType
    _sum?: ShoppingItemSumAggregateInputType
    _min?: ShoppingItemMinAggregateInputType
    _max?: ShoppingItemMaxAggregateInputType
  }

  export type ShoppingItemGroupByOutputType = {
    id: string
    list_id: string
    ingredient_id: string | null
    unit_id: string
    custom_name: string | null
    quantity: Decimal
    is_checked: boolean
    _count: ShoppingItemCountAggregateOutputType | null
    _avg: ShoppingItemAvgAggregateOutputType | null
    _sum: ShoppingItemSumAggregateOutputType | null
    _min: ShoppingItemMinAggregateOutputType | null
    _max: ShoppingItemMaxAggregateOutputType | null
  }

  type GetShoppingItemGroupByPayload<T extends ShoppingItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingItemGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingItemGroupByOutputType[P]>
        }
      >
    >


  export type ShoppingItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    list_id?: boolean
    ingredient_id?: boolean
    unit_id?: boolean
    custom_name?: boolean
    quantity?: boolean
    is_checked?: boolean
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    ingredient?: boolean | ShoppingItem$ingredientArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingItem"]>

  export type ShoppingItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    list_id?: boolean
    ingredient_id?: boolean
    unit_id?: boolean
    custom_name?: boolean
    quantity?: boolean
    is_checked?: boolean
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    ingredient?: boolean | ShoppingItem$ingredientArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingItem"]>

  export type ShoppingItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    list_id?: boolean
    ingredient_id?: boolean
    unit_id?: boolean
    custom_name?: boolean
    quantity?: boolean
    is_checked?: boolean
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    ingredient?: boolean | ShoppingItem$ingredientArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingItem"]>

  export type ShoppingItemSelectScalar = {
    id?: boolean
    list_id?: boolean
    ingredient_id?: boolean
    unit_id?: boolean
    custom_name?: boolean
    quantity?: boolean
    is_checked?: boolean
  }

  export type ShoppingItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "list_id" | "ingredient_id" | "unit_id" | "custom_name" | "quantity" | "is_checked", ExtArgs["result"]["shoppingItem"]>
  export type ShoppingItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    ingredient?: boolean | ShoppingItem$ingredientArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type ShoppingItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    ingredient?: boolean | ShoppingItem$ingredientArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type ShoppingItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ShoppingListDefaultArgs<ExtArgs>
    ingredient?: boolean | ShoppingItem$ingredientArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }

  export type $ShoppingItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShoppingItem"
    objects: {
      list: Prisma.$ShoppingListPayload<ExtArgs>
      ingredient: Prisma.$IngredientPayload<ExtArgs> | null
      unit: Prisma.$UnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      list_id: string
      ingredient_id: string | null
      unit_id: string
      custom_name: string | null
      quantity: Prisma.Decimal
      is_checked: boolean
    }, ExtArgs["result"]["shoppingItem"]>
    composites: {}
  }

  type ShoppingItemGetPayload<S extends boolean | null | undefined | ShoppingItemDefaultArgs> = $Result.GetResult<Prisma.$ShoppingItemPayload, S>

  type ShoppingItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShoppingItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShoppingItemCountAggregateInputType | true
    }

  export interface ShoppingItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShoppingItem'], meta: { name: 'ShoppingItem' } }
    /**
     * Find zero or one ShoppingItem that matches the filter.
     * @param {ShoppingItemFindUniqueArgs} args - Arguments to find a ShoppingItem
     * @example
     * // Get one ShoppingItem
     * const shoppingItem = await prisma.shoppingItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShoppingItemFindUniqueArgs>(args: SelectSubset<T, ShoppingItemFindUniqueArgs<ExtArgs>>): Prisma__ShoppingItemClient<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShoppingItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShoppingItemFindUniqueOrThrowArgs} args - Arguments to find a ShoppingItem
     * @example
     * // Get one ShoppingItem
     * const shoppingItem = await prisma.shoppingItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShoppingItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ShoppingItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShoppingItemClient<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingItemFindFirstArgs} args - Arguments to find a ShoppingItem
     * @example
     * // Get one ShoppingItem
     * const shoppingItem = await prisma.shoppingItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShoppingItemFindFirstArgs>(args?: SelectSubset<T, ShoppingItemFindFirstArgs<ExtArgs>>): Prisma__ShoppingItemClient<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingItemFindFirstOrThrowArgs} args - Arguments to find a ShoppingItem
     * @example
     * // Get one ShoppingItem
     * const shoppingItem = await prisma.shoppingItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShoppingItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ShoppingItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShoppingItemClient<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShoppingItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingItems
     * const shoppingItems = await prisma.shoppingItem.findMany()
     * 
     * // Get first 10 ShoppingItems
     * const shoppingItems = await prisma.shoppingItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoppingItemWithIdOnly = await prisma.shoppingItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShoppingItemFindManyArgs>(args?: SelectSubset<T, ShoppingItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShoppingItem.
     * @param {ShoppingItemCreateArgs} args - Arguments to create a ShoppingItem.
     * @example
     * // Create one ShoppingItem
     * const ShoppingItem = await prisma.shoppingItem.create({
     *   data: {
     *     // ... data to create a ShoppingItem
     *   }
     * })
     * 
     */
    create<T extends ShoppingItemCreateArgs>(args: SelectSubset<T, ShoppingItemCreateArgs<ExtArgs>>): Prisma__ShoppingItemClient<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShoppingItems.
     * @param {ShoppingItemCreateManyArgs} args - Arguments to create many ShoppingItems.
     * @example
     * // Create many ShoppingItems
     * const shoppingItem = await prisma.shoppingItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShoppingItemCreateManyArgs>(args?: SelectSubset<T, ShoppingItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShoppingItems and returns the data saved in the database.
     * @param {ShoppingItemCreateManyAndReturnArgs} args - Arguments to create many ShoppingItems.
     * @example
     * // Create many ShoppingItems
     * const shoppingItem = await prisma.shoppingItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShoppingItems and only return the `id`
     * const shoppingItemWithIdOnly = await prisma.shoppingItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShoppingItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ShoppingItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShoppingItem.
     * @param {ShoppingItemDeleteArgs} args - Arguments to delete one ShoppingItem.
     * @example
     * // Delete one ShoppingItem
     * const ShoppingItem = await prisma.shoppingItem.delete({
     *   where: {
     *     // ... filter to delete one ShoppingItem
     *   }
     * })
     * 
     */
    delete<T extends ShoppingItemDeleteArgs>(args: SelectSubset<T, ShoppingItemDeleteArgs<ExtArgs>>): Prisma__ShoppingItemClient<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShoppingItem.
     * @param {ShoppingItemUpdateArgs} args - Arguments to update one ShoppingItem.
     * @example
     * // Update one ShoppingItem
     * const shoppingItem = await prisma.shoppingItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShoppingItemUpdateArgs>(args: SelectSubset<T, ShoppingItemUpdateArgs<ExtArgs>>): Prisma__ShoppingItemClient<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShoppingItems.
     * @param {ShoppingItemDeleteManyArgs} args - Arguments to filter ShoppingItems to delete.
     * @example
     * // Delete a few ShoppingItems
     * const { count } = await prisma.shoppingItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShoppingItemDeleteManyArgs>(args?: SelectSubset<T, ShoppingItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingItems
     * const shoppingItem = await prisma.shoppingItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShoppingItemUpdateManyArgs>(args: SelectSubset<T, ShoppingItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingItems and returns the data updated in the database.
     * @param {ShoppingItemUpdateManyAndReturnArgs} args - Arguments to update many ShoppingItems.
     * @example
     * // Update many ShoppingItems
     * const shoppingItem = await prisma.shoppingItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShoppingItems and only return the `id`
     * const shoppingItemWithIdOnly = await prisma.shoppingItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShoppingItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ShoppingItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShoppingItem.
     * @param {ShoppingItemUpsertArgs} args - Arguments to update or create a ShoppingItem.
     * @example
     * // Update or create a ShoppingItem
     * const shoppingItem = await prisma.shoppingItem.upsert({
     *   create: {
     *     // ... data to create a ShoppingItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingItem we want to update
     *   }
     * })
     */
    upsert<T extends ShoppingItemUpsertArgs>(args: SelectSubset<T, ShoppingItemUpsertArgs<ExtArgs>>): Prisma__ShoppingItemClient<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShoppingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingItemCountArgs} args - Arguments to filter ShoppingItems to count.
     * @example
     * // Count the number of ShoppingItems
     * const count = await prisma.shoppingItem.count({
     *   where: {
     *     // ... the filter for the ShoppingItems we want to count
     *   }
     * })
    **/
    count<T extends ShoppingItemCountArgs>(
      args?: Subset<T, ShoppingItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShoppingItemAggregateArgs>(args: Subset<T, ShoppingItemAggregateArgs>): Prisma.PrismaPromise<GetShoppingItemAggregateType<T>>

    /**
     * Group by ShoppingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShoppingItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingItemGroupByArgs['orderBy'] }
        : { orderBy?: ShoppingItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShoppingItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShoppingItem model
   */
  readonly fields: ShoppingItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShoppingItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    list<T extends ShoppingListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingListDefaultArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredient<T extends ShoppingItem$ingredientArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingItem$ingredientArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShoppingItem model
   */
  interface ShoppingItemFieldRefs {
    readonly id: FieldRef<"ShoppingItem", 'String'>
    readonly list_id: FieldRef<"ShoppingItem", 'String'>
    readonly ingredient_id: FieldRef<"ShoppingItem", 'String'>
    readonly unit_id: FieldRef<"ShoppingItem", 'String'>
    readonly custom_name: FieldRef<"ShoppingItem", 'String'>
    readonly quantity: FieldRef<"ShoppingItem", 'Decimal'>
    readonly is_checked: FieldRef<"ShoppingItem", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ShoppingItem findUnique
   */
  export type ShoppingItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingItem
     */
    omit?: ShoppingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingItem to fetch.
     */
    where: ShoppingItemWhereUniqueInput
  }

  /**
   * ShoppingItem findUniqueOrThrow
   */
  export type ShoppingItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingItem
     */
    omit?: ShoppingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingItem to fetch.
     */
    where: ShoppingItemWhereUniqueInput
  }

  /**
   * ShoppingItem findFirst
   */
  export type ShoppingItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingItem
     */
    omit?: ShoppingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingItem to fetch.
     */
    where?: ShoppingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingItems to fetch.
     */
    orderBy?: ShoppingItemOrderByWithRelationInput | ShoppingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingItems.
     */
    cursor?: ShoppingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingItems.
     */
    distinct?: ShoppingItemScalarFieldEnum | ShoppingItemScalarFieldEnum[]
  }

  /**
   * ShoppingItem findFirstOrThrow
   */
  export type ShoppingItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingItem
     */
    omit?: ShoppingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingItem to fetch.
     */
    where?: ShoppingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingItems to fetch.
     */
    orderBy?: ShoppingItemOrderByWithRelationInput | ShoppingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingItems.
     */
    cursor?: ShoppingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingItems.
     */
    distinct?: ShoppingItemScalarFieldEnum | ShoppingItemScalarFieldEnum[]
  }

  /**
   * ShoppingItem findMany
   */
  export type ShoppingItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingItem
     */
    omit?: ShoppingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingItems to fetch.
     */
    where?: ShoppingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingItems to fetch.
     */
    orderBy?: ShoppingItemOrderByWithRelationInput | ShoppingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShoppingItems.
     */
    cursor?: ShoppingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingItems.
     */
    skip?: number
    distinct?: ShoppingItemScalarFieldEnum | ShoppingItemScalarFieldEnum[]
  }

  /**
   * ShoppingItem create
   */
  export type ShoppingItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingItem
     */
    omit?: ShoppingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ShoppingItem.
     */
    data: XOR<ShoppingItemCreateInput, ShoppingItemUncheckedCreateInput>
  }

  /**
   * ShoppingItem createMany
   */
  export type ShoppingItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShoppingItems.
     */
    data: ShoppingItemCreateManyInput | ShoppingItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShoppingItem createManyAndReturn
   */
  export type ShoppingItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingItem
     */
    omit?: ShoppingItemOmit<ExtArgs> | null
    /**
     * The data used to create many ShoppingItems.
     */
    data: ShoppingItemCreateManyInput | ShoppingItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingItem update
   */
  export type ShoppingItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingItem
     */
    omit?: ShoppingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ShoppingItem.
     */
    data: XOR<ShoppingItemUpdateInput, ShoppingItemUncheckedUpdateInput>
    /**
     * Choose, which ShoppingItem to update.
     */
    where: ShoppingItemWhereUniqueInput
  }

  /**
   * ShoppingItem updateMany
   */
  export type ShoppingItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShoppingItems.
     */
    data: XOR<ShoppingItemUpdateManyMutationInput, ShoppingItemUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingItems to update
     */
    where?: ShoppingItemWhereInput
    /**
     * Limit how many ShoppingItems to update.
     */
    limit?: number
  }

  /**
   * ShoppingItem updateManyAndReturn
   */
  export type ShoppingItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingItem
     */
    omit?: ShoppingItemOmit<ExtArgs> | null
    /**
     * The data used to update ShoppingItems.
     */
    data: XOR<ShoppingItemUpdateManyMutationInput, ShoppingItemUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingItems to update
     */
    where?: ShoppingItemWhereInput
    /**
     * Limit how many ShoppingItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingItem upsert
   */
  export type ShoppingItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingItem
     */
    omit?: ShoppingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ShoppingItem to update in case it exists.
     */
    where: ShoppingItemWhereUniqueInput
    /**
     * In case the ShoppingItem found by the `where` argument doesn't exist, create a new ShoppingItem with this data.
     */
    create: XOR<ShoppingItemCreateInput, ShoppingItemUncheckedCreateInput>
    /**
     * In case the ShoppingItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShoppingItemUpdateInput, ShoppingItemUncheckedUpdateInput>
  }

  /**
   * ShoppingItem delete
   */
  export type ShoppingItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingItem
     */
    omit?: ShoppingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * Filter which ShoppingItem to delete.
     */
    where: ShoppingItemWhereUniqueInput
  }

  /**
   * ShoppingItem deleteMany
   */
  export type ShoppingItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingItems to delete
     */
    where?: ShoppingItemWhereInput
    /**
     * Limit how many ShoppingItems to delete.
     */
    limit?: number
  }

  /**
   * ShoppingItem.ingredient
   */
  export type ShoppingItem$ingredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    where?: IngredientWhereInput
  }

  /**
   * ShoppingItem without action
   */
  export type ShoppingItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingItem
     */
    omit?: ShoppingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingItemInclude<ExtArgs> | null
  }


  /**
   * Model RecipeGroup
   */

  export type AggregateRecipeGroup = {
    _count: RecipeGroupCountAggregateOutputType | null
    _min: RecipeGroupMinAggregateOutputType | null
    _max: RecipeGroupMaxAggregateOutputType | null
  }

  export type RecipeGroupMinAggregateOutputType = {
    group_id: string | null
    recipe_id: string | null
    shared_by: string | null
    can_comment: boolean | null
    shared_at: Date | null
  }

  export type RecipeGroupMaxAggregateOutputType = {
    group_id: string | null
    recipe_id: string | null
    shared_by: string | null
    can_comment: boolean | null
    shared_at: Date | null
  }

  export type RecipeGroupCountAggregateOutputType = {
    group_id: number
    recipe_id: number
    shared_by: number
    can_comment: number
    shared_at: number
    _all: number
  }


  export type RecipeGroupMinAggregateInputType = {
    group_id?: true
    recipe_id?: true
    shared_by?: true
    can_comment?: true
    shared_at?: true
  }

  export type RecipeGroupMaxAggregateInputType = {
    group_id?: true
    recipe_id?: true
    shared_by?: true
    can_comment?: true
    shared_at?: true
  }

  export type RecipeGroupCountAggregateInputType = {
    group_id?: true
    recipe_id?: true
    shared_by?: true
    can_comment?: true
    shared_at?: true
    _all?: true
  }

  export type RecipeGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeGroup to aggregate.
     */
    where?: RecipeGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeGroups to fetch.
     */
    orderBy?: RecipeGroupOrderByWithRelationInput | RecipeGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeGroups
    **/
    _count?: true | RecipeGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeGroupMaxAggregateInputType
  }

  export type GetRecipeGroupAggregateType<T extends RecipeGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeGroup[P]>
      : GetScalarType<T[P], AggregateRecipeGroup[P]>
  }




  export type RecipeGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeGroupWhereInput
    orderBy?: RecipeGroupOrderByWithAggregationInput | RecipeGroupOrderByWithAggregationInput[]
    by: RecipeGroupScalarFieldEnum[] | RecipeGroupScalarFieldEnum
    having?: RecipeGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeGroupCountAggregateInputType | true
    _min?: RecipeGroupMinAggregateInputType
    _max?: RecipeGroupMaxAggregateInputType
  }

  export type RecipeGroupGroupByOutputType = {
    group_id: string
    recipe_id: string
    shared_by: string
    can_comment: boolean
    shared_at: Date
    _count: RecipeGroupCountAggregateOutputType | null
    _min: RecipeGroupMinAggregateOutputType | null
    _max: RecipeGroupMaxAggregateOutputType | null
  }

  type GetRecipeGroupGroupByPayload<T extends RecipeGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupGroupByOutputType[P]>
        }
      >
    >


  export type RecipeGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    group_id?: boolean
    recipe_id?: boolean
    shared_by?: boolean
    can_comment?: boolean
    shared_at?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeGroup"]>

  export type RecipeGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    group_id?: boolean
    recipe_id?: boolean
    shared_by?: boolean
    can_comment?: boolean
    shared_at?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeGroup"]>

  export type RecipeGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    group_id?: boolean
    recipe_id?: boolean
    shared_by?: boolean
    can_comment?: boolean
    shared_at?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeGroup"]>

  export type RecipeGroupSelectScalar = {
    group_id?: boolean
    recipe_id?: boolean
    shared_by?: boolean
    can_comment?: boolean
    shared_at?: boolean
  }

  export type RecipeGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"group_id" | "recipe_id" | "shared_by" | "can_comment" | "shared_at", ExtArgs["result"]["recipeGroup"]>
  export type RecipeGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecipeGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecipeGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecipeGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeGroup"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      recipe: Prisma.$RecipePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      group_id: string
      recipe_id: string
      shared_by: string
      can_comment: boolean
      shared_at: Date
    }, ExtArgs["result"]["recipeGroup"]>
    composites: {}
  }

  type RecipeGroupGetPayload<S extends boolean | null | undefined | RecipeGroupDefaultArgs> = $Result.GetResult<Prisma.$RecipeGroupPayload, S>

  type RecipeGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeGroupCountAggregateInputType | true
    }

  export interface RecipeGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeGroup'], meta: { name: 'RecipeGroup' } }
    /**
     * Find zero or one RecipeGroup that matches the filter.
     * @param {RecipeGroupFindUniqueArgs} args - Arguments to find a RecipeGroup
     * @example
     * // Get one RecipeGroup
     * const recipeGroup = await prisma.recipeGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeGroupFindUniqueArgs>(args: SelectSubset<T, RecipeGroupFindUniqueArgs<ExtArgs>>): Prisma__RecipeGroupClient<$Result.GetResult<Prisma.$RecipeGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeGroupFindUniqueOrThrowArgs} args - Arguments to find a RecipeGroup
     * @example
     * // Get one RecipeGroup
     * const recipeGroup = await prisma.recipeGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeGroupClient<$Result.GetResult<Prisma.$RecipeGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupFindFirstArgs} args - Arguments to find a RecipeGroup
     * @example
     * // Get one RecipeGroup
     * const recipeGroup = await prisma.recipeGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeGroupFindFirstArgs>(args?: SelectSubset<T, RecipeGroupFindFirstArgs<ExtArgs>>): Prisma__RecipeGroupClient<$Result.GetResult<Prisma.$RecipeGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupFindFirstOrThrowArgs} args - Arguments to find a RecipeGroup
     * @example
     * // Get one RecipeGroup
     * const recipeGroup = await prisma.recipeGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeGroupClient<$Result.GetResult<Prisma.$RecipeGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeGroups
     * const recipeGroups = await prisma.recipeGroup.findMany()
     * 
     * // Get first 10 RecipeGroups
     * const recipeGroups = await prisma.recipeGroup.findMany({ take: 10 })
     * 
     * // Only select the `group_id`
     * const recipeGroupWithGroup_idOnly = await prisma.recipeGroup.findMany({ select: { group_id: true } })
     * 
     */
    findMany<T extends RecipeGroupFindManyArgs>(args?: SelectSubset<T, RecipeGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeGroup.
     * @param {RecipeGroupCreateArgs} args - Arguments to create a RecipeGroup.
     * @example
     * // Create one RecipeGroup
     * const RecipeGroup = await prisma.recipeGroup.create({
     *   data: {
     *     // ... data to create a RecipeGroup
     *   }
     * })
     * 
     */
    create<T extends RecipeGroupCreateArgs>(args: SelectSubset<T, RecipeGroupCreateArgs<ExtArgs>>): Prisma__RecipeGroupClient<$Result.GetResult<Prisma.$RecipeGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeGroups.
     * @param {RecipeGroupCreateManyArgs} args - Arguments to create many RecipeGroups.
     * @example
     * // Create many RecipeGroups
     * const recipeGroup = await prisma.recipeGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeGroupCreateManyArgs>(args?: SelectSubset<T, RecipeGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeGroups and returns the data saved in the database.
     * @param {RecipeGroupCreateManyAndReturnArgs} args - Arguments to create many RecipeGroups.
     * @example
     * // Create many RecipeGroups
     * const recipeGroup = await prisma.recipeGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeGroups and only return the `group_id`
     * const recipeGroupWithGroup_idOnly = await prisma.recipeGroup.createManyAndReturn({
     *   select: { group_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeGroup.
     * @param {RecipeGroupDeleteArgs} args - Arguments to delete one RecipeGroup.
     * @example
     * // Delete one RecipeGroup
     * const RecipeGroup = await prisma.recipeGroup.delete({
     *   where: {
     *     // ... filter to delete one RecipeGroup
     *   }
     * })
     * 
     */
    delete<T extends RecipeGroupDeleteArgs>(args: SelectSubset<T, RecipeGroupDeleteArgs<ExtArgs>>): Prisma__RecipeGroupClient<$Result.GetResult<Prisma.$RecipeGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeGroup.
     * @param {RecipeGroupUpdateArgs} args - Arguments to update one RecipeGroup.
     * @example
     * // Update one RecipeGroup
     * const recipeGroup = await prisma.recipeGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeGroupUpdateArgs>(args: SelectSubset<T, RecipeGroupUpdateArgs<ExtArgs>>): Prisma__RecipeGroupClient<$Result.GetResult<Prisma.$RecipeGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeGroups.
     * @param {RecipeGroupDeleteManyArgs} args - Arguments to filter RecipeGroups to delete.
     * @example
     * // Delete a few RecipeGroups
     * const { count } = await prisma.recipeGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeGroupDeleteManyArgs>(args?: SelectSubset<T, RecipeGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeGroups
     * const recipeGroup = await prisma.recipeGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeGroupUpdateManyArgs>(args: SelectSubset<T, RecipeGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeGroups and returns the data updated in the database.
     * @param {RecipeGroupUpdateManyAndReturnArgs} args - Arguments to update many RecipeGroups.
     * @example
     * // Update many RecipeGroups
     * const recipeGroup = await prisma.recipeGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeGroups and only return the `group_id`
     * const recipeGroupWithGroup_idOnly = await prisma.recipeGroup.updateManyAndReturn({
     *   select: { group_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeGroup.
     * @param {RecipeGroupUpsertArgs} args - Arguments to update or create a RecipeGroup.
     * @example
     * // Update or create a RecipeGroup
     * const recipeGroup = await prisma.recipeGroup.upsert({
     *   create: {
     *     // ... data to create a RecipeGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeGroup we want to update
     *   }
     * })
     */
    upsert<T extends RecipeGroupUpsertArgs>(args: SelectSubset<T, RecipeGroupUpsertArgs<ExtArgs>>): Prisma__RecipeGroupClient<$Result.GetResult<Prisma.$RecipeGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupCountArgs} args - Arguments to filter RecipeGroups to count.
     * @example
     * // Count the number of RecipeGroups
     * const count = await prisma.recipeGroup.count({
     *   where: {
     *     // ... the filter for the RecipeGroups we want to count
     *   }
     * })
    **/
    count<T extends RecipeGroupCountArgs>(
      args?: Subset<T, RecipeGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeGroupAggregateArgs>(args: Subset<T, RecipeGroupAggregateArgs>): Prisma.PrismaPromise<GetRecipeGroupAggregateType<T>>

    /**
     * Group by RecipeGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeGroup model
   */
  readonly fields: RecipeGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecipeGroup model
   */
  interface RecipeGroupFieldRefs {
    readonly group_id: FieldRef<"RecipeGroup", 'String'>
    readonly recipe_id: FieldRef<"RecipeGroup", 'String'>
    readonly shared_by: FieldRef<"RecipeGroup", 'String'>
    readonly can_comment: FieldRef<"RecipeGroup", 'Boolean'>
    readonly shared_at: FieldRef<"RecipeGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecipeGroup findUnique
   */
  export type RecipeGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeGroup
     */
    select?: RecipeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeGroup
     */
    omit?: RecipeGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeGroupInclude<ExtArgs> | null
    /**
     * Filter, which RecipeGroup to fetch.
     */
    where: RecipeGroupWhereUniqueInput
  }

  /**
   * RecipeGroup findUniqueOrThrow
   */
  export type RecipeGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeGroup
     */
    select?: RecipeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeGroup
     */
    omit?: RecipeGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeGroupInclude<ExtArgs> | null
    /**
     * Filter, which RecipeGroup to fetch.
     */
    where: RecipeGroupWhereUniqueInput
  }

  /**
   * RecipeGroup findFirst
   */
  export type RecipeGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeGroup
     */
    select?: RecipeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeGroup
     */
    omit?: RecipeGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeGroupInclude<ExtArgs> | null
    /**
     * Filter, which RecipeGroup to fetch.
     */
    where?: RecipeGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeGroups to fetch.
     */
    orderBy?: RecipeGroupOrderByWithRelationInput | RecipeGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeGroups.
     */
    cursor?: RecipeGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeGroups.
     */
    distinct?: RecipeGroupScalarFieldEnum | RecipeGroupScalarFieldEnum[]
  }

  /**
   * RecipeGroup findFirstOrThrow
   */
  export type RecipeGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeGroup
     */
    select?: RecipeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeGroup
     */
    omit?: RecipeGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeGroupInclude<ExtArgs> | null
    /**
     * Filter, which RecipeGroup to fetch.
     */
    where?: RecipeGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeGroups to fetch.
     */
    orderBy?: RecipeGroupOrderByWithRelationInput | RecipeGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeGroups.
     */
    cursor?: RecipeGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeGroups.
     */
    distinct?: RecipeGroupScalarFieldEnum | RecipeGroupScalarFieldEnum[]
  }

  /**
   * RecipeGroup findMany
   */
  export type RecipeGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeGroup
     */
    select?: RecipeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeGroup
     */
    omit?: RecipeGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeGroupInclude<ExtArgs> | null
    /**
     * Filter, which RecipeGroups to fetch.
     */
    where?: RecipeGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeGroups to fetch.
     */
    orderBy?: RecipeGroupOrderByWithRelationInput | RecipeGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeGroups.
     */
    cursor?: RecipeGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeGroups.
     */
    skip?: number
    distinct?: RecipeGroupScalarFieldEnum | RecipeGroupScalarFieldEnum[]
  }

  /**
   * RecipeGroup create
   */
  export type RecipeGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeGroup
     */
    select?: RecipeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeGroup
     */
    omit?: RecipeGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeGroup.
     */
    data: XOR<RecipeGroupCreateInput, RecipeGroupUncheckedCreateInput>
  }

  /**
   * RecipeGroup createMany
   */
  export type RecipeGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeGroups.
     */
    data: RecipeGroupCreateManyInput | RecipeGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeGroup createManyAndReturn
   */
  export type RecipeGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeGroup
     */
    select?: RecipeGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeGroup
     */
    omit?: RecipeGroupOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeGroups.
     */
    data: RecipeGroupCreateManyInput | RecipeGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeGroup update
   */
  export type RecipeGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeGroup
     */
    select?: RecipeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeGroup
     */
    omit?: RecipeGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeGroup.
     */
    data: XOR<RecipeGroupUpdateInput, RecipeGroupUncheckedUpdateInput>
    /**
     * Choose, which RecipeGroup to update.
     */
    where: RecipeGroupWhereUniqueInput
  }

  /**
   * RecipeGroup updateMany
   */
  export type RecipeGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeGroups.
     */
    data: XOR<RecipeGroupUpdateManyMutationInput, RecipeGroupUncheckedUpdateManyInput>
    /**
     * Filter which RecipeGroups to update
     */
    where?: RecipeGroupWhereInput
    /**
     * Limit how many RecipeGroups to update.
     */
    limit?: number
  }

  /**
   * RecipeGroup updateManyAndReturn
   */
  export type RecipeGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeGroup
     */
    select?: RecipeGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeGroup
     */
    omit?: RecipeGroupOmit<ExtArgs> | null
    /**
     * The data used to update RecipeGroups.
     */
    data: XOR<RecipeGroupUpdateManyMutationInput, RecipeGroupUncheckedUpdateManyInput>
    /**
     * Filter which RecipeGroups to update
     */
    where?: RecipeGroupWhereInput
    /**
     * Limit how many RecipeGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeGroup upsert
   */
  export type RecipeGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeGroup
     */
    select?: RecipeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeGroup
     */
    omit?: RecipeGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeGroup to update in case it exists.
     */
    where: RecipeGroupWhereUniqueInput
    /**
     * In case the RecipeGroup found by the `where` argument doesn't exist, create a new RecipeGroup with this data.
     */
    create: XOR<RecipeGroupCreateInput, RecipeGroupUncheckedCreateInput>
    /**
     * In case the RecipeGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeGroupUpdateInput, RecipeGroupUncheckedUpdateInput>
  }

  /**
   * RecipeGroup delete
   */
  export type RecipeGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeGroup
     */
    select?: RecipeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeGroup
     */
    omit?: RecipeGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeGroupInclude<ExtArgs> | null
    /**
     * Filter which RecipeGroup to delete.
     */
    where: RecipeGroupWhereUniqueInput
  }

  /**
   * RecipeGroup deleteMany
   */
  export type RecipeGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeGroups to delete
     */
    where?: RecipeGroupWhereInput
    /**
     * Limit how many RecipeGroups to delete.
     */
    limit?: number
  }

  /**
   * RecipeGroup without action
   */
  export type RecipeGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeGroup
     */
    select?: RecipeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeGroup
     */
    omit?: RecipeGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeGroupInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password_hash: 'password_hash',
    first_name: 'first_name',
    last_name: 'last_name',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    owner_id: 'owner_id',
    name: 'name',
    description: 'description'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const UserGroupScalarFieldEnum: {
    user_id: 'user_id',
    role_id: 'role_id',
    group_id: 'group_id',
    is_owner: 'is_owner',
    joined_at: 'joined_at'
  };

  export type UserGroupScalarFieldEnum = (typeof UserGroupScalarFieldEnum)[keyof typeof UserGroupScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    abbreviation: 'abbreviation',
    unit_type: 'unit_type'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    author_id: 'author_id',
    title: 'title',
    description: 'description',
    time_required_min: 'time_required_min',
    difficulty: 'difficulty',
    servings: 'servings',
    is_public: 'is_public',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    recipe_id: 'recipe_id',
    unit_id: 'unit_id',
    name: 'name',
    quantity: 'quantity',
    calories: 'calories',
    protein_g: 'protein_g',
    carbs_g: 'carbs_g',
    fat_g: 'fat_g',
    sort_order: 'sort_order'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const CookingStepScalarFieldEnum: {
    id: 'id',
    recipe_id: 'recipe_id',
    step_number: 'step_number',
    instruction: 'instruction',
    duration_min: 'duration_min'
  };

  export type CookingStepScalarFieldEnum = (typeof CookingStepScalarFieldEnum)[keyof typeof CookingStepScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const RecipeTagScalarFieldEnum: {
    recipe_id: 'recipe_id',
    tag_id: 'tag_id'
  };

  export type RecipeTagScalarFieldEnum = (typeof RecipeTagScalarFieldEnum)[keyof typeof RecipeTagScalarFieldEnum]


  export const RecipeImageScalarFieldEnum: {
    id: 'id',
    recipe_id: 'recipe_id',
    storage_url: 'storage_url',
    provider: 'provider',
    storage_key: 'storage_key',
    is_primary: 'is_primary',
    mime_type: 'mime_type',
    uploaded_at: 'uploaded_at'
  };

  export type RecipeImageScalarFieldEnum = (typeof RecipeImageScalarFieldEnum)[keyof typeof RecipeImageScalarFieldEnum]


  export const ShoppingListScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    is_complete: 'is_complete',
    completed_at: 'completed_at'
  };

  export type ShoppingListScalarFieldEnum = (typeof ShoppingListScalarFieldEnum)[keyof typeof ShoppingListScalarFieldEnum]


  export const ShoppingItemScalarFieldEnum: {
    id: 'id',
    list_id: 'list_id',
    ingredient_id: 'ingredient_id',
    unit_id: 'unit_id',
    custom_name: 'custom_name',
    quantity: 'quantity',
    is_checked: 'is_checked'
  };

  export type ShoppingItemScalarFieldEnum = (typeof ShoppingItemScalarFieldEnum)[keyof typeof ShoppingItemScalarFieldEnum]


  export const RecipeGroupScalarFieldEnum: {
    group_id: 'group_id',
    recipe_id: 'recipe_id',
    shared_by: 'shared_by',
    can_comment: 'can_comment',
    shared_at: 'shared_at'
  };

  export type RecipeGroupScalarFieldEnum = (typeof RecipeGroupScalarFieldEnum)[keyof typeof RecipeGroupScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RoleName'
   */
  export type EnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName'>
    


  /**
   * Reference to a field of type 'RoleName[]'
   */
  export type ListEnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UnitType'
   */
  export type EnumUnitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnitType'>
    


  /**
   * Reference to a field of type 'UnitType[]'
   */
  export type ListEnumUnitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnitType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    ownedGroups?: GroupListRelationFilter
    userGroups?: UserGroupListRelationFilter
    recipes?: RecipeListRelationFilter
    shoppingLists?: ShoppingListListRelationFilter
    sharedRecipes?: RecipeGroupListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    created_at?: SortOrder
    ownedGroups?: GroupOrderByRelationAggregateInput
    userGroups?: UserGroupOrderByRelationAggregateInput
    recipes?: RecipeOrderByRelationAggregateInput
    shoppingLists?: ShoppingListOrderByRelationAggregateInput
    sharedRecipes?: RecipeGroupOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password_hash?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    ownedGroups?: GroupListRelationFilter
    userGroups?: UserGroupListRelationFilter
    recipes?: RecipeListRelationFilter
    shoppingLists?: ShoppingListListRelationFilter
    sharedRecipes?: RecipeGroupListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: UuidFilter<"Role"> | string
    name?: EnumRoleNameFilter<"Role"> | $Enums.RoleName
    description?: StringNullableFilter<"Role"> | string | null
    userGroups?: UserGroupListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userGroups?: UserGroupOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: $Enums.RoleName
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    userGroups?: UserGroupListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Role"> | string
    name?: EnumRoleNameWithAggregatesFilter<"Role"> | $Enums.RoleName
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: UuidFilter<"Group"> | string
    owner_id?: UuidFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    userGroups?: UserGroupListRelationFilter
    recipeGroups?: RecipeGroupListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
    userGroups?: UserGroupOrderByRelationAggregateInput
    recipeGroups?: RecipeGroupOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    owner_id?: UuidFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    userGroups?: UserGroupListRelationFilter
    recipeGroups?: RecipeGroupListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Group"> | string
    owner_id?: UuidWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    description?: StringNullableWithAggregatesFilter<"Group"> | string | null
  }

  export type UserGroupWhereInput = {
    AND?: UserGroupWhereInput | UserGroupWhereInput[]
    OR?: UserGroupWhereInput[]
    NOT?: UserGroupWhereInput | UserGroupWhereInput[]
    user_id?: UuidFilter<"UserGroup"> | string
    role_id?: UuidFilter<"UserGroup"> | string
    group_id?: UuidFilter<"UserGroup"> | string
    is_owner?: BoolFilter<"UserGroup"> | boolean
    joined_at?: DateTimeFilter<"UserGroup"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type UserGroupOrderByWithRelationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    group_id?: SortOrder
    is_owner?: SortOrder
    joined_at?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type UserGroupWhereUniqueInput = Prisma.AtLeast<{
    user_id_group_id?: UserGroupUser_idGroup_idCompoundUniqueInput
    AND?: UserGroupWhereInput | UserGroupWhereInput[]
    OR?: UserGroupWhereInput[]
    NOT?: UserGroupWhereInput | UserGroupWhereInput[]
    user_id?: UuidFilter<"UserGroup"> | string
    role_id?: UuidFilter<"UserGroup"> | string
    group_id?: UuidFilter<"UserGroup"> | string
    is_owner?: BoolFilter<"UserGroup"> | boolean
    joined_at?: DateTimeFilter<"UserGroup"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "user_id_group_id">

  export type UserGroupOrderByWithAggregationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    group_id?: SortOrder
    is_owner?: SortOrder
    joined_at?: SortOrder
    _count?: UserGroupCountOrderByAggregateInput
    _max?: UserGroupMaxOrderByAggregateInput
    _min?: UserGroupMinOrderByAggregateInput
  }

  export type UserGroupScalarWhereWithAggregatesInput = {
    AND?: UserGroupScalarWhereWithAggregatesInput | UserGroupScalarWhereWithAggregatesInput[]
    OR?: UserGroupScalarWhereWithAggregatesInput[]
    NOT?: UserGroupScalarWhereWithAggregatesInput | UserGroupScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"UserGroup"> | string
    role_id?: UuidWithAggregatesFilter<"UserGroup"> | string
    group_id?: UuidWithAggregatesFilter<"UserGroup"> | string
    is_owner?: BoolWithAggregatesFilter<"UserGroup"> | boolean
    joined_at?: DateTimeWithAggregatesFilter<"UserGroup"> | Date | string
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: UuidFilter<"Unit"> | string
    name?: StringFilter<"Unit"> | string
    abbreviation?: StringFilter<"Unit"> | string
    unit_type?: EnumUnitTypeFilter<"Unit"> | $Enums.UnitType
    ingredients?: IngredientListRelationFilter
    shoppingItems?: ShoppingItemListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    unit_type?: SortOrder
    ingredients?: IngredientOrderByRelationAggregateInput
    shoppingItems?: ShoppingItemOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    abbreviation?: StringFilter<"Unit"> | string
    unit_type?: EnumUnitTypeFilter<"Unit"> | $Enums.UnitType
    ingredients?: IngredientListRelationFilter
    shoppingItems?: ShoppingItemListRelationFilter
  }, "id" | "name">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    unit_type?: SortOrder
    _count?: UnitCountOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Unit"> | string
    name?: StringWithAggregatesFilter<"Unit"> | string
    abbreviation?: StringWithAggregatesFilter<"Unit"> | string
    unit_type?: EnumUnitTypeWithAggregatesFilter<"Unit"> | $Enums.UnitType
  }

  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: UuidFilter<"Recipe"> | string
    author_id?: UuidFilter<"Recipe"> | string
    title?: StringFilter<"Recipe"> | string
    description?: StringNullableFilter<"Recipe"> | string | null
    time_required_min?: IntNullableFilter<"Recipe"> | number | null
    difficulty?: StringNullableFilter<"Recipe"> | string | null
    servings?: IntNullableFilter<"Recipe"> | number | null
    is_public?: BoolFilter<"Recipe"> | boolean
    created_at?: DateTimeFilter<"Recipe"> | Date | string
    updated_at?: DateTimeFilter<"Recipe"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    ingredients?: IngredientListRelationFilter
    steps?: CookingStepListRelationFilter
    images?: RecipeImageListRelationFilter
    tags?: RecipeTagListRelationFilter
    groups?: RecipeGroupListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    author_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    time_required_min?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    servings?: SortOrderInput | SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    author?: UserOrderByWithRelationInput
    ingredients?: IngredientOrderByRelationAggregateInput
    steps?: CookingStepOrderByRelationAggregateInput
    images?: RecipeImageOrderByRelationAggregateInput
    tags?: RecipeTagOrderByRelationAggregateInput
    groups?: RecipeGroupOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    author_id?: UuidFilter<"Recipe"> | string
    title?: StringFilter<"Recipe"> | string
    description?: StringNullableFilter<"Recipe"> | string | null
    time_required_min?: IntNullableFilter<"Recipe"> | number | null
    difficulty?: StringNullableFilter<"Recipe"> | string | null
    servings?: IntNullableFilter<"Recipe"> | number | null
    is_public?: BoolFilter<"Recipe"> | boolean
    created_at?: DateTimeFilter<"Recipe"> | Date | string
    updated_at?: DateTimeFilter<"Recipe"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    ingredients?: IngredientListRelationFilter
    steps?: CookingStepListRelationFilter
    images?: RecipeImageListRelationFilter
    tags?: RecipeTagListRelationFilter
    groups?: RecipeGroupListRelationFilter
  }, "id">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    author_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    time_required_min?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    servings?: SortOrderInput | SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Recipe"> | string
    author_id?: UuidWithAggregatesFilter<"Recipe"> | string
    title?: StringWithAggregatesFilter<"Recipe"> | string
    description?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
    time_required_min?: IntNullableWithAggregatesFilter<"Recipe"> | number | null
    difficulty?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
    servings?: IntNullableWithAggregatesFilter<"Recipe"> | number | null
    is_public?: BoolWithAggregatesFilter<"Recipe"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: UuidFilter<"Ingredient"> | string
    recipe_id?: UuidFilter<"Ingredient"> | string
    unit_id?: UuidFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    quantity?: DecimalFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    calories?: DecimalNullableFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string | null
    protein_g?: DecimalNullableFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string | null
    carbs_g?: DecimalNullableFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string | null
    fat_g?: DecimalNullableFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string | null
    sort_order?: IntFilter<"Ingredient"> | number
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    shoppingItems?: ShoppingItemListRelationFilter
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    unit_id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    calories?: SortOrderInput | SortOrder
    protein_g?: SortOrderInput | SortOrder
    carbs_g?: SortOrderInput | SortOrder
    fat_g?: SortOrderInput | SortOrder
    sort_order?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    shoppingItems?: ShoppingItemOrderByRelationAggregateInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    recipe_id?: UuidFilter<"Ingredient"> | string
    unit_id?: UuidFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    quantity?: DecimalFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    calories?: DecimalNullableFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string | null
    protein_g?: DecimalNullableFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string | null
    carbs_g?: DecimalNullableFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string | null
    fat_g?: DecimalNullableFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string | null
    sort_order?: IntFilter<"Ingredient"> | number
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    shoppingItems?: ShoppingItemListRelationFilter
  }, "id">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    unit_id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    calories?: SortOrderInput | SortOrder
    protein_g?: SortOrderInput | SortOrder
    carbs_g?: SortOrderInput | SortOrder
    fat_g?: SortOrderInput | SortOrder
    sort_order?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _avg?: IngredientAvgOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
    _sum?: IngredientSumOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Ingredient"> | string
    recipe_id?: UuidWithAggregatesFilter<"Ingredient"> | string
    unit_id?: UuidWithAggregatesFilter<"Ingredient"> | string
    name?: StringWithAggregatesFilter<"Ingredient"> | string
    quantity?: DecimalWithAggregatesFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    calories?: DecimalNullableWithAggregatesFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string | null
    protein_g?: DecimalNullableWithAggregatesFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string | null
    carbs_g?: DecimalNullableWithAggregatesFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string | null
    fat_g?: DecimalNullableWithAggregatesFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string | null
    sort_order?: IntWithAggregatesFilter<"Ingredient"> | number
  }

  export type CookingStepWhereInput = {
    AND?: CookingStepWhereInput | CookingStepWhereInput[]
    OR?: CookingStepWhereInput[]
    NOT?: CookingStepWhereInput | CookingStepWhereInput[]
    id?: UuidFilter<"CookingStep"> | string
    recipe_id?: UuidFilter<"CookingStep"> | string
    step_number?: IntFilter<"CookingStep"> | number
    instruction?: StringFilter<"CookingStep"> | string
    duration_min?: IntNullableFilter<"CookingStep"> | number | null
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type CookingStepOrderByWithRelationInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    step_number?: SortOrder
    instruction?: SortOrder
    duration_min?: SortOrderInput | SortOrder
    recipe?: RecipeOrderByWithRelationInput
  }

  export type CookingStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CookingStepWhereInput | CookingStepWhereInput[]
    OR?: CookingStepWhereInput[]
    NOT?: CookingStepWhereInput | CookingStepWhereInput[]
    recipe_id?: UuidFilter<"CookingStep"> | string
    step_number?: IntFilter<"CookingStep"> | number
    instruction?: StringFilter<"CookingStep"> | string
    duration_min?: IntNullableFilter<"CookingStep"> | number | null
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id">

  export type CookingStepOrderByWithAggregationInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    step_number?: SortOrder
    instruction?: SortOrder
    duration_min?: SortOrderInput | SortOrder
    _count?: CookingStepCountOrderByAggregateInput
    _avg?: CookingStepAvgOrderByAggregateInput
    _max?: CookingStepMaxOrderByAggregateInput
    _min?: CookingStepMinOrderByAggregateInput
    _sum?: CookingStepSumOrderByAggregateInput
  }

  export type CookingStepScalarWhereWithAggregatesInput = {
    AND?: CookingStepScalarWhereWithAggregatesInput | CookingStepScalarWhereWithAggregatesInput[]
    OR?: CookingStepScalarWhereWithAggregatesInput[]
    NOT?: CookingStepScalarWhereWithAggregatesInput | CookingStepScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CookingStep"> | string
    recipe_id?: UuidWithAggregatesFilter<"CookingStep"> | string
    step_number?: IntWithAggregatesFilter<"CookingStep"> | number
    instruction?: StringWithAggregatesFilter<"CookingStep"> | string
    duration_min?: IntNullableWithAggregatesFilter<"CookingStep"> | number | null
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: UuidFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    recipes?: RecipeTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    recipes?: RecipeTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    recipes?: RecipeTagListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type RecipeTagWhereInput = {
    AND?: RecipeTagWhereInput | RecipeTagWhereInput[]
    OR?: RecipeTagWhereInput[]
    NOT?: RecipeTagWhereInput | RecipeTagWhereInput[]
    recipe_id?: UuidFilter<"RecipeTag"> | string
    tag_id?: UuidFilter<"RecipeTag"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type RecipeTagOrderByWithRelationInput = {
    recipe_id?: SortOrder
    tag_id?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type RecipeTagWhereUniqueInput = Prisma.AtLeast<{
    recipe_id_tag_id?: RecipeTagRecipe_idTag_idCompoundUniqueInput
    AND?: RecipeTagWhereInput | RecipeTagWhereInput[]
    OR?: RecipeTagWhereInput[]
    NOT?: RecipeTagWhereInput | RecipeTagWhereInput[]
    recipe_id?: UuidFilter<"RecipeTag"> | string
    tag_id?: UuidFilter<"RecipeTag"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "recipe_id_tag_id">

  export type RecipeTagOrderByWithAggregationInput = {
    recipe_id?: SortOrder
    tag_id?: SortOrder
    _count?: RecipeTagCountOrderByAggregateInput
    _max?: RecipeTagMaxOrderByAggregateInput
    _min?: RecipeTagMinOrderByAggregateInput
  }

  export type RecipeTagScalarWhereWithAggregatesInput = {
    AND?: RecipeTagScalarWhereWithAggregatesInput | RecipeTagScalarWhereWithAggregatesInput[]
    OR?: RecipeTagScalarWhereWithAggregatesInput[]
    NOT?: RecipeTagScalarWhereWithAggregatesInput | RecipeTagScalarWhereWithAggregatesInput[]
    recipe_id?: UuidWithAggregatesFilter<"RecipeTag"> | string
    tag_id?: UuidWithAggregatesFilter<"RecipeTag"> | string
  }

  export type RecipeImageWhereInput = {
    AND?: RecipeImageWhereInput | RecipeImageWhereInput[]
    OR?: RecipeImageWhereInput[]
    NOT?: RecipeImageWhereInput | RecipeImageWhereInput[]
    id?: UuidFilter<"RecipeImage"> | string
    recipe_id?: UuidFilter<"RecipeImage"> | string
    storage_url?: StringFilter<"RecipeImage"> | string
    provider?: StringFilter<"RecipeImage"> | string
    storage_key?: StringFilter<"RecipeImage"> | string
    is_primary?: BoolFilter<"RecipeImage"> | boolean
    mime_type?: StringFilter<"RecipeImage"> | string
    uploaded_at?: DateTimeFilter<"RecipeImage"> | Date | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type RecipeImageOrderByWithRelationInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    storage_url?: SortOrder
    provider?: SortOrder
    storage_key?: SortOrder
    is_primary?: SortOrder
    mime_type?: SortOrder
    uploaded_at?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
  }

  export type RecipeImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeImageWhereInput | RecipeImageWhereInput[]
    OR?: RecipeImageWhereInput[]
    NOT?: RecipeImageWhereInput | RecipeImageWhereInput[]
    recipe_id?: UuidFilter<"RecipeImage"> | string
    storage_url?: StringFilter<"RecipeImage"> | string
    provider?: StringFilter<"RecipeImage"> | string
    storage_key?: StringFilter<"RecipeImage"> | string
    is_primary?: BoolFilter<"RecipeImage"> | boolean
    mime_type?: StringFilter<"RecipeImage"> | string
    uploaded_at?: DateTimeFilter<"RecipeImage"> | Date | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id">

  export type RecipeImageOrderByWithAggregationInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    storage_url?: SortOrder
    provider?: SortOrder
    storage_key?: SortOrder
    is_primary?: SortOrder
    mime_type?: SortOrder
    uploaded_at?: SortOrder
    _count?: RecipeImageCountOrderByAggregateInput
    _max?: RecipeImageMaxOrderByAggregateInput
    _min?: RecipeImageMinOrderByAggregateInput
  }

  export type RecipeImageScalarWhereWithAggregatesInput = {
    AND?: RecipeImageScalarWhereWithAggregatesInput | RecipeImageScalarWhereWithAggregatesInput[]
    OR?: RecipeImageScalarWhereWithAggregatesInput[]
    NOT?: RecipeImageScalarWhereWithAggregatesInput | RecipeImageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RecipeImage"> | string
    recipe_id?: UuidWithAggregatesFilter<"RecipeImage"> | string
    storage_url?: StringWithAggregatesFilter<"RecipeImage"> | string
    provider?: StringWithAggregatesFilter<"RecipeImage"> | string
    storage_key?: StringWithAggregatesFilter<"RecipeImage"> | string
    is_primary?: BoolWithAggregatesFilter<"RecipeImage"> | boolean
    mime_type?: StringWithAggregatesFilter<"RecipeImage"> | string
    uploaded_at?: DateTimeWithAggregatesFilter<"RecipeImage"> | Date | string
  }

  export type ShoppingListWhereInput = {
    AND?: ShoppingListWhereInput | ShoppingListWhereInput[]
    OR?: ShoppingListWhereInput[]
    NOT?: ShoppingListWhereInput | ShoppingListWhereInput[]
    id?: UuidFilter<"ShoppingList"> | string
    user_id?: UuidFilter<"ShoppingList"> | string
    name?: StringFilter<"ShoppingList"> | string
    is_complete?: BoolFilter<"ShoppingList"> | boolean
    completed_at?: DateTimeNullableFilter<"ShoppingList"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: ShoppingItemListRelationFilter
  }

  export type ShoppingListOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    is_complete?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    items?: ShoppingItemOrderByRelationAggregateInput
  }

  export type ShoppingListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShoppingListWhereInput | ShoppingListWhereInput[]
    OR?: ShoppingListWhereInput[]
    NOT?: ShoppingListWhereInput | ShoppingListWhereInput[]
    user_id?: UuidFilter<"ShoppingList"> | string
    name?: StringFilter<"ShoppingList"> | string
    is_complete?: BoolFilter<"ShoppingList"> | boolean
    completed_at?: DateTimeNullableFilter<"ShoppingList"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: ShoppingItemListRelationFilter
  }, "id">

  export type ShoppingListOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    is_complete?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    _count?: ShoppingListCountOrderByAggregateInput
    _max?: ShoppingListMaxOrderByAggregateInput
    _min?: ShoppingListMinOrderByAggregateInput
  }

  export type ShoppingListScalarWhereWithAggregatesInput = {
    AND?: ShoppingListScalarWhereWithAggregatesInput | ShoppingListScalarWhereWithAggregatesInput[]
    OR?: ShoppingListScalarWhereWithAggregatesInput[]
    NOT?: ShoppingListScalarWhereWithAggregatesInput | ShoppingListScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ShoppingList"> | string
    user_id?: UuidWithAggregatesFilter<"ShoppingList"> | string
    name?: StringWithAggregatesFilter<"ShoppingList"> | string
    is_complete?: BoolWithAggregatesFilter<"ShoppingList"> | boolean
    completed_at?: DateTimeNullableWithAggregatesFilter<"ShoppingList"> | Date | string | null
  }

  export type ShoppingItemWhereInput = {
    AND?: ShoppingItemWhereInput | ShoppingItemWhereInput[]
    OR?: ShoppingItemWhereInput[]
    NOT?: ShoppingItemWhereInput | ShoppingItemWhereInput[]
    id?: UuidFilter<"ShoppingItem"> | string
    list_id?: UuidFilter<"ShoppingItem"> | string
    ingredient_id?: UuidNullableFilter<"ShoppingItem"> | string | null
    unit_id?: UuidFilter<"ShoppingItem"> | string
    custom_name?: StringNullableFilter<"ShoppingItem"> | string | null
    quantity?: DecimalFilter<"ShoppingItem"> | Decimal | DecimalJsLike | number | string
    is_checked?: BoolFilter<"ShoppingItem"> | boolean
    list?: XOR<ShoppingListScalarRelationFilter, ShoppingListWhereInput>
    ingredient?: XOR<IngredientNullableScalarRelationFilter, IngredientWhereInput> | null
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
  }

  export type ShoppingItemOrderByWithRelationInput = {
    id?: SortOrder
    list_id?: SortOrder
    ingredient_id?: SortOrderInput | SortOrder
    unit_id?: SortOrder
    custom_name?: SortOrderInput | SortOrder
    quantity?: SortOrder
    is_checked?: SortOrder
    list?: ShoppingListOrderByWithRelationInput
    ingredient?: IngredientOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
  }

  export type ShoppingItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShoppingItemWhereInput | ShoppingItemWhereInput[]
    OR?: ShoppingItemWhereInput[]
    NOT?: ShoppingItemWhereInput | ShoppingItemWhereInput[]
    list_id?: UuidFilter<"ShoppingItem"> | string
    ingredient_id?: UuidNullableFilter<"ShoppingItem"> | string | null
    unit_id?: UuidFilter<"ShoppingItem"> | string
    custom_name?: StringNullableFilter<"ShoppingItem"> | string | null
    quantity?: DecimalFilter<"ShoppingItem"> | Decimal | DecimalJsLike | number | string
    is_checked?: BoolFilter<"ShoppingItem"> | boolean
    list?: XOR<ShoppingListScalarRelationFilter, ShoppingListWhereInput>
    ingredient?: XOR<IngredientNullableScalarRelationFilter, IngredientWhereInput> | null
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
  }, "id">

  export type ShoppingItemOrderByWithAggregationInput = {
    id?: SortOrder
    list_id?: SortOrder
    ingredient_id?: SortOrderInput | SortOrder
    unit_id?: SortOrder
    custom_name?: SortOrderInput | SortOrder
    quantity?: SortOrder
    is_checked?: SortOrder
    _count?: ShoppingItemCountOrderByAggregateInput
    _avg?: ShoppingItemAvgOrderByAggregateInput
    _max?: ShoppingItemMaxOrderByAggregateInput
    _min?: ShoppingItemMinOrderByAggregateInput
    _sum?: ShoppingItemSumOrderByAggregateInput
  }

  export type ShoppingItemScalarWhereWithAggregatesInput = {
    AND?: ShoppingItemScalarWhereWithAggregatesInput | ShoppingItemScalarWhereWithAggregatesInput[]
    OR?: ShoppingItemScalarWhereWithAggregatesInput[]
    NOT?: ShoppingItemScalarWhereWithAggregatesInput | ShoppingItemScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ShoppingItem"> | string
    list_id?: UuidWithAggregatesFilter<"ShoppingItem"> | string
    ingredient_id?: UuidNullableWithAggregatesFilter<"ShoppingItem"> | string | null
    unit_id?: UuidWithAggregatesFilter<"ShoppingItem"> | string
    custom_name?: StringNullableWithAggregatesFilter<"ShoppingItem"> | string | null
    quantity?: DecimalWithAggregatesFilter<"ShoppingItem"> | Decimal | DecimalJsLike | number | string
    is_checked?: BoolWithAggregatesFilter<"ShoppingItem"> | boolean
  }

  export type RecipeGroupWhereInput = {
    AND?: RecipeGroupWhereInput | RecipeGroupWhereInput[]
    OR?: RecipeGroupWhereInput[]
    NOT?: RecipeGroupWhereInput | RecipeGroupWhereInput[]
    group_id?: UuidFilter<"RecipeGroup"> | string
    recipe_id?: UuidFilter<"RecipeGroup"> | string
    shared_by?: UuidFilter<"RecipeGroup"> | string
    can_comment?: BoolFilter<"RecipeGroup"> | boolean
    shared_at?: DateTimeFilter<"RecipeGroup"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RecipeGroupOrderByWithRelationInput = {
    group_id?: SortOrder
    recipe_id?: SortOrder
    shared_by?: SortOrder
    can_comment?: SortOrder
    shared_at?: SortOrder
    group?: GroupOrderByWithRelationInput
    recipe?: RecipeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RecipeGroupWhereUniqueInput = Prisma.AtLeast<{
    group_id_recipe_id?: RecipeGroupGroup_idRecipe_idCompoundUniqueInput
    AND?: RecipeGroupWhereInput | RecipeGroupWhereInput[]
    OR?: RecipeGroupWhereInput[]
    NOT?: RecipeGroupWhereInput | RecipeGroupWhereInput[]
    group_id?: UuidFilter<"RecipeGroup"> | string
    recipe_id?: UuidFilter<"RecipeGroup"> | string
    shared_by?: UuidFilter<"RecipeGroup"> | string
    can_comment?: BoolFilter<"RecipeGroup"> | boolean
    shared_at?: DateTimeFilter<"RecipeGroup"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "group_id_recipe_id">

  export type RecipeGroupOrderByWithAggregationInput = {
    group_id?: SortOrder
    recipe_id?: SortOrder
    shared_by?: SortOrder
    can_comment?: SortOrder
    shared_at?: SortOrder
    _count?: RecipeGroupCountOrderByAggregateInput
    _max?: RecipeGroupMaxOrderByAggregateInput
    _min?: RecipeGroupMinOrderByAggregateInput
  }

  export type RecipeGroupScalarWhereWithAggregatesInput = {
    AND?: RecipeGroupScalarWhereWithAggregatesInput | RecipeGroupScalarWhereWithAggregatesInput[]
    OR?: RecipeGroupScalarWhereWithAggregatesInput[]
    NOT?: RecipeGroupScalarWhereWithAggregatesInput | RecipeGroupScalarWhereWithAggregatesInput[]
    group_id?: UuidWithAggregatesFilter<"RecipeGroup"> | string
    recipe_id?: UuidWithAggregatesFilter<"RecipeGroup"> | string
    shared_by?: UuidWithAggregatesFilter<"RecipeGroup"> | string
    can_comment?: BoolWithAggregatesFilter<"RecipeGroup"> | boolean
    shared_at?: DateTimeWithAggregatesFilter<"RecipeGroup"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    created_at?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    userGroups?: UserGroupCreateNestedManyWithoutUserInput
    recipes?: RecipeCreateNestedManyWithoutAuthorInput
    shoppingLists?: ShoppingListCreateNestedManyWithoutUserInput
    sharedRecipes?: RecipeGroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    created_at?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    userGroups?: UserGroupUncheckedCreateNestedManyWithoutUserInput
    recipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput
    shoppingLists?: ShoppingListUncheckedCreateNestedManyWithoutUserInput
    sharedRecipes?: RecipeGroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    userGroups?: UserGroupUpdateManyWithoutUserNestedInput
    recipes?: RecipeUpdateManyWithoutAuthorNestedInput
    shoppingLists?: ShoppingListUpdateManyWithoutUserNestedInput
    sharedRecipes?: RecipeGroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    userGroups?: UserGroupUncheckedUpdateManyWithoutUserNestedInput
    recipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput
    shoppingLists?: ShoppingListUncheckedUpdateManyWithoutUserNestedInput
    sharedRecipes?: RecipeGroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: $Enums.RoleName
    description?: string | null
    userGroups?: UserGroupCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: $Enums.RoleName
    description?: string | null
    userGroups?: UserGroupUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userGroups?: UserGroupUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userGroups?: UserGroupUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: $Enums.RoleName
    description?: string | null
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    description?: string | null
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    userGroups?: UserGroupCreateNestedManyWithoutGroupInput
    recipeGroups?: RecipeGroupCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    owner_id: string
    name: string
    description?: string | null
    userGroups?: UserGroupUncheckedCreateNestedManyWithoutGroupInput
    recipeGroups?: RecipeGroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    userGroups?: UserGroupUpdateManyWithoutGroupNestedInput
    recipeGroups?: RecipeGroupUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userGroups?: UserGroupUncheckedUpdateManyWithoutGroupNestedInput
    recipeGroups?: RecipeGroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    owner_id: string
    name: string
    description?: string | null
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserGroupCreateInput = {
    is_owner?: boolean
    joined_at?: Date | string
    user: UserCreateNestedOneWithoutUserGroupsInput
    role: RoleCreateNestedOneWithoutUserGroupsInput
    group: GroupCreateNestedOneWithoutUserGroupsInput
  }

  export type UserGroupUncheckedCreateInput = {
    user_id: string
    role_id: string
    group_id: string
    is_owner?: boolean
    joined_at?: Date | string
  }

  export type UserGroupUpdateInput = {
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserGroupsNestedInput
    role?: RoleUpdateOneRequiredWithoutUserGroupsNestedInput
    group?: GroupUpdateOneRequiredWithoutUserGroupsNestedInput
  }

  export type UserGroupUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGroupCreateManyInput = {
    user_id: string
    role_id: string
    group_id: string
    is_owner?: boolean
    joined_at?: Date | string
  }

  export type UserGroupUpdateManyMutationInput = {
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGroupUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateInput = {
    id?: string
    name: string
    abbreviation: string
    unit_type: $Enums.UnitType
    ingredients?: IngredientCreateNestedManyWithoutUnitInput
    shoppingItems?: ShoppingItemCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    id?: string
    name: string
    abbreviation: string
    unit_type: $Enums.UnitType
    ingredients?: IngredientUncheckedCreateNestedManyWithoutUnitInput
    shoppingItems?: ShoppingItemUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    unit_type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    ingredients?: IngredientUpdateManyWithoutUnitNestedInput
    shoppingItems?: ShoppingItemUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    unit_type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    ingredients?: IngredientUncheckedUpdateManyWithoutUnitNestedInput
    shoppingItems?: ShoppingItemUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id?: string
    name: string
    abbreviation: string
    unit_type: $Enums.UnitType
  }

  export type UnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    unit_type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    unit_type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
  }

  export type RecipeCreateInput = {
    id?: string
    title: string
    description?: string | null
    time_required_min?: number | null
    difficulty?: string | null
    servings?: number | null
    is_public?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    author: UserCreateNestedOneWithoutRecipesInput
    ingredients?: IngredientCreateNestedManyWithoutRecipeInput
    steps?: CookingStepCreateNestedManyWithoutRecipeInput
    images?: RecipeImageCreateNestedManyWithoutRecipeInput
    tags?: RecipeTagCreateNestedManyWithoutRecipeInput
    groups?: RecipeGroupCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: string
    author_id: string
    title: string
    description?: string | null
    time_required_min?: number | null
    difficulty?: string | null
    servings?: number | null
    is_public?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingredients?: IngredientUncheckedCreateNestedManyWithoutRecipeInput
    steps?: CookingStepUncheckedCreateNestedManyWithoutRecipeInput
    images?: RecipeImageUncheckedCreateNestedManyWithoutRecipeInput
    tags?: RecipeTagUncheckedCreateNestedManyWithoutRecipeInput
    groups?: RecipeGroupUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_required_min?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: IngredientUpdateManyWithoutRecipeNestedInput
    steps?: CookingStepUpdateManyWithoutRecipeNestedInput
    images?: RecipeImageUpdateManyWithoutRecipeNestedInput
    tags?: RecipeTagUpdateManyWithoutRecipeNestedInput
    groups?: RecipeGroupUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_required_min?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: CookingStepUncheckedUpdateManyWithoutRecipeNestedInput
    images?: RecipeImageUncheckedUpdateManyWithoutRecipeNestedInput
    tags?: RecipeTagUncheckedUpdateManyWithoutRecipeNestedInput
    groups?: RecipeGroupUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: string
    author_id: string
    title: string
    description?: string | null
    time_required_min?: number | null
    difficulty?: string | null
    servings?: number | null
    is_public?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_required_min?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_required_min?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientCreateInput = {
    id?: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    calories?: Decimal | DecimalJsLike | number | string | null
    protein_g?: Decimal | DecimalJsLike | number | string | null
    carbs_g?: Decimal | DecimalJsLike | number | string | null
    fat_g?: Decimal | DecimalJsLike | number | string | null
    sort_order?: number
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
    unit: UnitCreateNestedOneWithoutIngredientsInput
    shoppingItems?: ShoppingItemCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: string
    recipe_id: string
    unit_id: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    calories?: Decimal | DecimalJsLike | number | string | null
    protein_g?: Decimal | DecimalJsLike | number | string | null
    carbs_g?: Decimal | DecimalJsLike | number | string | null
    fat_g?: Decimal | DecimalJsLike | number | string | null
    sort_order?: number
    shoppingItems?: ShoppingItemUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calories?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
    unit?: UnitUpdateOneRequiredWithoutIngredientsNestedInput
    shoppingItems?: ShoppingItemUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calories?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    shoppingItems?: ShoppingItemUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientCreateManyInput = {
    id?: string
    recipe_id: string
    unit_id: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    calories?: Decimal | DecimalJsLike | number | string | null
    protein_g?: Decimal | DecimalJsLike | number | string | null
    carbs_g?: Decimal | DecimalJsLike | number | string | null
    fat_g?: Decimal | DecimalJsLike | number | string | null
    sort_order?: number
  }

  export type IngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calories?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calories?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type CookingStepCreateInput = {
    id?: string
    step_number: number
    instruction: string
    duration_min?: number | null
    recipe: RecipeCreateNestedOneWithoutStepsInput
  }

  export type CookingStepUncheckedCreateInput = {
    id?: string
    recipe_id: string
    step_number: number
    instruction: string
    duration_min?: number | null
  }

  export type CookingStepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    step_number?: IntFieldUpdateOperationsInput | number
    instruction?: StringFieldUpdateOperationsInput | string
    duration_min?: NullableIntFieldUpdateOperationsInput | number | null
    recipe?: RecipeUpdateOneRequiredWithoutStepsNestedInput
  }

  export type CookingStepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    step_number?: IntFieldUpdateOperationsInput | number
    instruction?: StringFieldUpdateOperationsInput | string
    duration_min?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CookingStepCreateManyInput = {
    id?: string
    recipe_id: string
    step_number: number
    instruction: string
    duration_min?: number | null
  }

  export type CookingStepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    step_number?: IntFieldUpdateOperationsInput | number
    instruction?: StringFieldUpdateOperationsInput | string
    duration_min?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CookingStepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    step_number?: IntFieldUpdateOperationsInput | number
    instruction?: StringFieldUpdateOperationsInput | string
    duration_min?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TagCreateInput = {
    id?: string
    name: string
    recipes?: RecipeTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    recipes?: RecipeTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeTagCreateInput = {
    recipe: RecipeCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutRecipesInput
  }

  export type RecipeTagUncheckedCreateInput = {
    recipe_id: string
    tag_id: string
  }

  export type RecipeTagUpdateInput = {
    recipe?: RecipeUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type RecipeTagUncheckedUpdateInput = {
    recipe_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeTagCreateManyInput = {
    recipe_id: string
    tag_id: string
  }

  export type RecipeTagUpdateManyMutationInput = {

  }

  export type RecipeTagUncheckedUpdateManyInput = {
    recipe_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeImageCreateInput = {
    id?: string
    storage_url: string
    provider: string
    storage_key: string
    is_primary?: boolean
    mime_type: string
    uploaded_at?: Date | string
    recipe: RecipeCreateNestedOneWithoutImagesInput
  }

  export type RecipeImageUncheckedCreateInput = {
    id?: string
    recipe_id: string
    storage_url: string
    provider: string
    storage_key: string
    is_primary?: boolean
    mime_type: string
    uploaded_at?: Date | string
  }

  export type RecipeImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    storage_key?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    mime_type?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneRequiredWithoutImagesNestedInput
  }

  export type RecipeImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    storage_key?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    mime_type?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeImageCreateManyInput = {
    id?: string
    recipe_id: string
    storage_url: string
    provider: string
    storage_key: string
    is_primary?: boolean
    mime_type: string
    uploaded_at?: Date | string
  }

  export type RecipeImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    storage_key?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    mime_type?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    storage_key?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    mime_type?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingListCreateInput = {
    id?: string
    name: string
    is_complete?: boolean
    completed_at?: Date | string | null
    user: UserCreateNestedOneWithoutShoppingListsInput
    items?: ShoppingItemCreateNestedManyWithoutListInput
  }

  export type ShoppingListUncheckedCreateInput = {
    id?: string
    user_id: string
    name: string
    is_complete?: boolean
    completed_at?: Date | string | null
    items?: ShoppingItemUncheckedCreateNestedManyWithoutListInput
  }

  export type ShoppingListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutShoppingListsNestedInput
    items?: ShoppingItemUpdateManyWithoutListNestedInput
  }

  export type ShoppingListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: ShoppingItemUncheckedUpdateManyWithoutListNestedInput
  }

  export type ShoppingListCreateManyInput = {
    id?: string
    user_id: string
    name: string
    is_complete?: boolean
    completed_at?: Date | string | null
  }

  export type ShoppingListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShoppingListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShoppingItemCreateInput = {
    id?: string
    custom_name?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    is_checked?: boolean
    list: ShoppingListCreateNestedOneWithoutItemsInput
    ingredient?: IngredientCreateNestedOneWithoutShoppingItemsInput
    unit: UnitCreateNestedOneWithoutShoppingItemsInput
  }

  export type ShoppingItemUncheckedCreateInput = {
    id?: string
    list_id: string
    ingredient_id?: string | null
    unit_id: string
    custom_name?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    is_checked?: boolean
  }

  export type ShoppingItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    custom_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_checked?: BoolFieldUpdateOperationsInput | boolean
    list?: ShoppingListUpdateOneRequiredWithoutItemsNestedInput
    ingredient?: IngredientUpdateOneWithoutShoppingItemsNestedInput
    unit?: UnitUpdateOneRequiredWithoutShoppingItemsNestedInput
  }

  export type ShoppingItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    list_id?: StringFieldUpdateOperationsInput | string
    ingredient_id?: NullableStringFieldUpdateOperationsInput | string | null
    unit_id?: StringFieldUpdateOperationsInput | string
    custom_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_checked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoppingItemCreateManyInput = {
    id?: string
    list_id: string
    ingredient_id?: string | null
    unit_id: string
    custom_name?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    is_checked?: boolean
  }

  export type ShoppingItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    custom_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_checked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoppingItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    list_id?: StringFieldUpdateOperationsInput | string
    ingredient_id?: NullableStringFieldUpdateOperationsInput | string | null
    unit_id?: StringFieldUpdateOperationsInput | string
    custom_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_checked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecipeGroupCreateInput = {
    can_comment?: boolean
    shared_at?: Date | string
    group: GroupCreateNestedOneWithoutRecipeGroupsInput
    recipe: RecipeCreateNestedOneWithoutGroupsInput
    user: UserCreateNestedOneWithoutSharedRecipesInput
  }

  export type RecipeGroupUncheckedCreateInput = {
    group_id: string
    recipe_id: string
    shared_by: string
    can_comment?: boolean
    shared_at?: Date | string
  }

  export type RecipeGroupUpdateInput = {
    can_comment?: BoolFieldUpdateOperationsInput | boolean
    shared_at?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutRecipeGroupsNestedInput
    recipe?: RecipeUpdateOneRequiredWithoutGroupsNestedInput
    user?: UserUpdateOneRequiredWithoutSharedRecipesNestedInput
  }

  export type RecipeGroupUncheckedUpdateInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    shared_by?: StringFieldUpdateOperationsInput | string
    can_comment?: BoolFieldUpdateOperationsInput | boolean
    shared_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeGroupCreateManyInput = {
    group_id: string
    recipe_id: string
    shared_by: string
    can_comment?: boolean
    shared_at?: Date | string
  }

  export type RecipeGroupUpdateManyMutationInput = {
    can_comment?: BoolFieldUpdateOperationsInput | boolean
    shared_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeGroupUncheckedUpdateManyInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    shared_by?: StringFieldUpdateOperationsInput | string
    can_comment?: BoolFieldUpdateOperationsInput | boolean
    shared_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type UserGroupListRelationFilter = {
    every?: UserGroupWhereInput
    some?: UserGroupWhereInput
    none?: UserGroupWhereInput
  }

  export type RecipeListRelationFilter = {
    every?: RecipeWhereInput
    some?: RecipeWhereInput
    none?: RecipeWhereInput
  }

  export type ShoppingListListRelationFilter = {
    every?: ShoppingListWhereInput
    some?: ShoppingListWhereInput
    none?: ShoppingListWhereInput
  }

  export type RecipeGroupListRelationFilter = {
    every?: RecipeGroupWhereInput
    some?: RecipeGroupWhereInput
    none?: RecipeGroupWhereInput
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShoppingListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    created_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type EnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type UserGroupUser_idGroup_idCompoundUniqueInput = {
    user_id: string
    group_id: string
  }

  export type UserGroupCountOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    group_id?: SortOrder
    is_owner?: SortOrder
    joined_at?: SortOrder
  }

  export type UserGroupMaxOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    group_id?: SortOrder
    is_owner?: SortOrder
    joined_at?: SortOrder
  }

  export type UserGroupMinOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    group_id?: SortOrder
    is_owner?: SortOrder
    joined_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUnitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitTypeFilter<$PrismaModel> | $Enums.UnitType
  }

  export type IngredientListRelationFilter = {
    every?: IngredientWhereInput
    some?: IngredientWhereInput
    none?: IngredientWhereInput
  }

  export type ShoppingItemListRelationFilter = {
    every?: ShoppingItemWhereInput
    some?: ShoppingItemWhereInput
    none?: ShoppingItemWhereInput
  }

  export type IngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShoppingItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    unit_type?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    unit_type?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    unit_type?: SortOrder
  }

  export type EnumUnitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitTypeWithAggregatesFilter<$PrismaModel> | $Enums.UnitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitTypeFilter<$PrismaModel>
    _max?: NestedEnumUnitTypeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CookingStepListRelationFilter = {
    every?: CookingStepWhereInput
    some?: CookingStepWhereInput
    none?: CookingStepWhereInput
  }

  export type RecipeImageListRelationFilter = {
    every?: RecipeImageWhereInput
    some?: RecipeImageWhereInput
    none?: RecipeImageWhereInput
  }

  export type RecipeTagListRelationFilter = {
    every?: RecipeTagWhereInput
    some?: RecipeTagWhereInput
    none?: RecipeTagWhereInput
  }

  export type CookingStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    time_required_min?: SortOrder
    difficulty?: SortOrder
    servings?: SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    time_required_min?: SortOrder
    servings?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    time_required_min?: SortOrder
    difficulty?: SortOrder
    servings?: SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    time_required_min?: SortOrder
    difficulty?: SortOrder
    servings?: SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    time_required_min?: SortOrder
    servings?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RecipeScalarRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type UnitScalarRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    unit_id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    calories?: SortOrder
    protein_g?: SortOrder
    carbs_g?: SortOrder
    fat_g?: SortOrder
    sort_order?: SortOrder
  }

  export type IngredientAvgOrderByAggregateInput = {
    quantity?: SortOrder
    calories?: SortOrder
    protein_g?: SortOrder
    carbs_g?: SortOrder
    fat_g?: SortOrder
    sort_order?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    unit_id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    calories?: SortOrder
    protein_g?: SortOrder
    carbs_g?: SortOrder
    fat_g?: SortOrder
    sort_order?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    unit_id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    calories?: SortOrder
    protein_g?: SortOrder
    carbs_g?: SortOrder
    fat_g?: SortOrder
    sort_order?: SortOrder
  }

  export type IngredientSumOrderByAggregateInput = {
    quantity?: SortOrder
    calories?: SortOrder
    protein_g?: SortOrder
    carbs_g?: SortOrder
    fat_g?: SortOrder
    sort_order?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CookingStepCountOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    step_number?: SortOrder
    instruction?: SortOrder
    duration_min?: SortOrder
  }

  export type CookingStepAvgOrderByAggregateInput = {
    step_number?: SortOrder
    duration_min?: SortOrder
  }

  export type CookingStepMaxOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    step_number?: SortOrder
    instruction?: SortOrder
    duration_min?: SortOrder
  }

  export type CookingStepMinOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    step_number?: SortOrder
    instruction?: SortOrder
    duration_min?: SortOrder
  }

  export type CookingStepSumOrderByAggregateInput = {
    step_number?: SortOrder
    duration_min?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type RecipeTagRecipe_idTag_idCompoundUniqueInput = {
    recipe_id: string
    tag_id: string
  }

  export type RecipeTagCountOrderByAggregateInput = {
    recipe_id?: SortOrder
    tag_id?: SortOrder
  }

  export type RecipeTagMaxOrderByAggregateInput = {
    recipe_id?: SortOrder
    tag_id?: SortOrder
  }

  export type RecipeTagMinOrderByAggregateInput = {
    recipe_id?: SortOrder
    tag_id?: SortOrder
  }

  export type RecipeImageCountOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    storage_url?: SortOrder
    provider?: SortOrder
    storage_key?: SortOrder
    is_primary?: SortOrder
    mime_type?: SortOrder
    uploaded_at?: SortOrder
  }

  export type RecipeImageMaxOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    storage_url?: SortOrder
    provider?: SortOrder
    storage_key?: SortOrder
    is_primary?: SortOrder
    mime_type?: SortOrder
    uploaded_at?: SortOrder
  }

  export type RecipeImageMinOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    storage_url?: SortOrder
    provider?: SortOrder
    storage_key?: SortOrder
    is_primary?: SortOrder
    mime_type?: SortOrder
    uploaded_at?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ShoppingListCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    is_complete?: SortOrder
    completed_at?: SortOrder
  }

  export type ShoppingListMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    is_complete?: SortOrder
    completed_at?: SortOrder
  }

  export type ShoppingListMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    is_complete?: SortOrder
    completed_at?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type ShoppingListScalarRelationFilter = {
    is?: ShoppingListWhereInput
    isNot?: ShoppingListWhereInput
  }

  export type IngredientNullableScalarRelationFilter = {
    is?: IngredientWhereInput | null
    isNot?: IngredientWhereInput | null
  }

  export type ShoppingItemCountOrderByAggregateInput = {
    id?: SortOrder
    list_id?: SortOrder
    ingredient_id?: SortOrder
    unit_id?: SortOrder
    custom_name?: SortOrder
    quantity?: SortOrder
    is_checked?: SortOrder
  }

  export type ShoppingItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ShoppingItemMaxOrderByAggregateInput = {
    id?: SortOrder
    list_id?: SortOrder
    ingredient_id?: SortOrder
    unit_id?: SortOrder
    custom_name?: SortOrder
    quantity?: SortOrder
    is_checked?: SortOrder
  }

  export type ShoppingItemMinOrderByAggregateInput = {
    id?: SortOrder
    list_id?: SortOrder
    ingredient_id?: SortOrder
    unit_id?: SortOrder
    custom_name?: SortOrder
    quantity?: SortOrder
    is_checked?: SortOrder
  }

  export type ShoppingItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RecipeGroupGroup_idRecipe_idCompoundUniqueInput = {
    group_id: string
    recipe_id: string
  }

  export type RecipeGroupCountOrderByAggregateInput = {
    group_id?: SortOrder
    recipe_id?: SortOrder
    shared_by?: SortOrder
    can_comment?: SortOrder
    shared_at?: SortOrder
  }

  export type RecipeGroupMaxOrderByAggregateInput = {
    group_id?: SortOrder
    recipe_id?: SortOrder
    shared_by?: SortOrder
    can_comment?: SortOrder
    shared_at?: SortOrder
  }

  export type RecipeGroupMinOrderByAggregateInput = {
    group_id?: SortOrder
    recipe_id?: SortOrder
    shared_by?: SortOrder
    can_comment?: SortOrder
    shared_at?: SortOrder
  }

  export type GroupCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type UserGroupCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGroupCreateWithoutUserInput, UserGroupUncheckedCreateWithoutUserInput> | UserGroupCreateWithoutUserInput[] | UserGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGroupCreateOrConnectWithoutUserInput | UserGroupCreateOrConnectWithoutUserInput[]
    createMany?: UserGroupCreateManyUserInputEnvelope
    connect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
  }

  export type RecipeCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput> | RecipeCreateWithoutAuthorInput[] | RecipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput | RecipeCreateOrConnectWithoutAuthorInput[]
    createMany?: RecipeCreateManyAuthorInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type ShoppingListCreateNestedManyWithoutUserInput = {
    create?: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput> | ShoppingListCreateWithoutUserInput[] | ShoppingListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingListCreateOrConnectWithoutUserInput | ShoppingListCreateOrConnectWithoutUserInput[]
    createMany?: ShoppingListCreateManyUserInputEnvelope
    connect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
  }

  export type RecipeGroupCreateNestedManyWithoutUserInput = {
    create?: XOR<RecipeGroupCreateWithoutUserInput, RecipeGroupUncheckedCreateWithoutUserInput> | RecipeGroupCreateWithoutUserInput[] | RecipeGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeGroupCreateOrConnectWithoutUserInput | RecipeGroupCreateOrConnectWithoutUserInput[]
    createMany?: RecipeGroupCreateManyUserInputEnvelope
    connect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type UserGroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGroupCreateWithoutUserInput, UserGroupUncheckedCreateWithoutUserInput> | UserGroupCreateWithoutUserInput[] | UserGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGroupCreateOrConnectWithoutUserInput | UserGroupCreateOrConnectWithoutUserInput[]
    createMany?: UserGroupCreateManyUserInputEnvelope
    connect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
  }

  export type RecipeUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput> | RecipeCreateWithoutAuthorInput[] | RecipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput | RecipeCreateOrConnectWithoutAuthorInput[]
    createMany?: RecipeCreateManyAuthorInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type ShoppingListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput> | ShoppingListCreateWithoutUserInput[] | ShoppingListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingListCreateOrConnectWithoutUserInput | ShoppingListCreateOrConnectWithoutUserInput[]
    createMany?: ShoppingListCreateManyUserInputEnvelope
    connect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
  }

  export type RecipeGroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecipeGroupCreateWithoutUserInput, RecipeGroupUncheckedCreateWithoutUserInput> | RecipeGroupCreateWithoutUserInput[] | RecipeGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeGroupCreateOrConnectWithoutUserInput | RecipeGroupCreateOrConnectWithoutUserInput[]
    createMany?: RecipeGroupCreateManyUserInputEnvelope
    connect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutOwnerInput | GroupUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutOwnerInput | GroupUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutOwnerInput | GroupUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type UserGroupUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGroupCreateWithoutUserInput, UserGroupUncheckedCreateWithoutUserInput> | UserGroupCreateWithoutUserInput[] | UserGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGroupCreateOrConnectWithoutUserInput | UserGroupCreateOrConnectWithoutUserInput[]
    upsert?: UserGroupUpsertWithWhereUniqueWithoutUserInput | UserGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGroupCreateManyUserInputEnvelope
    set?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    disconnect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    delete?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    connect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    update?: UserGroupUpdateWithWhereUniqueWithoutUserInput | UserGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGroupUpdateManyWithWhereWithoutUserInput | UserGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGroupScalarWhereInput | UserGroupScalarWhereInput[]
  }

  export type RecipeUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput> | RecipeCreateWithoutAuthorInput[] | RecipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput | RecipeCreateOrConnectWithoutAuthorInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutAuthorInput | RecipeUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RecipeCreateManyAuthorInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutAuthorInput | RecipeUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutAuthorInput | RecipeUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type ShoppingListUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput> | ShoppingListCreateWithoutUserInput[] | ShoppingListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingListCreateOrConnectWithoutUserInput | ShoppingListCreateOrConnectWithoutUserInput[]
    upsert?: ShoppingListUpsertWithWhereUniqueWithoutUserInput | ShoppingListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShoppingListCreateManyUserInputEnvelope
    set?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    disconnect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    delete?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    connect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    update?: ShoppingListUpdateWithWhereUniqueWithoutUserInput | ShoppingListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShoppingListUpdateManyWithWhereWithoutUserInput | ShoppingListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShoppingListScalarWhereInput | ShoppingListScalarWhereInput[]
  }

  export type RecipeGroupUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecipeGroupCreateWithoutUserInput, RecipeGroupUncheckedCreateWithoutUserInput> | RecipeGroupCreateWithoutUserInput[] | RecipeGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeGroupCreateOrConnectWithoutUserInput | RecipeGroupCreateOrConnectWithoutUserInput[]
    upsert?: RecipeGroupUpsertWithWhereUniqueWithoutUserInput | RecipeGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecipeGroupCreateManyUserInputEnvelope
    set?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    disconnect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    delete?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    connect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    update?: RecipeGroupUpdateWithWhereUniqueWithoutUserInput | RecipeGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecipeGroupUpdateManyWithWhereWithoutUserInput | RecipeGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecipeGroupScalarWhereInput | RecipeGroupScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutOwnerInput | GroupUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutOwnerInput | GroupUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutOwnerInput | GroupUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type UserGroupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGroupCreateWithoutUserInput, UserGroupUncheckedCreateWithoutUserInput> | UserGroupCreateWithoutUserInput[] | UserGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGroupCreateOrConnectWithoutUserInput | UserGroupCreateOrConnectWithoutUserInput[]
    upsert?: UserGroupUpsertWithWhereUniqueWithoutUserInput | UserGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGroupCreateManyUserInputEnvelope
    set?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    disconnect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    delete?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    connect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    update?: UserGroupUpdateWithWhereUniqueWithoutUserInput | UserGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGroupUpdateManyWithWhereWithoutUserInput | UserGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGroupScalarWhereInput | UserGroupScalarWhereInput[]
  }

  export type RecipeUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput> | RecipeCreateWithoutAuthorInput[] | RecipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput | RecipeCreateOrConnectWithoutAuthorInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutAuthorInput | RecipeUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RecipeCreateManyAuthorInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutAuthorInput | RecipeUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutAuthorInput | RecipeUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type ShoppingListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput> | ShoppingListCreateWithoutUserInput[] | ShoppingListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingListCreateOrConnectWithoutUserInput | ShoppingListCreateOrConnectWithoutUserInput[]
    upsert?: ShoppingListUpsertWithWhereUniqueWithoutUserInput | ShoppingListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShoppingListCreateManyUserInputEnvelope
    set?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    disconnect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    delete?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    connect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    update?: ShoppingListUpdateWithWhereUniqueWithoutUserInput | ShoppingListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShoppingListUpdateManyWithWhereWithoutUserInput | ShoppingListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShoppingListScalarWhereInput | ShoppingListScalarWhereInput[]
  }

  export type RecipeGroupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecipeGroupCreateWithoutUserInput, RecipeGroupUncheckedCreateWithoutUserInput> | RecipeGroupCreateWithoutUserInput[] | RecipeGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeGroupCreateOrConnectWithoutUserInput | RecipeGroupCreateOrConnectWithoutUserInput[]
    upsert?: RecipeGroupUpsertWithWhereUniqueWithoutUserInput | RecipeGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecipeGroupCreateManyUserInputEnvelope
    set?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    disconnect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    delete?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    connect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    update?: RecipeGroupUpdateWithWhereUniqueWithoutUserInput | RecipeGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecipeGroupUpdateManyWithWhereWithoutUserInput | RecipeGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecipeGroupScalarWhereInput | RecipeGroupScalarWhereInput[]
  }

  export type UserGroupCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserGroupCreateWithoutRoleInput, UserGroupUncheckedCreateWithoutRoleInput> | UserGroupCreateWithoutRoleInput[] | UserGroupUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserGroupCreateOrConnectWithoutRoleInput | UserGroupCreateOrConnectWithoutRoleInput[]
    createMany?: UserGroupCreateManyRoleInputEnvelope
    connect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
  }

  export type UserGroupUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserGroupCreateWithoutRoleInput, UserGroupUncheckedCreateWithoutRoleInput> | UserGroupCreateWithoutRoleInput[] | UserGroupUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserGroupCreateOrConnectWithoutRoleInput | UserGroupCreateOrConnectWithoutRoleInput[]
    createMany?: UserGroupCreateManyRoleInputEnvelope
    connect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
  }

  export type EnumRoleNameFieldUpdateOperationsInput = {
    set?: $Enums.RoleName
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserGroupUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserGroupCreateWithoutRoleInput, UserGroupUncheckedCreateWithoutRoleInput> | UserGroupCreateWithoutRoleInput[] | UserGroupUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserGroupCreateOrConnectWithoutRoleInput | UserGroupCreateOrConnectWithoutRoleInput[]
    upsert?: UserGroupUpsertWithWhereUniqueWithoutRoleInput | UserGroupUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserGroupCreateManyRoleInputEnvelope
    set?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    disconnect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    delete?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    connect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    update?: UserGroupUpdateWithWhereUniqueWithoutRoleInput | UserGroupUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserGroupUpdateManyWithWhereWithoutRoleInput | UserGroupUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserGroupScalarWhereInput | UserGroupScalarWhereInput[]
  }

  export type UserGroupUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserGroupCreateWithoutRoleInput, UserGroupUncheckedCreateWithoutRoleInput> | UserGroupCreateWithoutRoleInput[] | UserGroupUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserGroupCreateOrConnectWithoutRoleInput | UserGroupCreateOrConnectWithoutRoleInput[]
    upsert?: UserGroupUpsertWithWhereUniqueWithoutRoleInput | UserGroupUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserGroupCreateManyRoleInputEnvelope
    set?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    disconnect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    delete?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    connect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    update?: UserGroupUpdateWithWhereUniqueWithoutRoleInput | UserGroupUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserGroupUpdateManyWithWhereWithoutRoleInput | UserGroupUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserGroupScalarWhereInput | UserGroupScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedGroupsInput = {
    create?: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type UserGroupCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserGroupCreateWithoutGroupInput, UserGroupUncheckedCreateWithoutGroupInput> | UserGroupCreateWithoutGroupInput[] | UserGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserGroupCreateOrConnectWithoutGroupInput | UserGroupCreateOrConnectWithoutGroupInput[]
    createMany?: UserGroupCreateManyGroupInputEnvelope
    connect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
  }

  export type RecipeGroupCreateNestedManyWithoutGroupInput = {
    create?: XOR<RecipeGroupCreateWithoutGroupInput, RecipeGroupUncheckedCreateWithoutGroupInput> | RecipeGroupCreateWithoutGroupInput[] | RecipeGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: RecipeGroupCreateOrConnectWithoutGroupInput | RecipeGroupCreateOrConnectWithoutGroupInput[]
    createMany?: RecipeGroupCreateManyGroupInputEnvelope
    connect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
  }

  export type UserGroupUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserGroupCreateWithoutGroupInput, UserGroupUncheckedCreateWithoutGroupInput> | UserGroupCreateWithoutGroupInput[] | UserGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserGroupCreateOrConnectWithoutGroupInput | UserGroupCreateOrConnectWithoutGroupInput[]
    createMany?: UserGroupCreateManyGroupInputEnvelope
    connect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
  }

  export type RecipeGroupUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<RecipeGroupCreateWithoutGroupInput, RecipeGroupUncheckedCreateWithoutGroupInput> | RecipeGroupCreateWithoutGroupInput[] | RecipeGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: RecipeGroupCreateOrConnectWithoutGroupInput | RecipeGroupCreateOrConnectWithoutGroupInput[]
    createMany?: RecipeGroupCreateManyGroupInputEnvelope
    connect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedGroupsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedGroupsInput
    upsert?: UserUpsertWithoutOwnedGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedGroupsInput, UserUpdateWithoutOwnedGroupsInput>, UserUncheckedUpdateWithoutOwnedGroupsInput>
  }

  export type UserGroupUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserGroupCreateWithoutGroupInput, UserGroupUncheckedCreateWithoutGroupInput> | UserGroupCreateWithoutGroupInput[] | UserGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserGroupCreateOrConnectWithoutGroupInput | UserGroupCreateOrConnectWithoutGroupInput[]
    upsert?: UserGroupUpsertWithWhereUniqueWithoutGroupInput | UserGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserGroupCreateManyGroupInputEnvelope
    set?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    disconnect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    delete?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    connect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    update?: UserGroupUpdateWithWhereUniqueWithoutGroupInput | UserGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserGroupUpdateManyWithWhereWithoutGroupInput | UserGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserGroupScalarWhereInput | UserGroupScalarWhereInput[]
  }

  export type RecipeGroupUpdateManyWithoutGroupNestedInput = {
    create?: XOR<RecipeGroupCreateWithoutGroupInput, RecipeGroupUncheckedCreateWithoutGroupInput> | RecipeGroupCreateWithoutGroupInput[] | RecipeGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: RecipeGroupCreateOrConnectWithoutGroupInput | RecipeGroupCreateOrConnectWithoutGroupInput[]
    upsert?: RecipeGroupUpsertWithWhereUniqueWithoutGroupInput | RecipeGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: RecipeGroupCreateManyGroupInputEnvelope
    set?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    disconnect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    delete?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    connect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    update?: RecipeGroupUpdateWithWhereUniqueWithoutGroupInput | RecipeGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: RecipeGroupUpdateManyWithWhereWithoutGroupInput | RecipeGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: RecipeGroupScalarWhereInput | RecipeGroupScalarWhereInput[]
  }

  export type UserGroupUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserGroupCreateWithoutGroupInput, UserGroupUncheckedCreateWithoutGroupInput> | UserGroupCreateWithoutGroupInput[] | UserGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserGroupCreateOrConnectWithoutGroupInput | UserGroupCreateOrConnectWithoutGroupInput[]
    upsert?: UserGroupUpsertWithWhereUniqueWithoutGroupInput | UserGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserGroupCreateManyGroupInputEnvelope
    set?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    disconnect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    delete?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    connect?: UserGroupWhereUniqueInput | UserGroupWhereUniqueInput[]
    update?: UserGroupUpdateWithWhereUniqueWithoutGroupInput | UserGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserGroupUpdateManyWithWhereWithoutGroupInput | UserGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserGroupScalarWhereInput | UserGroupScalarWhereInput[]
  }

  export type RecipeGroupUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<RecipeGroupCreateWithoutGroupInput, RecipeGroupUncheckedCreateWithoutGroupInput> | RecipeGroupCreateWithoutGroupInput[] | RecipeGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: RecipeGroupCreateOrConnectWithoutGroupInput | RecipeGroupCreateOrConnectWithoutGroupInput[]
    upsert?: RecipeGroupUpsertWithWhereUniqueWithoutGroupInput | RecipeGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: RecipeGroupCreateManyGroupInputEnvelope
    set?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    disconnect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    delete?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    connect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    update?: RecipeGroupUpdateWithWhereUniqueWithoutGroupInput | RecipeGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: RecipeGroupUpdateManyWithWhereWithoutGroupInput | RecipeGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: RecipeGroupScalarWhereInput | RecipeGroupScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserGroupsInput = {
    create?: XOR<UserCreateWithoutUserGroupsInput, UserUncheckedCreateWithoutUserGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUserGroupsInput = {
    create?: XOR<RoleCreateWithoutUserGroupsInput, RoleUncheckedCreateWithoutUserGroupsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserGroupsInput
    connect?: RoleWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutUserGroupsInput = {
    create?: XOR<GroupCreateWithoutUserGroupsInput, GroupUncheckedCreateWithoutUserGroupsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUserGroupsInput
    connect?: GroupWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutUserGroupsNestedInput = {
    create?: XOR<UserCreateWithoutUserGroupsInput, UserUncheckedCreateWithoutUserGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGroupsInput
    upsert?: UserUpsertWithoutUserGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserGroupsInput, UserUpdateWithoutUserGroupsInput>, UserUncheckedUpdateWithoutUserGroupsInput>
  }

  export type RoleUpdateOneRequiredWithoutUserGroupsNestedInput = {
    create?: XOR<RoleCreateWithoutUserGroupsInput, RoleUncheckedCreateWithoutUserGroupsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserGroupsInput
    upsert?: RoleUpsertWithoutUserGroupsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserGroupsInput, RoleUpdateWithoutUserGroupsInput>, RoleUncheckedUpdateWithoutUserGroupsInput>
  }

  export type GroupUpdateOneRequiredWithoutUserGroupsNestedInput = {
    create?: XOR<GroupCreateWithoutUserGroupsInput, GroupUncheckedCreateWithoutUserGroupsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUserGroupsInput
    upsert?: GroupUpsertWithoutUserGroupsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutUserGroupsInput, GroupUpdateWithoutUserGroupsInput>, GroupUncheckedUpdateWithoutUserGroupsInput>
  }

  export type IngredientCreateNestedManyWithoutUnitInput = {
    create?: XOR<IngredientCreateWithoutUnitInput, IngredientUncheckedCreateWithoutUnitInput> | IngredientCreateWithoutUnitInput[] | IngredientUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutUnitInput | IngredientCreateOrConnectWithoutUnitInput[]
    createMany?: IngredientCreateManyUnitInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type ShoppingItemCreateNestedManyWithoutUnitInput = {
    create?: XOR<ShoppingItemCreateWithoutUnitInput, ShoppingItemUncheckedCreateWithoutUnitInput> | ShoppingItemCreateWithoutUnitInput[] | ShoppingItemUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ShoppingItemCreateOrConnectWithoutUnitInput | ShoppingItemCreateOrConnectWithoutUnitInput[]
    createMany?: ShoppingItemCreateManyUnitInputEnvelope
    connect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
  }

  export type IngredientUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<IngredientCreateWithoutUnitInput, IngredientUncheckedCreateWithoutUnitInput> | IngredientCreateWithoutUnitInput[] | IngredientUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutUnitInput | IngredientCreateOrConnectWithoutUnitInput[]
    createMany?: IngredientCreateManyUnitInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type ShoppingItemUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<ShoppingItemCreateWithoutUnitInput, ShoppingItemUncheckedCreateWithoutUnitInput> | ShoppingItemCreateWithoutUnitInput[] | ShoppingItemUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ShoppingItemCreateOrConnectWithoutUnitInput | ShoppingItemCreateOrConnectWithoutUnitInput[]
    createMany?: ShoppingItemCreateManyUnitInputEnvelope
    connect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
  }

  export type EnumUnitTypeFieldUpdateOperationsInput = {
    set?: $Enums.UnitType
  }

  export type IngredientUpdateManyWithoutUnitNestedInput = {
    create?: XOR<IngredientCreateWithoutUnitInput, IngredientUncheckedCreateWithoutUnitInput> | IngredientCreateWithoutUnitInput[] | IngredientUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutUnitInput | IngredientCreateOrConnectWithoutUnitInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutUnitInput | IngredientUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: IngredientCreateManyUnitInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutUnitInput | IngredientUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutUnitInput | IngredientUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type ShoppingItemUpdateManyWithoutUnitNestedInput = {
    create?: XOR<ShoppingItemCreateWithoutUnitInput, ShoppingItemUncheckedCreateWithoutUnitInput> | ShoppingItemCreateWithoutUnitInput[] | ShoppingItemUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ShoppingItemCreateOrConnectWithoutUnitInput | ShoppingItemCreateOrConnectWithoutUnitInput[]
    upsert?: ShoppingItemUpsertWithWhereUniqueWithoutUnitInput | ShoppingItemUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: ShoppingItemCreateManyUnitInputEnvelope
    set?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    disconnect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    delete?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    connect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    update?: ShoppingItemUpdateWithWhereUniqueWithoutUnitInput | ShoppingItemUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: ShoppingItemUpdateManyWithWhereWithoutUnitInput | ShoppingItemUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: ShoppingItemScalarWhereInput | ShoppingItemScalarWhereInput[]
  }

  export type IngredientUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<IngredientCreateWithoutUnitInput, IngredientUncheckedCreateWithoutUnitInput> | IngredientCreateWithoutUnitInput[] | IngredientUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutUnitInput | IngredientCreateOrConnectWithoutUnitInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutUnitInput | IngredientUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: IngredientCreateManyUnitInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutUnitInput | IngredientUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutUnitInput | IngredientUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type ShoppingItemUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<ShoppingItemCreateWithoutUnitInput, ShoppingItemUncheckedCreateWithoutUnitInput> | ShoppingItemCreateWithoutUnitInput[] | ShoppingItemUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ShoppingItemCreateOrConnectWithoutUnitInput | ShoppingItemCreateOrConnectWithoutUnitInput[]
    upsert?: ShoppingItemUpsertWithWhereUniqueWithoutUnitInput | ShoppingItemUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: ShoppingItemCreateManyUnitInputEnvelope
    set?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    disconnect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    delete?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    connect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    update?: ShoppingItemUpdateWithWhereUniqueWithoutUnitInput | ShoppingItemUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: ShoppingItemUpdateManyWithWhereWithoutUnitInput | ShoppingItemUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: ShoppingItemScalarWhereInput | ShoppingItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRecipesInput = {
    create?: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput
    connect?: UserWhereUniqueInput
  }

  export type IngredientCreateNestedManyWithoutRecipeInput = {
    create?: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput> | IngredientCreateWithoutRecipeInput[] | IngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeInput | IngredientCreateOrConnectWithoutRecipeInput[]
    createMany?: IngredientCreateManyRecipeInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type CookingStepCreateNestedManyWithoutRecipeInput = {
    create?: XOR<CookingStepCreateWithoutRecipeInput, CookingStepUncheckedCreateWithoutRecipeInput> | CookingStepCreateWithoutRecipeInput[] | CookingStepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: CookingStepCreateOrConnectWithoutRecipeInput | CookingStepCreateOrConnectWithoutRecipeInput[]
    createMany?: CookingStepCreateManyRecipeInputEnvelope
    connect?: CookingStepWhereUniqueInput | CookingStepWhereUniqueInput[]
  }

  export type RecipeImageCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeImageCreateWithoutRecipeInput, RecipeImageUncheckedCreateWithoutRecipeInput> | RecipeImageCreateWithoutRecipeInput[] | RecipeImageUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeImageCreateOrConnectWithoutRecipeInput | RecipeImageCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeImageCreateManyRecipeInputEnvelope
    connect?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
  }

  export type RecipeTagCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeTagCreateWithoutRecipeInput, RecipeTagUncheckedCreateWithoutRecipeInput> | RecipeTagCreateWithoutRecipeInput[] | RecipeTagUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeTagCreateOrConnectWithoutRecipeInput | RecipeTagCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeTagCreateManyRecipeInputEnvelope
    connect?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
  }

  export type RecipeGroupCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeGroupCreateWithoutRecipeInput, RecipeGroupUncheckedCreateWithoutRecipeInput> | RecipeGroupCreateWithoutRecipeInput[] | RecipeGroupUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeGroupCreateOrConnectWithoutRecipeInput | RecipeGroupCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeGroupCreateManyRecipeInputEnvelope
    connect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
  }

  export type IngredientUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput> | IngredientCreateWithoutRecipeInput[] | IngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeInput | IngredientCreateOrConnectWithoutRecipeInput[]
    createMany?: IngredientCreateManyRecipeInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type CookingStepUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<CookingStepCreateWithoutRecipeInput, CookingStepUncheckedCreateWithoutRecipeInput> | CookingStepCreateWithoutRecipeInput[] | CookingStepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: CookingStepCreateOrConnectWithoutRecipeInput | CookingStepCreateOrConnectWithoutRecipeInput[]
    createMany?: CookingStepCreateManyRecipeInputEnvelope
    connect?: CookingStepWhereUniqueInput | CookingStepWhereUniqueInput[]
  }

  export type RecipeImageUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeImageCreateWithoutRecipeInput, RecipeImageUncheckedCreateWithoutRecipeInput> | RecipeImageCreateWithoutRecipeInput[] | RecipeImageUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeImageCreateOrConnectWithoutRecipeInput | RecipeImageCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeImageCreateManyRecipeInputEnvelope
    connect?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
  }

  export type RecipeTagUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeTagCreateWithoutRecipeInput, RecipeTagUncheckedCreateWithoutRecipeInput> | RecipeTagCreateWithoutRecipeInput[] | RecipeTagUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeTagCreateOrConnectWithoutRecipeInput | RecipeTagCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeTagCreateManyRecipeInputEnvelope
    connect?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
  }

  export type RecipeGroupUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeGroupCreateWithoutRecipeInput, RecipeGroupUncheckedCreateWithoutRecipeInput> | RecipeGroupCreateWithoutRecipeInput[] | RecipeGroupUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeGroupCreateOrConnectWithoutRecipeInput | RecipeGroupCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeGroupCreateManyRecipeInputEnvelope
    connect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput
    upsert?: UserUpsertWithoutRecipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecipesInput, UserUpdateWithoutRecipesInput>, UserUncheckedUpdateWithoutRecipesInput>
  }

  export type IngredientUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput> | IngredientCreateWithoutRecipeInput[] | IngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeInput | IngredientCreateOrConnectWithoutRecipeInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutRecipeInput | IngredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: IngredientCreateManyRecipeInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutRecipeInput | IngredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutRecipeInput | IngredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type CookingStepUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<CookingStepCreateWithoutRecipeInput, CookingStepUncheckedCreateWithoutRecipeInput> | CookingStepCreateWithoutRecipeInput[] | CookingStepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: CookingStepCreateOrConnectWithoutRecipeInput | CookingStepCreateOrConnectWithoutRecipeInput[]
    upsert?: CookingStepUpsertWithWhereUniqueWithoutRecipeInput | CookingStepUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: CookingStepCreateManyRecipeInputEnvelope
    set?: CookingStepWhereUniqueInput | CookingStepWhereUniqueInput[]
    disconnect?: CookingStepWhereUniqueInput | CookingStepWhereUniqueInput[]
    delete?: CookingStepWhereUniqueInput | CookingStepWhereUniqueInput[]
    connect?: CookingStepWhereUniqueInput | CookingStepWhereUniqueInput[]
    update?: CookingStepUpdateWithWhereUniqueWithoutRecipeInput | CookingStepUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: CookingStepUpdateManyWithWhereWithoutRecipeInput | CookingStepUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: CookingStepScalarWhereInput | CookingStepScalarWhereInput[]
  }

  export type RecipeImageUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeImageCreateWithoutRecipeInput, RecipeImageUncheckedCreateWithoutRecipeInput> | RecipeImageCreateWithoutRecipeInput[] | RecipeImageUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeImageCreateOrConnectWithoutRecipeInput | RecipeImageCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeImageUpsertWithWhereUniqueWithoutRecipeInput | RecipeImageUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeImageCreateManyRecipeInputEnvelope
    set?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
    disconnect?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
    delete?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
    connect?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
    update?: RecipeImageUpdateWithWhereUniqueWithoutRecipeInput | RecipeImageUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeImageUpdateManyWithWhereWithoutRecipeInput | RecipeImageUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeImageScalarWhereInput | RecipeImageScalarWhereInput[]
  }

  export type RecipeTagUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeTagCreateWithoutRecipeInput, RecipeTagUncheckedCreateWithoutRecipeInput> | RecipeTagCreateWithoutRecipeInput[] | RecipeTagUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeTagCreateOrConnectWithoutRecipeInput | RecipeTagCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeTagUpsertWithWhereUniqueWithoutRecipeInput | RecipeTagUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeTagCreateManyRecipeInputEnvelope
    set?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
    disconnect?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
    delete?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
    connect?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
    update?: RecipeTagUpdateWithWhereUniqueWithoutRecipeInput | RecipeTagUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeTagUpdateManyWithWhereWithoutRecipeInput | RecipeTagUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeTagScalarWhereInput | RecipeTagScalarWhereInput[]
  }

  export type RecipeGroupUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeGroupCreateWithoutRecipeInput, RecipeGroupUncheckedCreateWithoutRecipeInput> | RecipeGroupCreateWithoutRecipeInput[] | RecipeGroupUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeGroupCreateOrConnectWithoutRecipeInput | RecipeGroupCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeGroupUpsertWithWhereUniqueWithoutRecipeInput | RecipeGroupUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeGroupCreateManyRecipeInputEnvelope
    set?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    disconnect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    delete?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    connect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    update?: RecipeGroupUpdateWithWhereUniqueWithoutRecipeInput | RecipeGroupUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeGroupUpdateManyWithWhereWithoutRecipeInput | RecipeGroupUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeGroupScalarWhereInput | RecipeGroupScalarWhereInput[]
  }

  export type IngredientUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput> | IngredientCreateWithoutRecipeInput[] | IngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeInput | IngredientCreateOrConnectWithoutRecipeInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutRecipeInput | IngredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: IngredientCreateManyRecipeInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutRecipeInput | IngredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutRecipeInput | IngredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type CookingStepUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<CookingStepCreateWithoutRecipeInput, CookingStepUncheckedCreateWithoutRecipeInput> | CookingStepCreateWithoutRecipeInput[] | CookingStepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: CookingStepCreateOrConnectWithoutRecipeInput | CookingStepCreateOrConnectWithoutRecipeInput[]
    upsert?: CookingStepUpsertWithWhereUniqueWithoutRecipeInput | CookingStepUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: CookingStepCreateManyRecipeInputEnvelope
    set?: CookingStepWhereUniqueInput | CookingStepWhereUniqueInput[]
    disconnect?: CookingStepWhereUniqueInput | CookingStepWhereUniqueInput[]
    delete?: CookingStepWhereUniqueInput | CookingStepWhereUniqueInput[]
    connect?: CookingStepWhereUniqueInput | CookingStepWhereUniqueInput[]
    update?: CookingStepUpdateWithWhereUniqueWithoutRecipeInput | CookingStepUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: CookingStepUpdateManyWithWhereWithoutRecipeInput | CookingStepUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: CookingStepScalarWhereInput | CookingStepScalarWhereInput[]
  }

  export type RecipeImageUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeImageCreateWithoutRecipeInput, RecipeImageUncheckedCreateWithoutRecipeInput> | RecipeImageCreateWithoutRecipeInput[] | RecipeImageUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeImageCreateOrConnectWithoutRecipeInput | RecipeImageCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeImageUpsertWithWhereUniqueWithoutRecipeInput | RecipeImageUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeImageCreateManyRecipeInputEnvelope
    set?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
    disconnect?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
    delete?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
    connect?: RecipeImageWhereUniqueInput | RecipeImageWhereUniqueInput[]
    update?: RecipeImageUpdateWithWhereUniqueWithoutRecipeInput | RecipeImageUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeImageUpdateManyWithWhereWithoutRecipeInput | RecipeImageUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeImageScalarWhereInput | RecipeImageScalarWhereInput[]
  }

  export type RecipeTagUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeTagCreateWithoutRecipeInput, RecipeTagUncheckedCreateWithoutRecipeInput> | RecipeTagCreateWithoutRecipeInput[] | RecipeTagUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeTagCreateOrConnectWithoutRecipeInput | RecipeTagCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeTagUpsertWithWhereUniqueWithoutRecipeInput | RecipeTagUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeTagCreateManyRecipeInputEnvelope
    set?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
    disconnect?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
    delete?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
    connect?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
    update?: RecipeTagUpdateWithWhereUniqueWithoutRecipeInput | RecipeTagUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeTagUpdateManyWithWhereWithoutRecipeInput | RecipeTagUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeTagScalarWhereInput | RecipeTagScalarWhereInput[]
  }

  export type RecipeGroupUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeGroupCreateWithoutRecipeInput, RecipeGroupUncheckedCreateWithoutRecipeInput> | RecipeGroupCreateWithoutRecipeInput[] | RecipeGroupUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeGroupCreateOrConnectWithoutRecipeInput | RecipeGroupCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeGroupUpsertWithWhereUniqueWithoutRecipeInput | RecipeGroupUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeGroupCreateManyRecipeInputEnvelope
    set?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    disconnect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    delete?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    connect?: RecipeGroupWhereUniqueInput | RecipeGroupWhereUniqueInput[]
    update?: RecipeGroupUpdateWithWhereUniqueWithoutRecipeInput | RecipeGroupUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeGroupUpdateManyWithWhereWithoutRecipeInput | RecipeGroupUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeGroupScalarWhereInput | RecipeGroupScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<UnitCreateWithoutIngredientsInput, UnitUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutIngredientsInput
    connect?: UnitWhereUniqueInput
  }

  export type ShoppingItemCreateNestedManyWithoutIngredientInput = {
    create?: XOR<ShoppingItemCreateWithoutIngredientInput, ShoppingItemUncheckedCreateWithoutIngredientInput> | ShoppingItemCreateWithoutIngredientInput[] | ShoppingItemUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: ShoppingItemCreateOrConnectWithoutIngredientInput | ShoppingItemCreateOrConnectWithoutIngredientInput[]
    createMany?: ShoppingItemCreateManyIngredientInputEnvelope
    connect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
  }

  export type ShoppingItemUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<ShoppingItemCreateWithoutIngredientInput, ShoppingItemUncheckedCreateWithoutIngredientInput> | ShoppingItemCreateWithoutIngredientInput[] | ShoppingItemUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: ShoppingItemCreateOrConnectWithoutIngredientInput | ShoppingItemCreateOrConnectWithoutIngredientInput[]
    createMany?: ShoppingItemCreateManyIngredientInputEnvelope
    connect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecipeUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    upsert?: RecipeUpsertWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutIngredientsInput, RecipeUpdateWithoutIngredientsInput>, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type UnitUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<UnitCreateWithoutIngredientsInput, UnitUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutIngredientsInput
    upsert?: UnitUpsertWithoutIngredientsInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutIngredientsInput, UnitUpdateWithoutIngredientsInput>, UnitUncheckedUpdateWithoutIngredientsInput>
  }

  export type ShoppingItemUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<ShoppingItemCreateWithoutIngredientInput, ShoppingItemUncheckedCreateWithoutIngredientInput> | ShoppingItemCreateWithoutIngredientInput[] | ShoppingItemUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: ShoppingItemCreateOrConnectWithoutIngredientInput | ShoppingItemCreateOrConnectWithoutIngredientInput[]
    upsert?: ShoppingItemUpsertWithWhereUniqueWithoutIngredientInput | ShoppingItemUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: ShoppingItemCreateManyIngredientInputEnvelope
    set?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    disconnect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    delete?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    connect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    update?: ShoppingItemUpdateWithWhereUniqueWithoutIngredientInput | ShoppingItemUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: ShoppingItemUpdateManyWithWhereWithoutIngredientInput | ShoppingItemUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: ShoppingItemScalarWhereInput | ShoppingItemScalarWhereInput[]
  }

  export type ShoppingItemUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<ShoppingItemCreateWithoutIngredientInput, ShoppingItemUncheckedCreateWithoutIngredientInput> | ShoppingItemCreateWithoutIngredientInput[] | ShoppingItemUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: ShoppingItemCreateOrConnectWithoutIngredientInput | ShoppingItemCreateOrConnectWithoutIngredientInput[]
    upsert?: ShoppingItemUpsertWithWhereUniqueWithoutIngredientInput | ShoppingItemUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: ShoppingItemCreateManyIngredientInputEnvelope
    set?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    disconnect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    delete?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    connect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    update?: ShoppingItemUpdateWithWhereUniqueWithoutIngredientInput | ShoppingItemUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: ShoppingItemUpdateManyWithWhereWithoutIngredientInput | ShoppingItemUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: ShoppingItemScalarWhereInput | ShoppingItemScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutStepsInput = {
    create?: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutStepsInput
    connect?: RecipeWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutStepsInput
    upsert?: RecipeUpsertWithoutStepsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutStepsInput, RecipeUpdateWithoutStepsInput>, RecipeUncheckedUpdateWithoutStepsInput>
  }

  export type RecipeTagCreateNestedManyWithoutTagInput = {
    create?: XOR<RecipeTagCreateWithoutTagInput, RecipeTagUncheckedCreateWithoutTagInput> | RecipeTagCreateWithoutTagInput[] | RecipeTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: RecipeTagCreateOrConnectWithoutTagInput | RecipeTagCreateOrConnectWithoutTagInput[]
    createMany?: RecipeTagCreateManyTagInputEnvelope
    connect?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
  }

  export type RecipeTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<RecipeTagCreateWithoutTagInput, RecipeTagUncheckedCreateWithoutTagInput> | RecipeTagCreateWithoutTagInput[] | RecipeTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: RecipeTagCreateOrConnectWithoutTagInput | RecipeTagCreateOrConnectWithoutTagInput[]
    createMany?: RecipeTagCreateManyTagInputEnvelope
    connect?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
  }

  export type RecipeTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<RecipeTagCreateWithoutTagInput, RecipeTagUncheckedCreateWithoutTagInput> | RecipeTagCreateWithoutTagInput[] | RecipeTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: RecipeTagCreateOrConnectWithoutTagInput | RecipeTagCreateOrConnectWithoutTagInput[]
    upsert?: RecipeTagUpsertWithWhereUniqueWithoutTagInput | RecipeTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: RecipeTagCreateManyTagInputEnvelope
    set?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
    disconnect?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
    delete?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
    connect?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
    update?: RecipeTagUpdateWithWhereUniqueWithoutTagInput | RecipeTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: RecipeTagUpdateManyWithWhereWithoutTagInput | RecipeTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: RecipeTagScalarWhereInput | RecipeTagScalarWhereInput[]
  }

  export type RecipeTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<RecipeTagCreateWithoutTagInput, RecipeTagUncheckedCreateWithoutTagInput> | RecipeTagCreateWithoutTagInput[] | RecipeTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: RecipeTagCreateOrConnectWithoutTagInput | RecipeTagCreateOrConnectWithoutTagInput[]
    upsert?: RecipeTagUpsertWithWhereUniqueWithoutTagInput | RecipeTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: RecipeTagCreateManyTagInputEnvelope
    set?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
    disconnect?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
    delete?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
    connect?: RecipeTagWhereUniqueInput | RecipeTagWhereUniqueInput[]
    update?: RecipeTagUpdateWithWhereUniqueWithoutTagInput | RecipeTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: RecipeTagUpdateManyWithWhereWithoutTagInput | RecipeTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: RecipeTagScalarWhereInput | RecipeTagScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutTagsInput = {
    create?: XOR<RecipeCreateWithoutTagsInput, RecipeUncheckedCreateWithoutTagsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutTagsInput
    connect?: RecipeWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutRecipesInput = {
    create?: XOR<TagCreateWithoutRecipesInput, TagUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: TagCreateOrConnectWithoutRecipesInput
    connect?: TagWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<RecipeCreateWithoutTagsInput, RecipeUncheckedCreateWithoutTagsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutTagsInput
    upsert?: RecipeUpsertWithoutTagsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutTagsInput, RecipeUpdateWithoutTagsInput>, RecipeUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<TagCreateWithoutRecipesInput, TagUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: TagCreateOrConnectWithoutRecipesInput
    upsert?: TagUpsertWithoutRecipesInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutRecipesInput, TagUpdateWithoutRecipesInput>, TagUncheckedUpdateWithoutRecipesInput>
  }

  export type RecipeCreateNestedOneWithoutImagesInput = {
    create?: XOR<RecipeCreateWithoutImagesInput, RecipeUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutImagesInput
    connect?: RecipeWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<RecipeCreateWithoutImagesInput, RecipeUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutImagesInput
    upsert?: RecipeUpsertWithoutImagesInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutImagesInput, RecipeUpdateWithoutImagesInput>, RecipeUncheckedUpdateWithoutImagesInput>
  }

  export type UserCreateNestedOneWithoutShoppingListsInput = {
    create?: XOR<UserCreateWithoutShoppingListsInput, UserUncheckedCreateWithoutShoppingListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShoppingListsInput
    connect?: UserWhereUniqueInput
  }

  export type ShoppingItemCreateNestedManyWithoutListInput = {
    create?: XOR<ShoppingItemCreateWithoutListInput, ShoppingItemUncheckedCreateWithoutListInput> | ShoppingItemCreateWithoutListInput[] | ShoppingItemUncheckedCreateWithoutListInput[]
    connectOrCreate?: ShoppingItemCreateOrConnectWithoutListInput | ShoppingItemCreateOrConnectWithoutListInput[]
    createMany?: ShoppingItemCreateManyListInputEnvelope
    connect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
  }

  export type ShoppingItemUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<ShoppingItemCreateWithoutListInput, ShoppingItemUncheckedCreateWithoutListInput> | ShoppingItemCreateWithoutListInput[] | ShoppingItemUncheckedCreateWithoutListInput[]
    connectOrCreate?: ShoppingItemCreateOrConnectWithoutListInput | ShoppingItemCreateOrConnectWithoutListInput[]
    createMany?: ShoppingItemCreateManyListInputEnvelope
    connect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutShoppingListsNestedInput = {
    create?: XOR<UserCreateWithoutShoppingListsInput, UserUncheckedCreateWithoutShoppingListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShoppingListsInput
    upsert?: UserUpsertWithoutShoppingListsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShoppingListsInput, UserUpdateWithoutShoppingListsInput>, UserUncheckedUpdateWithoutShoppingListsInput>
  }

  export type ShoppingItemUpdateManyWithoutListNestedInput = {
    create?: XOR<ShoppingItemCreateWithoutListInput, ShoppingItemUncheckedCreateWithoutListInput> | ShoppingItemCreateWithoutListInput[] | ShoppingItemUncheckedCreateWithoutListInput[]
    connectOrCreate?: ShoppingItemCreateOrConnectWithoutListInput | ShoppingItemCreateOrConnectWithoutListInput[]
    upsert?: ShoppingItemUpsertWithWhereUniqueWithoutListInput | ShoppingItemUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ShoppingItemCreateManyListInputEnvelope
    set?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    disconnect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    delete?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    connect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    update?: ShoppingItemUpdateWithWhereUniqueWithoutListInput | ShoppingItemUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ShoppingItemUpdateManyWithWhereWithoutListInput | ShoppingItemUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ShoppingItemScalarWhereInput | ShoppingItemScalarWhereInput[]
  }

  export type ShoppingItemUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<ShoppingItemCreateWithoutListInput, ShoppingItemUncheckedCreateWithoutListInput> | ShoppingItemCreateWithoutListInput[] | ShoppingItemUncheckedCreateWithoutListInput[]
    connectOrCreate?: ShoppingItemCreateOrConnectWithoutListInput | ShoppingItemCreateOrConnectWithoutListInput[]
    upsert?: ShoppingItemUpsertWithWhereUniqueWithoutListInput | ShoppingItemUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ShoppingItemCreateManyListInputEnvelope
    set?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    disconnect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    delete?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    connect?: ShoppingItemWhereUniqueInput | ShoppingItemWhereUniqueInput[]
    update?: ShoppingItemUpdateWithWhereUniqueWithoutListInput | ShoppingItemUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ShoppingItemUpdateManyWithWhereWithoutListInput | ShoppingItemUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ShoppingItemScalarWhereInput | ShoppingItemScalarWhereInput[]
  }

  export type ShoppingListCreateNestedOneWithoutItemsInput = {
    create?: XOR<ShoppingListCreateWithoutItemsInput, ShoppingListUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutItemsInput
    connect?: ShoppingListWhereUniqueInput
  }

  export type IngredientCreateNestedOneWithoutShoppingItemsInput = {
    create?: XOR<IngredientCreateWithoutShoppingItemsInput, IngredientUncheckedCreateWithoutShoppingItemsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutShoppingItemsInput
    connect?: IngredientWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutShoppingItemsInput = {
    create?: XOR<UnitCreateWithoutShoppingItemsInput, UnitUncheckedCreateWithoutShoppingItemsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutShoppingItemsInput
    connect?: UnitWhereUniqueInput
  }

  export type ShoppingListUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ShoppingListCreateWithoutItemsInput, ShoppingListUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutItemsInput
    upsert?: ShoppingListUpsertWithoutItemsInput
    connect?: ShoppingListWhereUniqueInput
    update?: XOR<XOR<ShoppingListUpdateToOneWithWhereWithoutItemsInput, ShoppingListUpdateWithoutItemsInput>, ShoppingListUncheckedUpdateWithoutItemsInput>
  }

  export type IngredientUpdateOneWithoutShoppingItemsNestedInput = {
    create?: XOR<IngredientCreateWithoutShoppingItemsInput, IngredientUncheckedCreateWithoutShoppingItemsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutShoppingItemsInput
    upsert?: IngredientUpsertWithoutShoppingItemsInput
    disconnect?: IngredientWhereInput | boolean
    delete?: IngredientWhereInput | boolean
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutShoppingItemsInput, IngredientUpdateWithoutShoppingItemsInput>, IngredientUncheckedUpdateWithoutShoppingItemsInput>
  }

  export type UnitUpdateOneRequiredWithoutShoppingItemsNestedInput = {
    create?: XOR<UnitCreateWithoutShoppingItemsInput, UnitUncheckedCreateWithoutShoppingItemsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutShoppingItemsInput
    upsert?: UnitUpsertWithoutShoppingItemsInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutShoppingItemsInput, UnitUpdateWithoutShoppingItemsInput>, UnitUncheckedUpdateWithoutShoppingItemsInput>
  }

  export type GroupCreateNestedOneWithoutRecipeGroupsInput = {
    create?: XOR<GroupCreateWithoutRecipeGroupsInput, GroupUncheckedCreateWithoutRecipeGroupsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutRecipeGroupsInput
    connect?: GroupWhereUniqueInput
  }

  export type RecipeCreateNestedOneWithoutGroupsInput = {
    create?: XOR<RecipeCreateWithoutGroupsInput, RecipeUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutGroupsInput
    connect?: RecipeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSharedRecipesInput = {
    create?: XOR<UserCreateWithoutSharedRecipesInput, UserUncheckedCreateWithoutSharedRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedRecipesInput
    connect?: UserWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutRecipeGroupsNestedInput = {
    create?: XOR<GroupCreateWithoutRecipeGroupsInput, GroupUncheckedCreateWithoutRecipeGroupsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutRecipeGroupsInput
    upsert?: GroupUpsertWithoutRecipeGroupsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutRecipeGroupsInput, GroupUpdateWithoutRecipeGroupsInput>, GroupUncheckedUpdateWithoutRecipeGroupsInput>
  }

  export type RecipeUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<RecipeCreateWithoutGroupsInput, RecipeUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutGroupsInput
    upsert?: RecipeUpsertWithoutGroupsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutGroupsInput, RecipeUpdateWithoutGroupsInput>, RecipeUncheckedUpdateWithoutGroupsInput>
  }

  export type UserUpdateOneRequiredWithoutSharedRecipesNestedInput = {
    create?: XOR<UserCreateWithoutSharedRecipesInput, UserUncheckedCreateWithoutSharedRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedRecipesInput
    upsert?: UserUpsertWithoutSharedRecipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSharedRecipesInput, UserUpdateWithoutSharedRecipesInput>, UserUncheckedUpdateWithoutSharedRecipesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUnitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitTypeFilter<$PrismaModel> | $Enums.UnitType
  }

  export type NestedEnumUnitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitTypeWithAggregatesFilter<$PrismaModel> | $Enums.UnitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitTypeFilter<$PrismaModel>
    _max?: NestedEnumUnitTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type GroupCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    userGroups?: UserGroupCreateNestedManyWithoutGroupInput
    recipeGroups?: RecipeGroupCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    userGroups?: UserGroupUncheckedCreateNestedManyWithoutGroupInput
    recipeGroups?: RecipeGroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput>
  }

  export type GroupCreateManyOwnerInputEnvelope = {
    data: GroupCreateManyOwnerInput | GroupCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type UserGroupCreateWithoutUserInput = {
    is_owner?: boolean
    joined_at?: Date | string
    role: RoleCreateNestedOneWithoutUserGroupsInput
    group: GroupCreateNestedOneWithoutUserGroupsInput
  }

  export type UserGroupUncheckedCreateWithoutUserInput = {
    role_id: string
    group_id: string
    is_owner?: boolean
    joined_at?: Date | string
  }

  export type UserGroupCreateOrConnectWithoutUserInput = {
    where: UserGroupWhereUniqueInput
    create: XOR<UserGroupCreateWithoutUserInput, UserGroupUncheckedCreateWithoutUserInput>
  }

  export type UserGroupCreateManyUserInputEnvelope = {
    data: UserGroupCreateManyUserInput | UserGroupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecipeCreateWithoutAuthorInput = {
    id?: string
    title: string
    description?: string | null
    time_required_min?: number | null
    difficulty?: string | null
    servings?: number | null
    is_public?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingredients?: IngredientCreateNestedManyWithoutRecipeInput
    steps?: CookingStepCreateNestedManyWithoutRecipeInput
    images?: RecipeImageCreateNestedManyWithoutRecipeInput
    tags?: RecipeTagCreateNestedManyWithoutRecipeInput
    groups?: RecipeGroupCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    description?: string | null
    time_required_min?: number | null
    difficulty?: string | null
    servings?: number | null
    is_public?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingredients?: IngredientUncheckedCreateNestedManyWithoutRecipeInput
    steps?: CookingStepUncheckedCreateNestedManyWithoutRecipeInput
    images?: RecipeImageUncheckedCreateNestedManyWithoutRecipeInput
    tags?: RecipeTagUncheckedCreateNestedManyWithoutRecipeInput
    groups?: RecipeGroupUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutAuthorInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput>
  }

  export type RecipeCreateManyAuthorInputEnvelope = {
    data: RecipeCreateManyAuthorInput | RecipeCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ShoppingListCreateWithoutUserInput = {
    id?: string
    name: string
    is_complete?: boolean
    completed_at?: Date | string | null
    items?: ShoppingItemCreateNestedManyWithoutListInput
  }

  export type ShoppingListUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    is_complete?: boolean
    completed_at?: Date | string | null
    items?: ShoppingItemUncheckedCreateNestedManyWithoutListInput
  }

  export type ShoppingListCreateOrConnectWithoutUserInput = {
    where: ShoppingListWhereUniqueInput
    create: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput>
  }

  export type ShoppingListCreateManyUserInputEnvelope = {
    data: ShoppingListCreateManyUserInput | ShoppingListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecipeGroupCreateWithoutUserInput = {
    can_comment?: boolean
    shared_at?: Date | string
    group: GroupCreateNestedOneWithoutRecipeGroupsInput
    recipe: RecipeCreateNestedOneWithoutGroupsInput
  }

  export type RecipeGroupUncheckedCreateWithoutUserInput = {
    group_id: string
    recipe_id: string
    can_comment?: boolean
    shared_at?: Date | string
  }

  export type RecipeGroupCreateOrConnectWithoutUserInput = {
    where: RecipeGroupWhereUniqueInput
    create: XOR<RecipeGroupCreateWithoutUserInput, RecipeGroupUncheckedCreateWithoutUserInput>
  }

  export type RecipeGroupCreateManyUserInputEnvelope = {
    data: RecipeGroupCreateManyUserInput | RecipeGroupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithWhereUniqueWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutOwnerInput, GroupUncheckedUpdateWithoutOwnerInput>
    create: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutOwnerInput, GroupUncheckedUpdateWithoutOwnerInput>
  }

  export type GroupUpdateManyWithWhereWithoutOwnerInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutOwnerInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: UuidFilter<"Group"> | string
    owner_id?: UuidFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
  }

  export type UserGroupUpsertWithWhereUniqueWithoutUserInput = {
    where: UserGroupWhereUniqueInput
    update: XOR<UserGroupUpdateWithoutUserInput, UserGroupUncheckedUpdateWithoutUserInput>
    create: XOR<UserGroupCreateWithoutUserInput, UserGroupUncheckedCreateWithoutUserInput>
  }

  export type UserGroupUpdateWithWhereUniqueWithoutUserInput = {
    where: UserGroupWhereUniqueInput
    data: XOR<UserGroupUpdateWithoutUserInput, UserGroupUncheckedUpdateWithoutUserInput>
  }

  export type UserGroupUpdateManyWithWhereWithoutUserInput = {
    where: UserGroupScalarWhereInput
    data: XOR<UserGroupUpdateManyMutationInput, UserGroupUncheckedUpdateManyWithoutUserInput>
  }

  export type UserGroupScalarWhereInput = {
    AND?: UserGroupScalarWhereInput | UserGroupScalarWhereInput[]
    OR?: UserGroupScalarWhereInput[]
    NOT?: UserGroupScalarWhereInput | UserGroupScalarWhereInput[]
    user_id?: UuidFilter<"UserGroup"> | string
    role_id?: UuidFilter<"UserGroup"> | string
    group_id?: UuidFilter<"UserGroup"> | string
    is_owner?: BoolFilter<"UserGroup"> | boolean
    joined_at?: DateTimeFilter<"UserGroup"> | Date | string
  }

  export type RecipeUpsertWithWhereUniqueWithoutAuthorInput = {
    where: RecipeWhereUniqueInput
    update: XOR<RecipeUpdateWithoutAuthorInput, RecipeUncheckedUpdateWithoutAuthorInput>
    create: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput>
  }

  export type RecipeUpdateWithWhereUniqueWithoutAuthorInput = {
    where: RecipeWhereUniqueInput
    data: XOR<RecipeUpdateWithoutAuthorInput, RecipeUncheckedUpdateWithoutAuthorInput>
  }

  export type RecipeUpdateManyWithWhereWithoutAuthorInput = {
    where: RecipeScalarWhereInput
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyWithoutAuthorInput>
  }

  export type RecipeScalarWhereInput = {
    AND?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    OR?: RecipeScalarWhereInput[]
    NOT?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    id?: UuidFilter<"Recipe"> | string
    author_id?: UuidFilter<"Recipe"> | string
    title?: StringFilter<"Recipe"> | string
    description?: StringNullableFilter<"Recipe"> | string | null
    time_required_min?: IntNullableFilter<"Recipe"> | number | null
    difficulty?: StringNullableFilter<"Recipe"> | string | null
    servings?: IntNullableFilter<"Recipe"> | number | null
    is_public?: BoolFilter<"Recipe"> | boolean
    created_at?: DateTimeFilter<"Recipe"> | Date | string
    updated_at?: DateTimeFilter<"Recipe"> | Date | string
  }

  export type ShoppingListUpsertWithWhereUniqueWithoutUserInput = {
    where: ShoppingListWhereUniqueInput
    update: XOR<ShoppingListUpdateWithoutUserInput, ShoppingListUncheckedUpdateWithoutUserInput>
    create: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput>
  }

  export type ShoppingListUpdateWithWhereUniqueWithoutUserInput = {
    where: ShoppingListWhereUniqueInput
    data: XOR<ShoppingListUpdateWithoutUserInput, ShoppingListUncheckedUpdateWithoutUserInput>
  }

  export type ShoppingListUpdateManyWithWhereWithoutUserInput = {
    where: ShoppingListScalarWhereInput
    data: XOR<ShoppingListUpdateManyMutationInput, ShoppingListUncheckedUpdateManyWithoutUserInput>
  }

  export type ShoppingListScalarWhereInput = {
    AND?: ShoppingListScalarWhereInput | ShoppingListScalarWhereInput[]
    OR?: ShoppingListScalarWhereInput[]
    NOT?: ShoppingListScalarWhereInput | ShoppingListScalarWhereInput[]
    id?: UuidFilter<"ShoppingList"> | string
    user_id?: UuidFilter<"ShoppingList"> | string
    name?: StringFilter<"ShoppingList"> | string
    is_complete?: BoolFilter<"ShoppingList"> | boolean
    completed_at?: DateTimeNullableFilter<"ShoppingList"> | Date | string | null
  }

  export type RecipeGroupUpsertWithWhereUniqueWithoutUserInput = {
    where: RecipeGroupWhereUniqueInput
    update: XOR<RecipeGroupUpdateWithoutUserInput, RecipeGroupUncheckedUpdateWithoutUserInput>
    create: XOR<RecipeGroupCreateWithoutUserInput, RecipeGroupUncheckedCreateWithoutUserInput>
  }

  export type RecipeGroupUpdateWithWhereUniqueWithoutUserInput = {
    where: RecipeGroupWhereUniqueInput
    data: XOR<RecipeGroupUpdateWithoutUserInput, RecipeGroupUncheckedUpdateWithoutUserInput>
  }

  export type RecipeGroupUpdateManyWithWhereWithoutUserInput = {
    where: RecipeGroupScalarWhereInput
    data: XOR<RecipeGroupUpdateManyMutationInput, RecipeGroupUncheckedUpdateManyWithoutUserInput>
  }

  export type RecipeGroupScalarWhereInput = {
    AND?: RecipeGroupScalarWhereInput | RecipeGroupScalarWhereInput[]
    OR?: RecipeGroupScalarWhereInput[]
    NOT?: RecipeGroupScalarWhereInput | RecipeGroupScalarWhereInput[]
    group_id?: UuidFilter<"RecipeGroup"> | string
    recipe_id?: UuidFilter<"RecipeGroup"> | string
    shared_by?: UuidFilter<"RecipeGroup"> | string
    can_comment?: BoolFilter<"RecipeGroup"> | boolean
    shared_at?: DateTimeFilter<"RecipeGroup"> | Date | string
  }

  export type UserGroupCreateWithoutRoleInput = {
    is_owner?: boolean
    joined_at?: Date | string
    user: UserCreateNestedOneWithoutUserGroupsInput
    group: GroupCreateNestedOneWithoutUserGroupsInput
  }

  export type UserGroupUncheckedCreateWithoutRoleInput = {
    user_id: string
    group_id: string
    is_owner?: boolean
    joined_at?: Date | string
  }

  export type UserGroupCreateOrConnectWithoutRoleInput = {
    where: UserGroupWhereUniqueInput
    create: XOR<UserGroupCreateWithoutRoleInput, UserGroupUncheckedCreateWithoutRoleInput>
  }

  export type UserGroupCreateManyRoleInputEnvelope = {
    data: UserGroupCreateManyRoleInput | UserGroupCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserGroupUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserGroupWhereUniqueInput
    update: XOR<UserGroupUpdateWithoutRoleInput, UserGroupUncheckedUpdateWithoutRoleInput>
    create: XOR<UserGroupCreateWithoutRoleInput, UserGroupUncheckedCreateWithoutRoleInput>
  }

  export type UserGroupUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserGroupWhereUniqueInput
    data: XOR<UserGroupUpdateWithoutRoleInput, UserGroupUncheckedUpdateWithoutRoleInput>
  }

  export type UserGroupUpdateManyWithWhereWithoutRoleInput = {
    where: UserGroupScalarWhereInput
    data: XOR<UserGroupUpdateManyMutationInput, UserGroupUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserCreateWithoutOwnedGroupsInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    created_at?: Date | string
    userGroups?: UserGroupCreateNestedManyWithoutUserInput
    recipes?: RecipeCreateNestedManyWithoutAuthorInput
    shoppingLists?: ShoppingListCreateNestedManyWithoutUserInput
    sharedRecipes?: RecipeGroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedGroupsInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    created_at?: Date | string
    userGroups?: UserGroupUncheckedCreateNestedManyWithoutUserInput
    recipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput
    shoppingLists?: ShoppingListUncheckedCreateNestedManyWithoutUserInput
    sharedRecipes?: RecipeGroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
  }

  export type UserGroupCreateWithoutGroupInput = {
    is_owner?: boolean
    joined_at?: Date | string
    user: UserCreateNestedOneWithoutUserGroupsInput
    role: RoleCreateNestedOneWithoutUserGroupsInput
  }

  export type UserGroupUncheckedCreateWithoutGroupInput = {
    user_id: string
    role_id: string
    is_owner?: boolean
    joined_at?: Date | string
  }

  export type UserGroupCreateOrConnectWithoutGroupInput = {
    where: UserGroupWhereUniqueInput
    create: XOR<UserGroupCreateWithoutGroupInput, UserGroupUncheckedCreateWithoutGroupInput>
  }

  export type UserGroupCreateManyGroupInputEnvelope = {
    data: UserGroupCreateManyGroupInput | UserGroupCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type RecipeGroupCreateWithoutGroupInput = {
    can_comment?: boolean
    shared_at?: Date | string
    recipe: RecipeCreateNestedOneWithoutGroupsInput
    user: UserCreateNestedOneWithoutSharedRecipesInput
  }

  export type RecipeGroupUncheckedCreateWithoutGroupInput = {
    recipe_id: string
    shared_by: string
    can_comment?: boolean
    shared_at?: Date | string
  }

  export type RecipeGroupCreateOrConnectWithoutGroupInput = {
    where: RecipeGroupWhereUniqueInput
    create: XOR<RecipeGroupCreateWithoutGroupInput, RecipeGroupUncheckedCreateWithoutGroupInput>
  }

  export type RecipeGroupCreateManyGroupInputEnvelope = {
    data: RecipeGroupCreateManyGroupInput | RecipeGroupCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedGroupsInput = {
    update: XOR<UserUpdateWithoutOwnedGroupsInput, UserUncheckedUpdateWithoutOwnedGroupsInput>
    create: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedGroupsInput, UserUncheckedUpdateWithoutOwnedGroupsInput>
  }

  export type UserUpdateWithoutOwnedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userGroups?: UserGroupUpdateManyWithoutUserNestedInput
    recipes?: RecipeUpdateManyWithoutAuthorNestedInput
    shoppingLists?: ShoppingListUpdateManyWithoutUserNestedInput
    sharedRecipes?: RecipeGroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userGroups?: UserGroupUncheckedUpdateManyWithoutUserNestedInput
    recipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput
    shoppingLists?: ShoppingListUncheckedUpdateManyWithoutUserNestedInput
    sharedRecipes?: RecipeGroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserGroupUpsertWithWhereUniqueWithoutGroupInput = {
    where: UserGroupWhereUniqueInput
    update: XOR<UserGroupUpdateWithoutGroupInput, UserGroupUncheckedUpdateWithoutGroupInput>
    create: XOR<UserGroupCreateWithoutGroupInput, UserGroupUncheckedCreateWithoutGroupInput>
  }

  export type UserGroupUpdateWithWhereUniqueWithoutGroupInput = {
    where: UserGroupWhereUniqueInput
    data: XOR<UserGroupUpdateWithoutGroupInput, UserGroupUncheckedUpdateWithoutGroupInput>
  }

  export type UserGroupUpdateManyWithWhereWithoutGroupInput = {
    where: UserGroupScalarWhereInput
    data: XOR<UserGroupUpdateManyMutationInput, UserGroupUncheckedUpdateManyWithoutGroupInput>
  }

  export type RecipeGroupUpsertWithWhereUniqueWithoutGroupInput = {
    where: RecipeGroupWhereUniqueInput
    update: XOR<RecipeGroupUpdateWithoutGroupInput, RecipeGroupUncheckedUpdateWithoutGroupInput>
    create: XOR<RecipeGroupCreateWithoutGroupInput, RecipeGroupUncheckedCreateWithoutGroupInput>
  }

  export type RecipeGroupUpdateWithWhereUniqueWithoutGroupInput = {
    where: RecipeGroupWhereUniqueInput
    data: XOR<RecipeGroupUpdateWithoutGroupInput, RecipeGroupUncheckedUpdateWithoutGroupInput>
  }

  export type RecipeGroupUpdateManyWithWhereWithoutGroupInput = {
    where: RecipeGroupScalarWhereInput
    data: XOR<RecipeGroupUpdateManyMutationInput, RecipeGroupUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserCreateWithoutUserGroupsInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    created_at?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    recipes?: RecipeCreateNestedManyWithoutAuthorInput
    shoppingLists?: ShoppingListCreateNestedManyWithoutUserInput
    sharedRecipes?: RecipeGroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserGroupsInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    created_at?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    recipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput
    shoppingLists?: ShoppingListUncheckedCreateNestedManyWithoutUserInput
    sharedRecipes?: RecipeGroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserGroupsInput, UserUncheckedCreateWithoutUserGroupsInput>
  }

  export type RoleCreateWithoutUserGroupsInput = {
    id?: string
    name: $Enums.RoleName
    description?: string | null
  }

  export type RoleUncheckedCreateWithoutUserGroupsInput = {
    id?: string
    name: $Enums.RoleName
    description?: string | null
  }

  export type RoleCreateOrConnectWithoutUserGroupsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserGroupsInput, RoleUncheckedCreateWithoutUserGroupsInput>
  }

  export type GroupCreateWithoutUserGroupsInput = {
    id?: string
    name: string
    description?: string | null
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    recipeGroups?: RecipeGroupCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutUserGroupsInput = {
    id?: string
    owner_id: string
    name: string
    description?: string | null
    recipeGroups?: RecipeGroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutUserGroupsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUserGroupsInput, GroupUncheckedCreateWithoutUserGroupsInput>
  }

  export type UserUpsertWithoutUserGroupsInput = {
    update: XOR<UserUpdateWithoutUserGroupsInput, UserUncheckedUpdateWithoutUserGroupsInput>
    create: XOR<UserCreateWithoutUserGroupsInput, UserUncheckedCreateWithoutUserGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserGroupsInput, UserUncheckedUpdateWithoutUserGroupsInput>
  }

  export type UserUpdateWithoutUserGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    recipes?: RecipeUpdateManyWithoutAuthorNestedInput
    shoppingLists?: ShoppingListUpdateManyWithoutUserNestedInput
    sharedRecipes?: RecipeGroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    recipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput
    shoppingLists?: ShoppingListUncheckedUpdateManyWithoutUserNestedInput
    sharedRecipes?: RecipeGroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoleUpsertWithoutUserGroupsInput = {
    update: XOR<RoleUpdateWithoutUserGroupsInput, RoleUncheckedUpdateWithoutUserGroupsInput>
    create: XOR<RoleCreateWithoutUserGroupsInput, RoleUncheckedCreateWithoutUserGroupsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserGroupsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserGroupsInput, RoleUncheckedUpdateWithoutUserGroupsInput>
  }

  export type RoleUpdateWithoutUserGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateWithoutUserGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupUpsertWithoutUserGroupsInput = {
    update: XOR<GroupUpdateWithoutUserGroupsInput, GroupUncheckedUpdateWithoutUserGroupsInput>
    create: XOR<GroupCreateWithoutUserGroupsInput, GroupUncheckedCreateWithoutUserGroupsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutUserGroupsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutUserGroupsInput, GroupUncheckedUpdateWithoutUserGroupsInput>
  }

  export type GroupUpdateWithoutUserGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    recipeGroups?: RecipeGroupUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutUserGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recipeGroups?: RecipeGroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type IngredientCreateWithoutUnitInput = {
    id?: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    calories?: Decimal | DecimalJsLike | number | string | null
    protein_g?: Decimal | DecimalJsLike | number | string | null
    carbs_g?: Decimal | DecimalJsLike | number | string | null
    fat_g?: Decimal | DecimalJsLike | number | string | null
    sort_order?: number
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
    shoppingItems?: ShoppingItemCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutUnitInput = {
    id?: string
    recipe_id: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    calories?: Decimal | DecimalJsLike | number | string | null
    protein_g?: Decimal | DecimalJsLike | number | string | null
    carbs_g?: Decimal | DecimalJsLike | number | string | null
    fat_g?: Decimal | DecimalJsLike | number | string | null
    sort_order?: number
    shoppingItems?: ShoppingItemUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutUnitInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutUnitInput, IngredientUncheckedCreateWithoutUnitInput>
  }

  export type IngredientCreateManyUnitInputEnvelope = {
    data: IngredientCreateManyUnitInput | IngredientCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type ShoppingItemCreateWithoutUnitInput = {
    id?: string
    custom_name?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    is_checked?: boolean
    list: ShoppingListCreateNestedOneWithoutItemsInput
    ingredient?: IngredientCreateNestedOneWithoutShoppingItemsInput
  }

  export type ShoppingItemUncheckedCreateWithoutUnitInput = {
    id?: string
    list_id: string
    ingredient_id?: string | null
    custom_name?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    is_checked?: boolean
  }

  export type ShoppingItemCreateOrConnectWithoutUnitInput = {
    where: ShoppingItemWhereUniqueInput
    create: XOR<ShoppingItemCreateWithoutUnitInput, ShoppingItemUncheckedCreateWithoutUnitInput>
  }

  export type ShoppingItemCreateManyUnitInputEnvelope = {
    data: ShoppingItemCreateManyUnitInput | ShoppingItemCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type IngredientUpsertWithWhereUniqueWithoutUnitInput = {
    where: IngredientWhereUniqueInput
    update: XOR<IngredientUpdateWithoutUnitInput, IngredientUncheckedUpdateWithoutUnitInput>
    create: XOR<IngredientCreateWithoutUnitInput, IngredientUncheckedCreateWithoutUnitInput>
  }

  export type IngredientUpdateWithWhereUniqueWithoutUnitInput = {
    where: IngredientWhereUniqueInput
    data: XOR<IngredientUpdateWithoutUnitInput, IngredientUncheckedUpdateWithoutUnitInput>
  }

  export type IngredientUpdateManyWithWhereWithoutUnitInput = {
    where: IngredientScalarWhereInput
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyWithoutUnitInput>
  }

  export type IngredientScalarWhereInput = {
    AND?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
    OR?: IngredientScalarWhereInput[]
    NOT?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
    id?: UuidFilter<"Ingredient"> | string
    recipe_id?: UuidFilter<"Ingredient"> | string
    unit_id?: UuidFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    quantity?: DecimalFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string
    calories?: DecimalNullableFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string | null
    protein_g?: DecimalNullableFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string | null
    carbs_g?: DecimalNullableFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string | null
    fat_g?: DecimalNullableFilter<"Ingredient"> | Decimal | DecimalJsLike | number | string | null
    sort_order?: IntFilter<"Ingredient"> | number
  }

  export type ShoppingItemUpsertWithWhereUniqueWithoutUnitInput = {
    where: ShoppingItemWhereUniqueInput
    update: XOR<ShoppingItemUpdateWithoutUnitInput, ShoppingItemUncheckedUpdateWithoutUnitInput>
    create: XOR<ShoppingItemCreateWithoutUnitInput, ShoppingItemUncheckedCreateWithoutUnitInput>
  }

  export type ShoppingItemUpdateWithWhereUniqueWithoutUnitInput = {
    where: ShoppingItemWhereUniqueInput
    data: XOR<ShoppingItemUpdateWithoutUnitInput, ShoppingItemUncheckedUpdateWithoutUnitInput>
  }

  export type ShoppingItemUpdateManyWithWhereWithoutUnitInput = {
    where: ShoppingItemScalarWhereInput
    data: XOR<ShoppingItemUpdateManyMutationInput, ShoppingItemUncheckedUpdateManyWithoutUnitInput>
  }

  export type ShoppingItemScalarWhereInput = {
    AND?: ShoppingItemScalarWhereInput | ShoppingItemScalarWhereInput[]
    OR?: ShoppingItemScalarWhereInput[]
    NOT?: ShoppingItemScalarWhereInput | ShoppingItemScalarWhereInput[]
    id?: UuidFilter<"ShoppingItem"> | string
    list_id?: UuidFilter<"ShoppingItem"> | string
    ingredient_id?: UuidNullableFilter<"ShoppingItem"> | string | null
    unit_id?: UuidFilter<"ShoppingItem"> | string
    custom_name?: StringNullableFilter<"ShoppingItem"> | string | null
    quantity?: DecimalFilter<"ShoppingItem"> | Decimal | DecimalJsLike | number | string
    is_checked?: BoolFilter<"ShoppingItem"> | boolean
  }

  export type UserCreateWithoutRecipesInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    created_at?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    userGroups?: UserGroupCreateNestedManyWithoutUserInput
    shoppingLists?: ShoppingListCreateNestedManyWithoutUserInput
    sharedRecipes?: RecipeGroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecipesInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    created_at?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    userGroups?: UserGroupUncheckedCreateNestedManyWithoutUserInput
    shoppingLists?: ShoppingListUncheckedCreateNestedManyWithoutUserInput
    sharedRecipes?: RecipeGroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
  }

  export type IngredientCreateWithoutRecipeInput = {
    id?: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    calories?: Decimal | DecimalJsLike | number | string | null
    protein_g?: Decimal | DecimalJsLike | number | string | null
    carbs_g?: Decimal | DecimalJsLike | number | string | null
    fat_g?: Decimal | DecimalJsLike | number | string | null
    sort_order?: number
    unit: UnitCreateNestedOneWithoutIngredientsInput
    shoppingItems?: ShoppingItemCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutRecipeInput = {
    id?: string
    unit_id: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    calories?: Decimal | DecimalJsLike | number | string | null
    protein_g?: Decimal | DecimalJsLike | number | string | null
    carbs_g?: Decimal | DecimalJsLike | number | string | null
    fat_g?: Decimal | DecimalJsLike | number | string | null
    sort_order?: number
    shoppingItems?: ShoppingItemUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutRecipeInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput>
  }

  export type IngredientCreateManyRecipeInputEnvelope = {
    data: IngredientCreateManyRecipeInput | IngredientCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type CookingStepCreateWithoutRecipeInput = {
    id?: string
    step_number: number
    instruction: string
    duration_min?: number | null
  }

  export type CookingStepUncheckedCreateWithoutRecipeInput = {
    id?: string
    step_number: number
    instruction: string
    duration_min?: number | null
  }

  export type CookingStepCreateOrConnectWithoutRecipeInput = {
    where: CookingStepWhereUniqueInput
    create: XOR<CookingStepCreateWithoutRecipeInput, CookingStepUncheckedCreateWithoutRecipeInput>
  }

  export type CookingStepCreateManyRecipeInputEnvelope = {
    data: CookingStepCreateManyRecipeInput | CookingStepCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type RecipeImageCreateWithoutRecipeInput = {
    id?: string
    storage_url: string
    provider: string
    storage_key: string
    is_primary?: boolean
    mime_type: string
    uploaded_at?: Date | string
  }

  export type RecipeImageUncheckedCreateWithoutRecipeInput = {
    id?: string
    storage_url: string
    provider: string
    storage_key: string
    is_primary?: boolean
    mime_type: string
    uploaded_at?: Date | string
  }

  export type RecipeImageCreateOrConnectWithoutRecipeInput = {
    where: RecipeImageWhereUniqueInput
    create: XOR<RecipeImageCreateWithoutRecipeInput, RecipeImageUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeImageCreateManyRecipeInputEnvelope = {
    data: RecipeImageCreateManyRecipeInput | RecipeImageCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type RecipeTagCreateWithoutRecipeInput = {
    tag: TagCreateNestedOneWithoutRecipesInput
  }

  export type RecipeTagUncheckedCreateWithoutRecipeInput = {
    tag_id: string
  }

  export type RecipeTagCreateOrConnectWithoutRecipeInput = {
    where: RecipeTagWhereUniqueInput
    create: XOR<RecipeTagCreateWithoutRecipeInput, RecipeTagUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeTagCreateManyRecipeInputEnvelope = {
    data: RecipeTagCreateManyRecipeInput | RecipeTagCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type RecipeGroupCreateWithoutRecipeInput = {
    can_comment?: boolean
    shared_at?: Date | string
    group: GroupCreateNestedOneWithoutRecipeGroupsInput
    user: UserCreateNestedOneWithoutSharedRecipesInput
  }

  export type RecipeGroupUncheckedCreateWithoutRecipeInput = {
    group_id: string
    shared_by: string
    can_comment?: boolean
    shared_at?: Date | string
  }

  export type RecipeGroupCreateOrConnectWithoutRecipeInput = {
    where: RecipeGroupWhereUniqueInput
    create: XOR<RecipeGroupCreateWithoutRecipeInput, RecipeGroupUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeGroupCreateManyRecipeInputEnvelope = {
    data: RecipeGroupCreateManyRecipeInput | RecipeGroupCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRecipesInput = {
    update: XOR<UserUpdateWithoutRecipesInput, UserUncheckedUpdateWithoutRecipesInput>
    create: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecipesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecipesInput, UserUncheckedUpdateWithoutRecipesInput>
  }

  export type UserUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    userGroups?: UserGroupUpdateManyWithoutUserNestedInput
    shoppingLists?: ShoppingListUpdateManyWithoutUserNestedInput
    sharedRecipes?: RecipeGroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    userGroups?: UserGroupUncheckedUpdateManyWithoutUserNestedInput
    shoppingLists?: ShoppingListUncheckedUpdateManyWithoutUserNestedInput
    sharedRecipes?: RecipeGroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IngredientUpsertWithWhereUniqueWithoutRecipeInput = {
    where: IngredientWhereUniqueInput
    update: XOR<IngredientUpdateWithoutRecipeInput, IngredientUncheckedUpdateWithoutRecipeInput>
    create: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput>
  }

  export type IngredientUpdateWithWhereUniqueWithoutRecipeInput = {
    where: IngredientWhereUniqueInput
    data: XOR<IngredientUpdateWithoutRecipeInput, IngredientUncheckedUpdateWithoutRecipeInput>
  }

  export type IngredientUpdateManyWithWhereWithoutRecipeInput = {
    where: IngredientScalarWhereInput
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyWithoutRecipeInput>
  }

  export type CookingStepUpsertWithWhereUniqueWithoutRecipeInput = {
    where: CookingStepWhereUniqueInput
    update: XOR<CookingStepUpdateWithoutRecipeInput, CookingStepUncheckedUpdateWithoutRecipeInput>
    create: XOR<CookingStepCreateWithoutRecipeInput, CookingStepUncheckedCreateWithoutRecipeInput>
  }

  export type CookingStepUpdateWithWhereUniqueWithoutRecipeInput = {
    where: CookingStepWhereUniqueInput
    data: XOR<CookingStepUpdateWithoutRecipeInput, CookingStepUncheckedUpdateWithoutRecipeInput>
  }

  export type CookingStepUpdateManyWithWhereWithoutRecipeInput = {
    where: CookingStepScalarWhereInput
    data: XOR<CookingStepUpdateManyMutationInput, CookingStepUncheckedUpdateManyWithoutRecipeInput>
  }

  export type CookingStepScalarWhereInput = {
    AND?: CookingStepScalarWhereInput | CookingStepScalarWhereInput[]
    OR?: CookingStepScalarWhereInput[]
    NOT?: CookingStepScalarWhereInput | CookingStepScalarWhereInput[]
    id?: UuidFilter<"CookingStep"> | string
    recipe_id?: UuidFilter<"CookingStep"> | string
    step_number?: IntFilter<"CookingStep"> | number
    instruction?: StringFilter<"CookingStep"> | string
    duration_min?: IntNullableFilter<"CookingStep"> | number | null
  }

  export type RecipeImageUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeImageWhereUniqueInput
    update: XOR<RecipeImageUpdateWithoutRecipeInput, RecipeImageUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeImageCreateWithoutRecipeInput, RecipeImageUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeImageUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeImageWhereUniqueInput
    data: XOR<RecipeImageUpdateWithoutRecipeInput, RecipeImageUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeImageUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeImageScalarWhereInput
    data: XOR<RecipeImageUpdateManyMutationInput, RecipeImageUncheckedUpdateManyWithoutRecipeInput>
  }

  export type RecipeImageScalarWhereInput = {
    AND?: RecipeImageScalarWhereInput | RecipeImageScalarWhereInput[]
    OR?: RecipeImageScalarWhereInput[]
    NOT?: RecipeImageScalarWhereInput | RecipeImageScalarWhereInput[]
    id?: UuidFilter<"RecipeImage"> | string
    recipe_id?: UuidFilter<"RecipeImage"> | string
    storage_url?: StringFilter<"RecipeImage"> | string
    provider?: StringFilter<"RecipeImage"> | string
    storage_key?: StringFilter<"RecipeImage"> | string
    is_primary?: BoolFilter<"RecipeImage"> | boolean
    mime_type?: StringFilter<"RecipeImage"> | string
    uploaded_at?: DateTimeFilter<"RecipeImage"> | Date | string
  }

  export type RecipeTagUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeTagWhereUniqueInput
    update: XOR<RecipeTagUpdateWithoutRecipeInput, RecipeTagUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeTagCreateWithoutRecipeInput, RecipeTagUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeTagUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeTagWhereUniqueInput
    data: XOR<RecipeTagUpdateWithoutRecipeInput, RecipeTagUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeTagUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeTagScalarWhereInput
    data: XOR<RecipeTagUpdateManyMutationInput, RecipeTagUncheckedUpdateManyWithoutRecipeInput>
  }

  export type RecipeTagScalarWhereInput = {
    AND?: RecipeTagScalarWhereInput | RecipeTagScalarWhereInput[]
    OR?: RecipeTagScalarWhereInput[]
    NOT?: RecipeTagScalarWhereInput | RecipeTagScalarWhereInput[]
    recipe_id?: UuidFilter<"RecipeTag"> | string
    tag_id?: UuidFilter<"RecipeTag"> | string
  }

  export type RecipeGroupUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeGroupWhereUniqueInput
    update: XOR<RecipeGroupUpdateWithoutRecipeInput, RecipeGroupUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeGroupCreateWithoutRecipeInput, RecipeGroupUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeGroupUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeGroupWhereUniqueInput
    data: XOR<RecipeGroupUpdateWithoutRecipeInput, RecipeGroupUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeGroupUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeGroupScalarWhereInput
    data: XOR<RecipeGroupUpdateManyMutationInput, RecipeGroupUncheckedUpdateManyWithoutRecipeInput>
  }

  export type RecipeCreateWithoutIngredientsInput = {
    id?: string
    title: string
    description?: string | null
    time_required_min?: number | null
    difficulty?: string | null
    servings?: number | null
    is_public?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    author: UserCreateNestedOneWithoutRecipesInput
    steps?: CookingStepCreateNestedManyWithoutRecipeInput
    images?: RecipeImageCreateNestedManyWithoutRecipeInput
    tags?: RecipeTagCreateNestedManyWithoutRecipeInput
    groups?: RecipeGroupCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutIngredientsInput = {
    id?: string
    author_id: string
    title: string
    description?: string | null
    time_required_min?: number | null
    difficulty?: string | null
    servings?: number | null
    is_public?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    steps?: CookingStepUncheckedCreateNestedManyWithoutRecipeInput
    images?: RecipeImageUncheckedCreateNestedManyWithoutRecipeInput
    tags?: RecipeTagUncheckedCreateNestedManyWithoutRecipeInput
    groups?: RecipeGroupUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutIngredientsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
  }

  export type UnitCreateWithoutIngredientsInput = {
    id?: string
    name: string
    abbreviation: string
    unit_type: $Enums.UnitType
    shoppingItems?: ShoppingItemCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutIngredientsInput = {
    id?: string
    name: string
    abbreviation: string
    unit_type: $Enums.UnitType
    shoppingItems?: ShoppingItemUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutIngredientsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutIngredientsInput, UnitUncheckedCreateWithoutIngredientsInput>
  }

  export type ShoppingItemCreateWithoutIngredientInput = {
    id?: string
    custom_name?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    is_checked?: boolean
    list: ShoppingListCreateNestedOneWithoutItemsInput
    unit: UnitCreateNestedOneWithoutShoppingItemsInput
  }

  export type ShoppingItemUncheckedCreateWithoutIngredientInput = {
    id?: string
    list_id: string
    unit_id: string
    custom_name?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    is_checked?: boolean
  }

  export type ShoppingItemCreateOrConnectWithoutIngredientInput = {
    where: ShoppingItemWhereUniqueInput
    create: XOR<ShoppingItemCreateWithoutIngredientInput, ShoppingItemUncheckedCreateWithoutIngredientInput>
  }

  export type ShoppingItemCreateManyIngredientInputEnvelope = {
    data: ShoppingItemCreateManyIngredientInput | ShoppingItemCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type RecipeUpsertWithoutIngredientsInput = {
    update: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type RecipeUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_required_min?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
    steps?: CookingStepUpdateManyWithoutRecipeNestedInput
    images?: RecipeImageUpdateManyWithoutRecipeNestedInput
    tags?: RecipeTagUpdateManyWithoutRecipeNestedInput
    groups?: RecipeGroupUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_required_min?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: CookingStepUncheckedUpdateManyWithoutRecipeNestedInput
    images?: RecipeImageUncheckedUpdateManyWithoutRecipeNestedInput
    tags?: RecipeTagUncheckedUpdateManyWithoutRecipeNestedInput
    groups?: RecipeGroupUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type UnitUpsertWithoutIngredientsInput = {
    update: XOR<UnitUpdateWithoutIngredientsInput, UnitUncheckedUpdateWithoutIngredientsInput>
    create: XOR<UnitCreateWithoutIngredientsInput, UnitUncheckedCreateWithoutIngredientsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutIngredientsInput, UnitUncheckedUpdateWithoutIngredientsInput>
  }

  export type UnitUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    unit_type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    shoppingItems?: ShoppingItemUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    unit_type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    shoppingItems?: ShoppingItemUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type ShoppingItemUpsertWithWhereUniqueWithoutIngredientInput = {
    where: ShoppingItemWhereUniqueInput
    update: XOR<ShoppingItemUpdateWithoutIngredientInput, ShoppingItemUncheckedUpdateWithoutIngredientInput>
    create: XOR<ShoppingItemCreateWithoutIngredientInput, ShoppingItemUncheckedCreateWithoutIngredientInput>
  }

  export type ShoppingItemUpdateWithWhereUniqueWithoutIngredientInput = {
    where: ShoppingItemWhereUniqueInput
    data: XOR<ShoppingItemUpdateWithoutIngredientInput, ShoppingItemUncheckedUpdateWithoutIngredientInput>
  }

  export type ShoppingItemUpdateManyWithWhereWithoutIngredientInput = {
    where: ShoppingItemScalarWhereInput
    data: XOR<ShoppingItemUpdateManyMutationInput, ShoppingItemUncheckedUpdateManyWithoutIngredientInput>
  }

  export type RecipeCreateWithoutStepsInput = {
    id?: string
    title: string
    description?: string | null
    time_required_min?: number | null
    difficulty?: string | null
    servings?: number | null
    is_public?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    author: UserCreateNestedOneWithoutRecipesInput
    ingredients?: IngredientCreateNestedManyWithoutRecipeInput
    images?: RecipeImageCreateNestedManyWithoutRecipeInput
    tags?: RecipeTagCreateNestedManyWithoutRecipeInput
    groups?: RecipeGroupCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutStepsInput = {
    id?: string
    author_id: string
    title: string
    description?: string | null
    time_required_min?: number | null
    difficulty?: string | null
    servings?: number | null
    is_public?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingredients?: IngredientUncheckedCreateNestedManyWithoutRecipeInput
    images?: RecipeImageUncheckedCreateNestedManyWithoutRecipeInput
    tags?: RecipeTagUncheckedCreateNestedManyWithoutRecipeInput
    groups?: RecipeGroupUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutStepsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
  }

  export type RecipeUpsertWithoutStepsInput = {
    update: XOR<RecipeUpdateWithoutStepsInput, RecipeUncheckedUpdateWithoutStepsInput>
    create: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutStepsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutStepsInput, RecipeUncheckedUpdateWithoutStepsInput>
  }

  export type RecipeUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_required_min?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: IngredientUpdateManyWithoutRecipeNestedInput
    images?: RecipeImageUpdateManyWithoutRecipeNestedInput
    tags?: RecipeTagUpdateManyWithoutRecipeNestedInput
    groups?: RecipeGroupUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_required_min?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUncheckedUpdateManyWithoutRecipeNestedInput
    images?: RecipeImageUncheckedUpdateManyWithoutRecipeNestedInput
    tags?: RecipeTagUncheckedUpdateManyWithoutRecipeNestedInput
    groups?: RecipeGroupUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeTagCreateWithoutTagInput = {
    recipe: RecipeCreateNestedOneWithoutTagsInput
  }

  export type RecipeTagUncheckedCreateWithoutTagInput = {
    recipe_id: string
  }

  export type RecipeTagCreateOrConnectWithoutTagInput = {
    where: RecipeTagWhereUniqueInput
    create: XOR<RecipeTagCreateWithoutTagInput, RecipeTagUncheckedCreateWithoutTagInput>
  }

  export type RecipeTagCreateManyTagInputEnvelope = {
    data: RecipeTagCreateManyTagInput | RecipeTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type RecipeTagUpsertWithWhereUniqueWithoutTagInput = {
    where: RecipeTagWhereUniqueInput
    update: XOR<RecipeTagUpdateWithoutTagInput, RecipeTagUncheckedUpdateWithoutTagInput>
    create: XOR<RecipeTagCreateWithoutTagInput, RecipeTagUncheckedCreateWithoutTagInput>
  }

  export type RecipeTagUpdateWithWhereUniqueWithoutTagInput = {
    where: RecipeTagWhereUniqueInput
    data: XOR<RecipeTagUpdateWithoutTagInput, RecipeTagUncheckedUpdateWithoutTagInput>
  }

  export type RecipeTagUpdateManyWithWhereWithoutTagInput = {
    where: RecipeTagScalarWhereInput
    data: XOR<RecipeTagUpdateManyMutationInput, RecipeTagUncheckedUpdateManyWithoutTagInput>
  }

  export type RecipeCreateWithoutTagsInput = {
    id?: string
    title: string
    description?: string | null
    time_required_min?: number | null
    difficulty?: string | null
    servings?: number | null
    is_public?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    author: UserCreateNestedOneWithoutRecipesInput
    ingredients?: IngredientCreateNestedManyWithoutRecipeInput
    steps?: CookingStepCreateNestedManyWithoutRecipeInput
    images?: RecipeImageCreateNestedManyWithoutRecipeInput
    groups?: RecipeGroupCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutTagsInput = {
    id?: string
    author_id: string
    title: string
    description?: string | null
    time_required_min?: number | null
    difficulty?: string | null
    servings?: number | null
    is_public?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingredients?: IngredientUncheckedCreateNestedManyWithoutRecipeInput
    steps?: CookingStepUncheckedCreateNestedManyWithoutRecipeInput
    images?: RecipeImageUncheckedCreateNestedManyWithoutRecipeInput
    groups?: RecipeGroupUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutTagsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutTagsInput, RecipeUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutRecipesInput = {
    id?: string
    name: string
  }

  export type TagUncheckedCreateWithoutRecipesInput = {
    id?: string
    name: string
  }

  export type TagCreateOrConnectWithoutRecipesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutRecipesInput, TagUncheckedCreateWithoutRecipesInput>
  }

  export type RecipeUpsertWithoutTagsInput = {
    update: XOR<RecipeUpdateWithoutTagsInput, RecipeUncheckedUpdateWithoutTagsInput>
    create: XOR<RecipeCreateWithoutTagsInput, RecipeUncheckedCreateWithoutTagsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutTagsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutTagsInput, RecipeUncheckedUpdateWithoutTagsInput>
  }

  export type RecipeUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_required_min?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: IngredientUpdateManyWithoutRecipeNestedInput
    steps?: CookingStepUpdateManyWithoutRecipeNestedInput
    images?: RecipeImageUpdateManyWithoutRecipeNestedInput
    groups?: RecipeGroupUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_required_min?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: CookingStepUncheckedUpdateManyWithoutRecipeNestedInput
    images?: RecipeImageUncheckedUpdateManyWithoutRecipeNestedInput
    groups?: RecipeGroupUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type TagUpsertWithoutRecipesInput = {
    update: XOR<TagUpdateWithoutRecipesInput, TagUncheckedUpdateWithoutRecipesInput>
    create: XOR<TagCreateWithoutRecipesInput, TagUncheckedCreateWithoutRecipesInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutRecipesInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutRecipesInput, TagUncheckedUpdateWithoutRecipesInput>
  }

  export type TagUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeCreateWithoutImagesInput = {
    id?: string
    title: string
    description?: string | null
    time_required_min?: number | null
    difficulty?: string | null
    servings?: number | null
    is_public?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    author: UserCreateNestedOneWithoutRecipesInput
    ingredients?: IngredientCreateNestedManyWithoutRecipeInput
    steps?: CookingStepCreateNestedManyWithoutRecipeInput
    tags?: RecipeTagCreateNestedManyWithoutRecipeInput
    groups?: RecipeGroupCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutImagesInput = {
    id?: string
    author_id: string
    title: string
    description?: string | null
    time_required_min?: number | null
    difficulty?: string | null
    servings?: number | null
    is_public?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingredients?: IngredientUncheckedCreateNestedManyWithoutRecipeInput
    steps?: CookingStepUncheckedCreateNestedManyWithoutRecipeInput
    tags?: RecipeTagUncheckedCreateNestedManyWithoutRecipeInput
    groups?: RecipeGroupUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutImagesInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutImagesInput, RecipeUncheckedCreateWithoutImagesInput>
  }

  export type RecipeUpsertWithoutImagesInput = {
    update: XOR<RecipeUpdateWithoutImagesInput, RecipeUncheckedUpdateWithoutImagesInput>
    create: XOR<RecipeCreateWithoutImagesInput, RecipeUncheckedCreateWithoutImagesInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutImagesInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutImagesInput, RecipeUncheckedUpdateWithoutImagesInput>
  }

  export type RecipeUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_required_min?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: IngredientUpdateManyWithoutRecipeNestedInput
    steps?: CookingStepUpdateManyWithoutRecipeNestedInput
    tags?: RecipeTagUpdateManyWithoutRecipeNestedInput
    groups?: RecipeGroupUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_required_min?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: CookingStepUncheckedUpdateManyWithoutRecipeNestedInput
    tags?: RecipeTagUncheckedUpdateManyWithoutRecipeNestedInput
    groups?: RecipeGroupUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type UserCreateWithoutShoppingListsInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    created_at?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    userGroups?: UserGroupCreateNestedManyWithoutUserInput
    recipes?: RecipeCreateNestedManyWithoutAuthorInput
    sharedRecipes?: RecipeGroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShoppingListsInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    created_at?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    userGroups?: UserGroupUncheckedCreateNestedManyWithoutUserInput
    recipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput
    sharedRecipes?: RecipeGroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShoppingListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShoppingListsInput, UserUncheckedCreateWithoutShoppingListsInput>
  }

  export type ShoppingItemCreateWithoutListInput = {
    id?: string
    custom_name?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    is_checked?: boolean
    ingredient?: IngredientCreateNestedOneWithoutShoppingItemsInput
    unit: UnitCreateNestedOneWithoutShoppingItemsInput
  }

  export type ShoppingItemUncheckedCreateWithoutListInput = {
    id?: string
    ingredient_id?: string | null
    unit_id: string
    custom_name?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    is_checked?: boolean
  }

  export type ShoppingItemCreateOrConnectWithoutListInput = {
    where: ShoppingItemWhereUniqueInput
    create: XOR<ShoppingItemCreateWithoutListInput, ShoppingItemUncheckedCreateWithoutListInput>
  }

  export type ShoppingItemCreateManyListInputEnvelope = {
    data: ShoppingItemCreateManyListInput | ShoppingItemCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutShoppingListsInput = {
    update: XOR<UserUpdateWithoutShoppingListsInput, UserUncheckedUpdateWithoutShoppingListsInput>
    create: XOR<UserCreateWithoutShoppingListsInput, UserUncheckedCreateWithoutShoppingListsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShoppingListsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShoppingListsInput, UserUncheckedUpdateWithoutShoppingListsInput>
  }

  export type UserUpdateWithoutShoppingListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    userGroups?: UserGroupUpdateManyWithoutUserNestedInput
    recipes?: RecipeUpdateManyWithoutAuthorNestedInput
    sharedRecipes?: RecipeGroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShoppingListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    userGroups?: UserGroupUncheckedUpdateManyWithoutUserNestedInput
    recipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput
    sharedRecipes?: RecipeGroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShoppingItemUpsertWithWhereUniqueWithoutListInput = {
    where: ShoppingItemWhereUniqueInput
    update: XOR<ShoppingItemUpdateWithoutListInput, ShoppingItemUncheckedUpdateWithoutListInput>
    create: XOR<ShoppingItemCreateWithoutListInput, ShoppingItemUncheckedCreateWithoutListInput>
  }

  export type ShoppingItemUpdateWithWhereUniqueWithoutListInput = {
    where: ShoppingItemWhereUniqueInput
    data: XOR<ShoppingItemUpdateWithoutListInput, ShoppingItemUncheckedUpdateWithoutListInput>
  }

  export type ShoppingItemUpdateManyWithWhereWithoutListInput = {
    where: ShoppingItemScalarWhereInput
    data: XOR<ShoppingItemUpdateManyMutationInput, ShoppingItemUncheckedUpdateManyWithoutListInput>
  }

  export type ShoppingListCreateWithoutItemsInput = {
    id?: string
    name: string
    is_complete?: boolean
    completed_at?: Date | string | null
    user: UserCreateNestedOneWithoutShoppingListsInput
  }

  export type ShoppingListUncheckedCreateWithoutItemsInput = {
    id?: string
    user_id: string
    name: string
    is_complete?: boolean
    completed_at?: Date | string | null
  }

  export type ShoppingListCreateOrConnectWithoutItemsInput = {
    where: ShoppingListWhereUniqueInput
    create: XOR<ShoppingListCreateWithoutItemsInput, ShoppingListUncheckedCreateWithoutItemsInput>
  }

  export type IngredientCreateWithoutShoppingItemsInput = {
    id?: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    calories?: Decimal | DecimalJsLike | number | string | null
    protein_g?: Decimal | DecimalJsLike | number | string | null
    carbs_g?: Decimal | DecimalJsLike | number | string | null
    fat_g?: Decimal | DecimalJsLike | number | string | null
    sort_order?: number
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
    unit: UnitCreateNestedOneWithoutIngredientsInput
  }

  export type IngredientUncheckedCreateWithoutShoppingItemsInput = {
    id?: string
    recipe_id: string
    unit_id: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    calories?: Decimal | DecimalJsLike | number | string | null
    protein_g?: Decimal | DecimalJsLike | number | string | null
    carbs_g?: Decimal | DecimalJsLike | number | string | null
    fat_g?: Decimal | DecimalJsLike | number | string | null
    sort_order?: number
  }

  export type IngredientCreateOrConnectWithoutShoppingItemsInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutShoppingItemsInput, IngredientUncheckedCreateWithoutShoppingItemsInput>
  }

  export type UnitCreateWithoutShoppingItemsInput = {
    id?: string
    name: string
    abbreviation: string
    unit_type: $Enums.UnitType
    ingredients?: IngredientCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutShoppingItemsInput = {
    id?: string
    name: string
    abbreviation: string
    unit_type: $Enums.UnitType
    ingredients?: IngredientUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutShoppingItemsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutShoppingItemsInput, UnitUncheckedCreateWithoutShoppingItemsInput>
  }

  export type ShoppingListUpsertWithoutItemsInput = {
    update: XOR<ShoppingListUpdateWithoutItemsInput, ShoppingListUncheckedUpdateWithoutItemsInput>
    create: XOR<ShoppingListCreateWithoutItemsInput, ShoppingListUncheckedCreateWithoutItemsInput>
    where?: ShoppingListWhereInput
  }

  export type ShoppingListUpdateToOneWithWhereWithoutItemsInput = {
    where?: ShoppingListWhereInput
    data: XOR<ShoppingListUpdateWithoutItemsInput, ShoppingListUncheckedUpdateWithoutItemsInput>
  }

  export type ShoppingListUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutShoppingListsNestedInput
  }

  export type ShoppingListUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IngredientUpsertWithoutShoppingItemsInput = {
    update: XOR<IngredientUpdateWithoutShoppingItemsInput, IngredientUncheckedUpdateWithoutShoppingItemsInput>
    create: XOR<IngredientCreateWithoutShoppingItemsInput, IngredientUncheckedCreateWithoutShoppingItemsInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutShoppingItemsInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutShoppingItemsInput, IngredientUncheckedUpdateWithoutShoppingItemsInput>
  }

  export type IngredientUpdateWithoutShoppingItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calories?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
    unit?: UnitUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type IngredientUncheckedUpdateWithoutShoppingItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calories?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type UnitUpsertWithoutShoppingItemsInput = {
    update: XOR<UnitUpdateWithoutShoppingItemsInput, UnitUncheckedUpdateWithoutShoppingItemsInput>
    create: XOR<UnitCreateWithoutShoppingItemsInput, UnitUncheckedCreateWithoutShoppingItemsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutShoppingItemsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutShoppingItemsInput, UnitUncheckedUpdateWithoutShoppingItemsInput>
  }

  export type UnitUpdateWithoutShoppingItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    unit_type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    ingredients?: IngredientUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutShoppingItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    unit_type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    ingredients?: IngredientUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type GroupCreateWithoutRecipeGroupsInput = {
    id?: string
    name: string
    description?: string | null
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    userGroups?: UserGroupCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutRecipeGroupsInput = {
    id?: string
    owner_id: string
    name: string
    description?: string | null
    userGroups?: UserGroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutRecipeGroupsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutRecipeGroupsInput, GroupUncheckedCreateWithoutRecipeGroupsInput>
  }

  export type RecipeCreateWithoutGroupsInput = {
    id?: string
    title: string
    description?: string | null
    time_required_min?: number | null
    difficulty?: string | null
    servings?: number | null
    is_public?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    author: UserCreateNestedOneWithoutRecipesInput
    ingredients?: IngredientCreateNestedManyWithoutRecipeInput
    steps?: CookingStepCreateNestedManyWithoutRecipeInput
    images?: RecipeImageCreateNestedManyWithoutRecipeInput
    tags?: RecipeTagCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutGroupsInput = {
    id?: string
    author_id: string
    title: string
    description?: string | null
    time_required_min?: number | null
    difficulty?: string | null
    servings?: number | null
    is_public?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingredients?: IngredientUncheckedCreateNestedManyWithoutRecipeInput
    steps?: CookingStepUncheckedCreateNestedManyWithoutRecipeInput
    images?: RecipeImageUncheckedCreateNestedManyWithoutRecipeInput
    tags?: RecipeTagUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutGroupsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutGroupsInput, RecipeUncheckedCreateWithoutGroupsInput>
  }

  export type UserCreateWithoutSharedRecipesInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    created_at?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    userGroups?: UserGroupCreateNestedManyWithoutUserInput
    recipes?: RecipeCreateNestedManyWithoutAuthorInput
    shoppingLists?: ShoppingListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSharedRecipesInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    created_at?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    userGroups?: UserGroupUncheckedCreateNestedManyWithoutUserInput
    recipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput
    shoppingLists?: ShoppingListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSharedRecipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharedRecipesInput, UserUncheckedCreateWithoutSharedRecipesInput>
  }

  export type GroupUpsertWithoutRecipeGroupsInput = {
    update: XOR<GroupUpdateWithoutRecipeGroupsInput, GroupUncheckedUpdateWithoutRecipeGroupsInput>
    create: XOR<GroupCreateWithoutRecipeGroupsInput, GroupUncheckedCreateWithoutRecipeGroupsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutRecipeGroupsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutRecipeGroupsInput, GroupUncheckedUpdateWithoutRecipeGroupsInput>
  }

  export type GroupUpdateWithoutRecipeGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    userGroups?: UserGroupUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutRecipeGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userGroups?: UserGroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type RecipeUpsertWithoutGroupsInput = {
    update: XOR<RecipeUpdateWithoutGroupsInput, RecipeUncheckedUpdateWithoutGroupsInput>
    create: XOR<RecipeCreateWithoutGroupsInput, RecipeUncheckedCreateWithoutGroupsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutGroupsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutGroupsInput, RecipeUncheckedUpdateWithoutGroupsInput>
  }

  export type RecipeUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_required_min?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: IngredientUpdateManyWithoutRecipeNestedInput
    steps?: CookingStepUpdateManyWithoutRecipeNestedInput
    images?: RecipeImageUpdateManyWithoutRecipeNestedInput
    tags?: RecipeTagUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_required_min?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: CookingStepUncheckedUpdateManyWithoutRecipeNestedInput
    images?: RecipeImageUncheckedUpdateManyWithoutRecipeNestedInput
    tags?: RecipeTagUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type UserUpsertWithoutSharedRecipesInput = {
    update: XOR<UserUpdateWithoutSharedRecipesInput, UserUncheckedUpdateWithoutSharedRecipesInput>
    create: XOR<UserCreateWithoutSharedRecipesInput, UserUncheckedCreateWithoutSharedRecipesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSharedRecipesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSharedRecipesInput, UserUncheckedUpdateWithoutSharedRecipesInput>
  }

  export type UserUpdateWithoutSharedRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    userGroups?: UserGroupUpdateManyWithoutUserNestedInput
    recipes?: RecipeUpdateManyWithoutAuthorNestedInput
    shoppingLists?: ShoppingListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSharedRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    userGroups?: UserGroupUncheckedUpdateManyWithoutUserNestedInput
    recipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput
    shoppingLists?: ShoppingListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type UserGroupCreateManyUserInput = {
    role_id: string
    group_id: string
    is_owner?: boolean
    joined_at?: Date | string
  }

  export type RecipeCreateManyAuthorInput = {
    id?: string
    title: string
    description?: string | null
    time_required_min?: number | null
    difficulty?: string | null
    servings?: number | null
    is_public?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ShoppingListCreateManyUserInput = {
    id?: string
    name: string
    is_complete?: boolean
    completed_at?: Date | string | null
  }

  export type RecipeGroupCreateManyUserInput = {
    group_id: string
    recipe_id: string
    can_comment?: boolean
    shared_at?: Date | string
  }

  export type GroupUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userGroups?: UserGroupUpdateManyWithoutGroupNestedInput
    recipeGroups?: RecipeGroupUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userGroups?: UserGroupUncheckedUpdateManyWithoutGroupNestedInput
    recipeGroups?: RecipeGroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserGroupUpdateWithoutUserInput = {
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUserGroupsNestedInput
    group?: GroupUpdateOneRequiredWithoutUserGroupsNestedInput
  }

  export type UserGroupUncheckedUpdateWithoutUserInput = {
    role_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGroupUncheckedUpdateManyWithoutUserInput = {
    role_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_required_min?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUpdateManyWithoutRecipeNestedInput
    steps?: CookingStepUpdateManyWithoutRecipeNestedInput
    images?: RecipeImageUpdateManyWithoutRecipeNestedInput
    tags?: RecipeTagUpdateManyWithoutRecipeNestedInput
    groups?: RecipeGroupUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_required_min?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: CookingStepUncheckedUpdateManyWithoutRecipeNestedInput
    images?: RecipeImageUncheckedUpdateManyWithoutRecipeNestedInput
    tags?: RecipeTagUncheckedUpdateManyWithoutRecipeNestedInput
    groups?: RecipeGroupUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    time_required_min?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: ShoppingItemUpdateManyWithoutListNestedInput
  }

  export type ShoppingListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: ShoppingItemUncheckedUpdateManyWithoutListNestedInput
  }

  export type ShoppingListUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecipeGroupUpdateWithoutUserInput = {
    can_comment?: BoolFieldUpdateOperationsInput | boolean
    shared_at?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutRecipeGroupsNestedInput
    recipe?: RecipeUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type RecipeGroupUncheckedUpdateWithoutUserInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    can_comment?: BoolFieldUpdateOperationsInput | boolean
    shared_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeGroupUncheckedUpdateManyWithoutUserInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    can_comment?: BoolFieldUpdateOperationsInput | boolean
    shared_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGroupCreateManyRoleInput = {
    user_id: string
    group_id: string
    is_owner?: boolean
    joined_at?: Date | string
  }

  export type UserGroupUpdateWithoutRoleInput = {
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserGroupsNestedInput
    group?: GroupUpdateOneRequiredWithoutUserGroupsNestedInput
  }

  export type UserGroupUncheckedUpdateWithoutRoleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGroupUncheckedUpdateManyWithoutRoleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGroupCreateManyGroupInput = {
    user_id: string
    role_id: string
    is_owner?: boolean
    joined_at?: Date | string
  }

  export type RecipeGroupCreateManyGroupInput = {
    recipe_id: string
    shared_by: string
    can_comment?: boolean
    shared_at?: Date | string
  }

  export type UserGroupUpdateWithoutGroupInput = {
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserGroupsNestedInput
    role?: RoleUpdateOneRequiredWithoutUserGroupsNestedInput
  }

  export type UserGroupUncheckedUpdateWithoutGroupInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGroupUncheckedUpdateManyWithoutGroupInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeGroupUpdateWithoutGroupInput = {
    can_comment?: BoolFieldUpdateOperationsInput | boolean
    shared_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneRequiredWithoutGroupsNestedInput
    user?: UserUpdateOneRequiredWithoutSharedRecipesNestedInput
  }

  export type RecipeGroupUncheckedUpdateWithoutGroupInput = {
    recipe_id?: StringFieldUpdateOperationsInput | string
    shared_by?: StringFieldUpdateOperationsInput | string
    can_comment?: BoolFieldUpdateOperationsInput | boolean
    shared_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeGroupUncheckedUpdateManyWithoutGroupInput = {
    recipe_id?: StringFieldUpdateOperationsInput | string
    shared_by?: StringFieldUpdateOperationsInput | string
    can_comment?: BoolFieldUpdateOperationsInput | boolean
    shared_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientCreateManyUnitInput = {
    id?: string
    recipe_id: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    calories?: Decimal | DecimalJsLike | number | string | null
    protein_g?: Decimal | DecimalJsLike | number | string | null
    carbs_g?: Decimal | DecimalJsLike | number | string | null
    fat_g?: Decimal | DecimalJsLike | number | string | null
    sort_order?: number
  }

  export type ShoppingItemCreateManyUnitInput = {
    id?: string
    list_id: string
    ingredient_id?: string | null
    custom_name?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    is_checked?: boolean
  }

  export type IngredientUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calories?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
    shoppingItems?: ShoppingItemUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calories?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    shoppingItems?: ShoppingItemUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calories?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type ShoppingItemUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    custom_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_checked?: BoolFieldUpdateOperationsInput | boolean
    list?: ShoppingListUpdateOneRequiredWithoutItemsNestedInput
    ingredient?: IngredientUpdateOneWithoutShoppingItemsNestedInput
  }

  export type ShoppingItemUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    list_id?: StringFieldUpdateOperationsInput | string
    ingredient_id?: NullableStringFieldUpdateOperationsInput | string | null
    custom_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_checked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoppingItemUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    list_id?: StringFieldUpdateOperationsInput | string
    ingredient_id?: NullableStringFieldUpdateOperationsInput | string | null
    custom_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_checked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IngredientCreateManyRecipeInput = {
    id?: string
    unit_id: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    calories?: Decimal | DecimalJsLike | number | string | null
    protein_g?: Decimal | DecimalJsLike | number | string | null
    carbs_g?: Decimal | DecimalJsLike | number | string | null
    fat_g?: Decimal | DecimalJsLike | number | string | null
    sort_order?: number
  }

  export type CookingStepCreateManyRecipeInput = {
    id?: string
    step_number: number
    instruction: string
    duration_min?: number | null
  }

  export type RecipeImageCreateManyRecipeInput = {
    id?: string
    storage_url: string
    provider: string
    storage_key: string
    is_primary?: boolean
    mime_type: string
    uploaded_at?: Date | string
  }

  export type RecipeTagCreateManyRecipeInput = {
    tag_id: string
  }

  export type RecipeGroupCreateManyRecipeInput = {
    group_id: string
    shared_by: string
    can_comment?: boolean
    shared_at?: Date | string
  }

  export type IngredientUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calories?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    unit?: UnitUpdateOneRequiredWithoutIngredientsNestedInput
    shoppingItems?: ShoppingItemUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calories?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    shoppingItems?: ShoppingItemUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calories?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    protein_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fat_g?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type CookingStepUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    step_number?: IntFieldUpdateOperationsInput | number
    instruction?: StringFieldUpdateOperationsInput | string
    duration_min?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CookingStepUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    step_number?: IntFieldUpdateOperationsInput | number
    instruction?: StringFieldUpdateOperationsInput | string
    duration_min?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CookingStepUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    step_number?: IntFieldUpdateOperationsInput | number
    instruction?: StringFieldUpdateOperationsInput | string
    duration_min?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RecipeImageUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    storage_key?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    mime_type?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeImageUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    storage_key?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    mime_type?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeImageUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    storage_key?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    mime_type?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeTagUpdateWithoutRecipeInput = {
    tag?: TagUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type RecipeTagUncheckedUpdateWithoutRecipeInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeTagUncheckedUpdateManyWithoutRecipeInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeGroupUpdateWithoutRecipeInput = {
    can_comment?: BoolFieldUpdateOperationsInput | boolean
    shared_at?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutRecipeGroupsNestedInput
    user?: UserUpdateOneRequiredWithoutSharedRecipesNestedInput
  }

  export type RecipeGroupUncheckedUpdateWithoutRecipeInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    shared_by?: StringFieldUpdateOperationsInput | string
    can_comment?: BoolFieldUpdateOperationsInput | boolean
    shared_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeGroupUncheckedUpdateManyWithoutRecipeInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    shared_by?: StringFieldUpdateOperationsInput | string
    can_comment?: BoolFieldUpdateOperationsInput | boolean
    shared_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingItemCreateManyIngredientInput = {
    id?: string
    list_id: string
    unit_id: string
    custom_name?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    is_checked?: boolean
  }

  export type ShoppingItemUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    custom_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_checked?: BoolFieldUpdateOperationsInput | boolean
    list?: ShoppingListUpdateOneRequiredWithoutItemsNestedInput
    unit?: UnitUpdateOneRequiredWithoutShoppingItemsNestedInput
  }

  export type ShoppingItemUncheckedUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    list_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    custom_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_checked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoppingItemUncheckedUpdateManyWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    list_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    custom_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_checked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecipeTagCreateManyTagInput = {
    recipe_id: string
  }

  export type RecipeTagUpdateWithoutTagInput = {
    recipe?: RecipeUpdateOneRequiredWithoutTagsNestedInput
  }

  export type RecipeTagUncheckedUpdateWithoutTagInput = {
    recipe_id?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeTagUncheckedUpdateManyWithoutTagInput = {
    recipe_id?: StringFieldUpdateOperationsInput | string
  }

  export type ShoppingItemCreateManyListInput = {
    id?: string
    ingredient_id?: string | null
    unit_id: string
    custom_name?: string | null
    quantity: Decimal | DecimalJsLike | number | string
    is_checked?: boolean
  }

  export type ShoppingItemUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    custom_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_checked?: BoolFieldUpdateOperationsInput | boolean
    ingredient?: IngredientUpdateOneWithoutShoppingItemsNestedInput
    unit?: UnitUpdateOneRequiredWithoutShoppingItemsNestedInput
  }

  export type ShoppingItemUncheckedUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredient_id?: NullableStringFieldUpdateOperationsInput | string | null
    unit_id?: StringFieldUpdateOperationsInput | string
    custom_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_checked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoppingItemUncheckedUpdateManyWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredient_id?: NullableStringFieldUpdateOperationsInput | string | null
    unit_id?: StringFieldUpdateOperationsInput | string
    custom_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_checked?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}