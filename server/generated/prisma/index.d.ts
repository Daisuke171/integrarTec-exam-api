
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model Show
 * 
 */
export type Show = $Result.DefaultSelection<Prisma.$ShowPayload>
/**
 * Model ShowArtist
 * 
 */
export type ShowArtist = $Result.DefaultSelection<Prisma.$ShowArtistPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Artists
 * const artists = await prisma.artist.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Artists
   * const artists = await prisma.artist.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.show`: Exposes CRUD operations for the **Show** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shows
    * const shows = await prisma.show.findMany()
    * ```
    */
  get show(): Prisma.ShowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.showArtist`: Exposes CRUD operations for the **ShowArtist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShowArtists
    * const showArtists = await prisma.showArtist.findMany()
    * ```
    */
  get showArtist(): Prisma.ShowArtistDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Artist: 'Artist',
    Show: 'Show',
    ShowArtist: 'ShowArtist'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "artist" | "show" | "showArtist"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      Show: {
        payload: Prisma.$ShowPayload<ExtArgs>
        fields: Prisma.ShowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          findFirst: {
            args: Prisma.ShowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          findMany: {
            args: Prisma.ShowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>[]
          }
          create: {
            args: Prisma.ShowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          createMany: {
            args: Prisma.ShowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>[]
          }
          delete: {
            args: Prisma.ShowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          update: {
            args: Prisma.ShowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          deleteMany: {
            args: Prisma.ShowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>[]
          }
          upsert: {
            args: Prisma.ShowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          aggregate: {
            args: Prisma.ShowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShow>
          }
          groupBy: {
            args: Prisma.ShowGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowCountArgs<ExtArgs>
            result: $Utils.Optional<ShowCountAggregateOutputType> | number
          }
        }
      }
      ShowArtist: {
        payload: Prisma.$ShowArtistPayload<ExtArgs>
        fields: Prisma.ShowArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowArtistPayload>
          }
          findFirst: {
            args: Prisma.ShowArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowArtistPayload>
          }
          findMany: {
            args: Prisma.ShowArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowArtistPayload>[]
          }
          create: {
            args: Prisma.ShowArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowArtistPayload>
          }
          createMany: {
            args: Prisma.ShowArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShowArtistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowArtistPayload>[]
          }
          delete: {
            args: Prisma.ShowArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowArtistPayload>
          }
          update: {
            args: Prisma.ShowArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowArtistPayload>
          }
          deleteMany: {
            args: Prisma.ShowArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShowArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShowArtistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowArtistPayload>[]
          }
          upsert: {
            args: Prisma.ShowArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowArtistPayload>
          }
          aggregate: {
            args: Prisma.ShowArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShowArtist>
          }
          groupBy: {
            args: Prisma.ShowArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowArtistCountArgs<ExtArgs>
            result: $Utils.Optional<ShowArtistCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    artist?: ArtistOmit
    show?: ShowOmit
    showArtist?: ShowArtistOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    shows: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shows?: boolean | ArtistCountOutputTypeCountShowsArgs
  }

  // Custom InputTypes
  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountShowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowArtistWhereInput
  }


  /**
   * Count Type ShowCountOutputType
   */

  export type ShowCountOutputType = {
    artists: number
  }

  export type ShowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artists?: boolean | ShowCountOutputTypeCountArtistsArgs
  }

  // Custom InputTypes
  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCountOutputType
     */
    select?: ShowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeCountArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowArtistWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistMinAggregateOutputType = {
    id: string | null
    name: string | null
    members: string | null
    origin: string | null
    genres: string | null
    image: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    members: string | null
    origin: string | null
    genres: string | null
    image: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    name: number
    members: number
    origin: number
    genres: number
    image: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArtistMinAggregateInputType = {
    id?: true
    name?: true
    members?: true
    origin?: true
    genres?: true
    image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    name?: true
    members?: true
    origin?: true
    genres?: true
    image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    name?: true
    members?: true
    origin?: true
    genres?: true
    image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: string
    name: string
    members: string
    origin: string
    genres: string
    image: string
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: ArtistCountAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    members?: boolean
    origin?: boolean
    genres?: boolean
    image?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shows?: boolean | Artist$showsArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    members?: boolean
    origin?: boolean
    genres?: boolean
    image?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    members?: boolean
    origin?: boolean
    genres?: boolean
    image?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    id?: boolean
    name?: boolean
    members?: boolean
    origin?: boolean
    genres?: boolean
    image?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArtistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "members" | "origin" | "genres" | "image" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["artist"]>
  export type ArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shows?: boolean | Artist$showsArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArtistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      shows: Prisma.$ShowArtistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      members: string
      origin: string
      genres: string
      image: string
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }

  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistFindManyArgs>(args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
     */
    create<T extends ArtistCreateArgs>(args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistCreateManyArgs>(args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artists and returns the data saved in the database.
     * @param {ArtistCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
     */
    delete<T extends ArtistDeleteArgs>(args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistUpdateArgs>(args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistDeleteManyArgs>(args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistUpdateManyArgs>(args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists and returns the data updated in the database.
     * @param {ArtistUpdateManyAndReturnArgs} args - Arguments to update many Artists.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArtistUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
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
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shows<T extends Artist$showsArgs<ExtArgs> = {}>(args?: Subset<T, Artist$showsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Artist model
   */
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'String'>
    readonly name: FieldRef<"Artist", 'String'>
    readonly members: FieldRef<"Artist", 'String'>
    readonly origin: FieldRef<"Artist", 'String'>
    readonly genres: FieldRef<"Artist", 'String'>
    readonly image: FieldRef<"Artist", 'String'>
    readonly status: FieldRef<"Artist", 'Boolean'>
    readonly createdAt: FieldRef<"Artist", 'DateTime'>
    readonly updatedAt: FieldRef<"Artist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }

  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist createManyAndReturn
   */
  export type ArtistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist updateManyAndReturn
   */
  export type ArtistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }

  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to delete.
     */
    limit?: number
  }

  /**
   * Artist.shows
   */
  export type Artist$showsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowArtist
     */
    select?: ShowArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowArtist
     */
    omit?: ShowArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowArtistInclude<ExtArgs> | null
    where?: ShowArtistWhereInput
    orderBy?: ShowArtistOrderByWithRelationInput | ShowArtistOrderByWithRelationInput[]
    cursor?: ShowArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowArtistScalarFieldEnum | ShowArtistScalarFieldEnum[]
  }

  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
  }


  /**
   * Model Show
   */

  export type AggregateShow = {
    _count: ShowCountAggregateOutputType | null
    _min: ShowMinAggregateOutputType | null
    _max: ShowMaxAggregateOutputType | null
  }

  export type ShowMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowCountAggregateOutputType = {
    id: number
    name: number
    location: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShowMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Show to aggregate.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shows
    **/
    _count?: true | ShowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowMaxAggregateInputType
  }

  export type GetShowAggregateType<T extends ShowAggregateArgs> = {
        [P in keyof T & keyof AggregateShow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShow[P]>
      : GetScalarType<T[P], AggregateShow[P]>
  }




  export type ShowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowWhereInput
    orderBy?: ShowOrderByWithAggregationInput | ShowOrderByWithAggregationInput[]
    by: ShowScalarFieldEnum[] | ShowScalarFieldEnum
    having?: ShowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowCountAggregateInputType | true
    _min?: ShowMinAggregateInputType
    _max?: ShowMaxAggregateInputType
  }

  export type ShowGroupByOutputType = {
    id: string
    name: string
    location: string
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: ShowCountAggregateOutputType | null
    _min: ShowMinAggregateOutputType | null
    _max: ShowMaxAggregateOutputType | null
  }

  type GetShowGroupByPayload<T extends ShowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowGroupByOutputType[P]>
            : GetScalarType<T[P], ShowGroupByOutputType[P]>
        }
      >
    >


  export type ShowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    artists?: boolean | Show$artistsArgs<ExtArgs>
    _count?: boolean | ShowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["show"]>

  export type ShowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["show"]>

  export type ShowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["show"]>

  export type ShowSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["show"]>
  export type ShowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artists?: boolean | Show$artistsArgs<ExtArgs>
    _count?: boolean | ShowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Show"
    objects: {
      artists: Prisma.$ShowArtistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["show"]>
    composites: {}
  }

  type ShowGetPayload<S extends boolean | null | undefined | ShowDefaultArgs> = $Result.GetResult<Prisma.$ShowPayload, S>

  type ShowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShowCountAggregateInputType | true
    }

  export interface ShowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Show'], meta: { name: 'Show' } }
    /**
     * Find zero or one Show that matches the filter.
     * @param {ShowFindUniqueArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShowFindUniqueArgs>(args: SelectSubset<T, ShowFindUniqueArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Show that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShowFindUniqueOrThrowArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShowFindUniqueOrThrowArgs>(args: SelectSubset<T, ShowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Show that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindFirstArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShowFindFirstArgs>(args?: SelectSubset<T, ShowFindFirstArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Show that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindFirstOrThrowArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShowFindFirstOrThrowArgs>(args?: SelectSubset<T, ShowFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shows
     * const shows = await prisma.show.findMany()
     * 
     * // Get first 10 Shows
     * const shows = await prisma.show.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const showWithIdOnly = await prisma.show.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShowFindManyArgs>(args?: SelectSubset<T, ShowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Show.
     * @param {ShowCreateArgs} args - Arguments to create a Show.
     * @example
     * // Create one Show
     * const Show = await prisma.show.create({
     *   data: {
     *     // ... data to create a Show
     *   }
     * })
     * 
     */
    create<T extends ShowCreateArgs>(args: SelectSubset<T, ShowCreateArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shows.
     * @param {ShowCreateManyArgs} args - Arguments to create many Shows.
     * @example
     * // Create many Shows
     * const show = await prisma.show.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShowCreateManyArgs>(args?: SelectSubset<T, ShowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shows and returns the data saved in the database.
     * @param {ShowCreateManyAndReturnArgs} args - Arguments to create many Shows.
     * @example
     * // Create many Shows
     * const show = await prisma.show.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shows and only return the `id`
     * const showWithIdOnly = await prisma.show.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShowCreateManyAndReturnArgs>(args?: SelectSubset<T, ShowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Show.
     * @param {ShowDeleteArgs} args - Arguments to delete one Show.
     * @example
     * // Delete one Show
     * const Show = await prisma.show.delete({
     *   where: {
     *     // ... filter to delete one Show
     *   }
     * })
     * 
     */
    delete<T extends ShowDeleteArgs>(args: SelectSubset<T, ShowDeleteArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Show.
     * @param {ShowUpdateArgs} args - Arguments to update one Show.
     * @example
     * // Update one Show
     * const show = await prisma.show.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShowUpdateArgs>(args: SelectSubset<T, ShowUpdateArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shows.
     * @param {ShowDeleteManyArgs} args - Arguments to filter Shows to delete.
     * @example
     * // Delete a few Shows
     * const { count } = await prisma.show.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShowDeleteManyArgs>(args?: SelectSubset<T, ShowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shows
     * const show = await prisma.show.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShowUpdateManyArgs>(args: SelectSubset<T, ShowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shows and returns the data updated in the database.
     * @param {ShowUpdateManyAndReturnArgs} args - Arguments to update many Shows.
     * @example
     * // Update many Shows
     * const show = await prisma.show.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shows and only return the `id`
     * const showWithIdOnly = await prisma.show.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShowUpdateManyAndReturnArgs>(args: SelectSubset<T, ShowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Show.
     * @param {ShowUpsertArgs} args - Arguments to update or create a Show.
     * @example
     * // Update or create a Show
     * const show = await prisma.show.upsert({
     *   create: {
     *     // ... data to create a Show
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Show we want to update
     *   }
     * })
     */
    upsert<T extends ShowUpsertArgs>(args: SelectSubset<T, ShowUpsertArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCountArgs} args - Arguments to filter Shows to count.
     * @example
     * // Count the number of Shows
     * const count = await prisma.show.count({
     *   where: {
     *     // ... the filter for the Shows we want to count
     *   }
     * })
    **/
    count<T extends ShowCountArgs>(
      args?: Subset<T, ShowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Show.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShowAggregateArgs>(args: Subset<T, ShowAggregateArgs>): Prisma.PrismaPromise<GetShowAggregateType<T>>

    /**
     * Group by Show.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowGroupByArgs} args - Group by arguments.
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
      T extends ShowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowGroupByArgs['orderBy'] }
        : { orderBy?: ShowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Show model
   */
  readonly fields: ShowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Show.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artists<T extends Show$artistsArgs<ExtArgs> = {}>(args?: Subset<T, Show$artistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Show model
   */
  interface ShowFieldRefs {
    readonly id: FieldRef<"Show", 'String'>
    readonly name: FieldRef<"Show", 'String'>
    readonly location: FieldRef<"Show", 'String'>
    readonly date: FieldRef<"Show", 'DateTime'>
    readonly createdAt: FieldRef<"Show", 'DateTime'>
    readonly updatedAt: FieldRef<"Show", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Show findUnique
   */
  export type ShowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where: ShowWhereUniqueInput
  }

  /**
   * Show findUniqueOrThrow
   */
  export type ShowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where: ShowWhereUniqueInput
  }

  /**
   * Show findFirst
   */
  export type ShowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shows.
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shows.
     */
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * Show findFirstOrThrow
   */
  export type ShowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shows.
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shows.
     */
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * Show findMany
   */
  export type ShowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Shows to fetch.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shows.
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * Show create
   */
  export type ShowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * The data needed to create a Show.
     */
    data: XOR<ShowCreateInput, ShowUncheckedCreateInput>
  }

  /**
   * Show createMany
   */
  export type ShowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shows.
     */
    data: ShowCreateManyInput | ShowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Show createManyAndReturn
   */
  export type ShowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * The data used to create many Shows.
     */
    data: ShowCreateManyInput | ShowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Show update
   */
  export type ShowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * The data needed to update a Show.
     */
    data: XOR<ShowUpdateInput, ShowUncheckedUpdateInput>
    /**
     * Choose, which Show to update.
     */
    where: ShowWhereUniqueInput
  }

  /**
   * Show updateMany
   */
  export type ShowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shows.
     */
    data: XOR<ShowUpdateManyMutationInput, ShowUncheckedUpdateManyInput>
    /**
     * Filter which Shows to update
     */
    where?: ShowWhereInput
    /**
     * Limit how many Shows to update.
     */
    limit?: number
  }

  /**
   * Show updateManyAndReturn
   */
  export type ShowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * The data used to update Shows.
     */
    data: XOR<ShowUpdateManyMutationInput, ShowUncheckedUpdateManyInput>
    /**
     * Filter which Shows to update
     */
    where?: ShowWhereInput
    /**
     * Limit how many Shows to update.
     */
    limit?: number
  }

  /**
   * Show upsert
   */
  export type ShowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * The filter to search for the Show to update in case it exists.
     */
    where: ShowWhereUniqueInput
    /**
     * In case the Show found by the `where` argument doesn't exist, create a new Show with this data.
     */
    create: XOR<ShowCreateInput, ShowUncheckedCreateInput>
    /**
     * In case the Show was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowUpdateInput, ShowUncheckedUpdateInput>
  }

  /**
   * Show delete
   */
  export type ShowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter which Show to delete.
     */
    where: ShowWhereUniqueInput
  }

  /**
   * Show deleteMany
   */
  export type ShowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shows to delete
     */
    where?: ShowWhereInput
    /**
     * Limit how many Shows to delete.
     */
    limit?: number
  }

  /**
   * Show.artists
   */
  export type Show$artistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowArtist
     */
    select?: ShowArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowArtist
     */
    omit?: ShowArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowArtistInclude<ExtArgs> | null
    where?: ShowArtistWhereInput
    orderBy?: ShowArtistOrderByWithRelationInput | ShowArtistOrderByWithRelationInput[]
    cursor?: ShowArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowArtistScalarFieldEnum | ShowArtistScalarFieldEnum[]
  }

  /**
   * Show without action
   */
  export type ShowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
  }


  /**
   * Model ShowArtist
   */

  export type AggregateShowArtist = {
    _count: ShowArtistCountAggregateOutputType | null
    _min: ShowArtistMinAggregateOutputType | null
    _max: ShowArtistMaxAggregateOutputType | null
  }

  export type ShowArtistMinAggregateOutputType = {
    showId: string | null
    artistId: string | null
  }

  export type ShowArtistMaxAggregateOutputType = {
    showId: string | null
    artistId: string | null
  }

  export type ShowArtistCountAggregateOutputType = {
    showId: number
    artistId: number
    _all: number
  }


  export type ShowArtistMinAggregateInputType = {
    showId?: true
    artistId?: true
  }

  export type ShowArtistMaxAggregateInputType = {
    showId?: true
    artistId?: true
  }

  export type ShowArtistCountAggregateInputType = {
    showId?: true
    artistId?: true
    _all?: true
  }

  export type ShowArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShowArtist to aggregate.
     */
    where?: ShowArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowArtists to fetch.
     */
    orderBy?: ShowArtistOrderByWithRelationInput | ShowArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShowArtists
    **/
    _count?: true | ShowArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowArtistMaxAggregateInputType
  }

  export type GetShowArtistAggregateType<T extends ShowArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateShowArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowArtist[P]>
      : GetScalarType<T[P], AggregateShowArtist[P]>
  }




  export type ShowArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowArtistWhereInput
    orderBy?: ShowArtistOrderByWithAggregationInput | ShowArtistOrderByWithAggregationInput[]
    by: ShowArtistScalarFieldEnum[] | ShowArtistScalarFieldEnum
    having?: ShowArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowArtistCountAggregateInputType | true
    _min?: ShowArtistMinAggregateInputType
    _max?: ShowArtistMaxAggregateInputType
  }

  export type ShowArtistGroupByOutputType = {
    showId: string
    artistId: string
    _count: ShowArtistCountAggregateOutputType | null
    _min: ShowArtistMinAggregateOutputType | null
    _max: ShowArtistMaxAggregateOutputType | null
  }

  type GetShowArtistGroupByPayload<T extends ShowArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ShowArtistGroupByOutputType[P]>
        }
      >
    >


  export type ShowArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    showId?: boolean
    artistId?: boolean
    show?: boolean | ShowDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["showArtist"]>

  export type ShowArtistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    showId?: boolean
    artistId?: boolean
    show?: boolean | ShowDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["showArtist"]>

  export type ShowArtistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    showId?: boolean
    artistId?: boolean
    show?: boolean | ShowDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["showArtist"]>

  export type ShowArtistSelectScalar = {
    showId?: boolean
    artistId?: boolean
  }

  export type ShowArtistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"showId" | "artistId", ExtArgs["result"]["showArtist"]>
  export type ShowArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show?: boolean | ShowDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }
  export type ShowArtistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show?: boolean | ShowDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }
  export type ShowArtistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show?: boolean | ShowDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }

  export type $ShowArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShowArtist"
    objects: {
      show: Prisma.$ShowPayload<ExtArgs>
      artist: Prisma.$ArtistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      showId: string
      artistId: string
    }, ExtArgs["result"]["showArtist"]>
    composites: {}
  }

  type ShowArtistGetPayload<S extends boolean | null | undefined | ShowArtistDefaultArgs> = $Result.GetResult<Prisma.$ShowArtistPayload, S>

  type ShowArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShowArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShowArtistCountAggregateInputType | true
    }

  export interface ShowArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShowArtist'], meta: { name: 'ShowArtist' } }
    /**
     * Find zero or one ShowArtist that matches the filter.
     * @param {ShowArtistFindUniqueArgs} args - Arguments to find a ShowArtist
     * @example
     * // Get one ShowArtist
     * const showArtist = await prisma.showArtist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShowArtistFindUniqueArgs>(args: SelectSubset<T, ShowArtistFindUniqueArgs<ExtArgs>>): Prisma__ShowArtistClient<$Result.GetResult<Prisma.$ShowArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShowArtist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShowArtistFindUniqueOrThrowArgs} args - Arguments to find a ShowArtist
     * @example
     * // Get one ShowArtist
     * const showArtist = await prisma.showArtist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShowArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, ShowArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShowArtistClient<$Result.GetResult<Prisma.$ShowArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShowArtist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowArtistFindFirstArgs} args - Arguments to find a ShowArtist
     * @example
     * // Get one ShowArtist
     * const showArtist = await prisma.showArtist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShowArtistFindFirstArgs>(args?: SelectSubset<T, ShowArtistFindFirstArgs<ExtArgs>>): Prisma__ShowArtistClient<$Result.GetResult<Prisma.$ShowArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShowArtist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowArtistFindFirstOrThrowArgs} args - Arguments to find a ShowArtist
     * @example
     * // Get one ShowArtist
     * const showArtist = await prisma.showArtist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShowArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, ShowArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShowArtistClient<$Result.GetResult<Prisma.$ShowArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShowArtists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShowArtists
     * const showArtists = await prisma.showArtist.findMany()
     * 
     * // Get first 10 ShowArtists
     * const showArtists = await prisma.showArtist.findMany({ take: 10 })
     * 
     * // Only select the `showId`
     * const showArtistWithShowIdOnly = await prisma.showArtist.findMany({ select: { showId: true } })
     * 
     */
    findMany<T extends ShowArtistFindManyArgs>(args?: SelectSubset<T, ShowArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShowArtist.
     * @param {ShowArtistCreateArgs} args - Arguments to create a ShowArtist.
     * @example
     * // Create one ShowArtist
     * const ShowArtist = await prisma.showArtist.create({
     *   data: {
     *     // ... data to create a ShowArtist
     *   }
     * })
     * 
     */
    create<T extends ShowArtistCreateArgs>(args: SelectSubset<T, ShowArtistCreateArgs<ExtArgs>>): Prisma__ShowArtistClient<$Result.GetResult<Prisma.$ShowArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShowArtists.
     * @param {ShowArtistCreateManyArgs} args - Arguments to create many ShowArtists.
     * @example
     * // Create many ShowArtists
     * const showArtist = await prisma.showArtist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShowArtistCreateManyArgs>(args?: SelectSubset<T, ShowArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShowArtists and returns the data saved in the database.
     * @param {ShowArtistCreateManyAndReturnArgs} args - Arguments to create many ShowArtists.
     * @example
     * // Create many ShowArtists
     * const showArtist = await prisma.showArtist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShowArtists and only return the `showId`
     * const showArtistWithShowIdOnly = await prisma.showArtist.createManyAndReturn({
     *   select: { showId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShowArtistCreateManyAndReturnArgs>(args?: SelectSubset<T, ShowArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowArtistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShowArtist.
     * @param {ShowArtistDeleteArgs} args - Arguments to delete one ShowArtist.
     * @example
     * // Delete one ShowArtist
     * const ShowArtist = await prisma.showArtist.delete({
     *   where: {
     *     // ... filter to delete one ShowArtist
     *   }
     * })
     * 
     */
    delete<T extends ShowArtistDeleteArgs>(args: SelectSubset<T, ShowArtistDeleteArgs<ExtArgs>>): Prisma__ShowArtistClient<$Result.GetResult<Prisma.$ShowArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShowArtist.
     * @param {ShowArtistUpdateArgs} args - Arguments to update one ShowArtist.
     * @example
     * // Update one ShowArtist
     * const showArtist = await prisma.showArtist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShowArtistUpdateArgs>(args: SelectSubset<T, ShowArtistUpdateArgs<ExtArgs>>): Prisma__ShowArtistClient<$Result.GetResult<Prisma.$ShowArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShowArtists.
     * @param {ShowArtistDeleteManyArgs} args - Arguments to filter ShowArtists to delete.
     * @example
     * // Delete a few ShowArtists
     * const { count } = await prisma.showArtist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShowArtistDeleteManyArgs>(args?: SelectSubset<T, ShowArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShowArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShowArtists
     * const showArtist = await prisma.showArtist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShowArtistUpdateManyArgs>(args: SelectSubset<T, ShowArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShowArtists and returns the data updated in the database.
     * @param {ShowArtistUpdateManyAndReturnArgs} args - Arguments to update many ShowArtists.
     * @example
     * // Update many ShowArtists
     * const showArtist = await prisma.showArtist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShowArtists and only return the `showId`
     * const showArtistWithShowIdOnly = await prisma.showArtist.updateManyAndReturn({
     *   select: { showId: true },
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
    updateManyAndReturn<T extends ShowArtistUpdateManyAndReturnArgs>(args: SelectSubset<T, ShowArtistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowArtistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShowArtist.
     * @param {ShowArtistUpsertArgs} args - Arguments to update or create a ShowArtist.
     * @example
     * // Update or create a ShowArtist
     * const showArtist = await prisma.showArtist.upsert({
     *   create: {
     *     // ... data to create a ShowArtist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShowArtist we want to update
     *   }
     * })
     */
    upsert<T extends ShowArtistUpsertArgs>(args: SelectSubset<T, ShowArtistUpsertArgs<ExtArgs>>): Prisma__ShowArtistClient<$Result.GetResult<Prisma.$ShowArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShowArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowArtistCountArgs} args - Arguments to filter ShowArtists to count.
     * @example
     * // Count the number of ShowArtists
     * const count = await prisma.showArtist.count({
     *   where: {
     *     // ... the filter for the ShowArtists we want to count
     *   }
     * })
    **/
    count<T extends ShowArtistCountArgs>(
      args?: Subset<T, ShowArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShowArtist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShowArtistAggregateArgs>(args: Subset<T, ShowArtistAggregateArgs>): Prisma.PrismaPromise<GetShowArtistAggregateType<T>>

    /**
     * Group by ShowArtist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowArtistGroupByArgs} args - Group by arguments.
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
      T extends ShowArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowArtistGroupByArgs['orderBy'] }
        : { orderBy?: ShowArtistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShowArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShowArtist model
   */
  readonly fields: ShowArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShowArtist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    show<T extends ShowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShowDefaultArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ShowArtist model
   */
  interface ShowArtistFieldRefs {
    readonly showId: FieldRef<"ShowArtist", 'String'>
    readonly artistId: FieldRef<"ShowArtist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShowArtist findUnique
   */
  export type ShowArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowArtist
     */
    select?: ShowArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowArtist
     */
    omit?: ShowArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowArtistInclude<ExtArgs> | null
    /**
     * Filter, which ShowArtist to fetch.
     */
    where: ShowArtistWhereUniqueInput
  }

  /**
   * ShowArtist findUniqueOrThrow
   */
  export type ShowArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowArtist
     */
    select?: ShowArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowArtist
     */
    omit?: ShowArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowArtistInclude<ExtArgs> | null
    /**
     * Filter, which ShowArtist to fetch.
     */
    where: ShowArtistWhereUniqueInput
  }

  /**
   * ShowArtist findFirst
   */
  export type ShowArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowArtist
     */
    select?: ShowArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowArtist
     */
    omit?: ShowArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowArtistInclude<ExtArgs> | null
    /**
     * Filter, which ShowArtist to fetch.
     */
    where?: ShowArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowArtists to fetch.
     */
    orderBy?: ShowArtistOrderByWithRelationInput | ShowArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowArtists.
     */
    cursor?: ShowArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowArtists.
     */
    distinct?: ShowArtistScalarFieldEnum | ShowArtistScalarFieldEnum[]
  }

  /**
   * ShowArtist findFirstOrThrow
   */
  export type ShowArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowArtist
     */
    select?: ShowArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowArtist
     */
    omit?: ShowArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowArtistInclude<ExtArgs> | null
    /**
     * Filter, which ShowArtist to fetch.
     */
    where?: ShowArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowArtists to fetch.
     */
    orderBy?: ShowArtistOrderByWithRelationInput | ShowArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowArtists.
     */
    cursor?: ShowArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowArtists.
     */
    distinct?: ShowArtistScalarFieldEnum | ShowArtistScalarFieldEnum[]
  }

  /**
   * ShowArtist findMany
   */
  export type ShowArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowArtist
     */
    select?: ShowArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowArtist
     */
    omit?: ShowArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowArtistInclude<ExtArgs> | null
    /**
     * Filter, which ShowArtists to fetch.
     */
    where?: ShowArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowArtists to fetch.
     */
    orderBy?: ShowArtistOrderByWithRelationInput | ShowArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShowArtists.
     */
    cursor?: ShowArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowArtists.
     */
    skip?: number
    distinct?: ShowArtistScalarFieldEnum | ShowArtistScalarFieldEnum[]
  }

  /**
   * ShowArtist create
   */
  export type ShowArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowArtist
     */
    select?: ShowArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowArtist
     */
    omit?: ShowArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a ShowArtist.
     */
    data: XOR<ShowArtistCreateInput, ShowArtistUncheckedCreateInput>
  }

  /**
   * ShowArtist createMany
   */
  export type ShowArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShowArtists.
     */
    data: ShowArtistCreateManyInput | ShowArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShowArtist createManyAndReturn
   */
  export type ShowArtistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowArtist
     */
    select?: ShowArtistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShowArtist
     */
    omit?: ShowArtistOmit<ExtArgs> | null
    /**
     * The data used to create many ShowArtists.
     */
    data: ShowArtistCreateManyInput | ShowArtistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowArtistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShowArtist update
   */
  export type ShowArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowArtist
     */
    select?: ShowArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowArtist
     */
    omit?: ShowArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a ShowArtist.
     */
    data: XOR<ShowArtistUpdateInput, ShowArtistUncheckedUpdateInput>
    /**
     * Choose, which ShowArtist to update.
     */
    where: ShowArtistWhereUniqueInput
  }

  /**
   * ShowArtist updateMany
   */
  export type ShowArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShowArtists.
     */
    data: XOR<ShowArtistUpdateManyMutationInput, ShowArtistUncheckedUpdateManyInput>
    /**
     * Filter which ShowArtists to update
     */
    where?: ShowArtistWhereInput
    /**
     * Limit how many ShowArtists to update.
     */
    limit?: number
  }

  /**
   * ShowArtist updateManyAndReturn
   */
  export type ShowArtistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowArtist
     */
    select?: ShowArtistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShowArtist
     */
    omit?: ShowArtistOmit<ExtArgs> | null
    /**
     * The data used to update ShowArtists.
     */
    data: XOR<ShowArtistUpdateManyMutationInput, ShowArtistUncheckedUpdateManyInput>
    /**
     * Filter which ShowArtists to update
     */
    where?: ShowArtistWhereInput
    /**
     * Limit how many ShowArtists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowArtistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShowArtist upsert
   */
  export type ShowArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowArtist
     */
    select?: ShowArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowArtist
     */
    omit?: ShowArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the ShowArtist to update in case it exists.
     */
    where: ShowArtistWhereUniqueInput
    /**
     * In case the ShowArtist found by the `where` argument doesn't exist, create a new ShowArtist with this data.
     */
    create: XOR<ShowArtistCreateInput, ShowArtistUncheckedCreateInput>
    /**
     * In case the ShowArtist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowArtistUpdateInput, ShowArtistUncheckedUpdateInput>
  }

  /**
   * ShowArtist delete
   */
  export type ShowArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowArtist
     */
    select?: ShowArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowArtist
     */
    omit?: ShowArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowArtistInclude<ExtArgs> | null
    /**
     * Filter which ShowArtist to delete.
     */
    where: ShowArtistWhereUniqueInput
  }

  /**
   * ShowArtist deleteMany
   */
  export type ShowArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShowArtists to delete
     */
    where?: ShowArtistWhereInput
    /**
     * Limit how many ShowArtists to delete.
     */
    limit?: number
  }

  /**
   * ShowArtist without action
   */
  export type ShowArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowArtist
     */
    select?: ShowArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowArtist
     */
    omit?: ShowArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowArtistInclude<ExtArgs> | null
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


  export const ArtistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    members: 'members',
    origin: 'origin',
    genres: 'genres',
    image: 'image',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const ShowScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShowScalarFieldEnum = (typeof ShowScalarFieldEnum)[keyof typeof ShowScalarFieldEnum]


  export const ShowArtistScalarFieldEnum: {
    showId: 'showId',
    artistId: 'artistId'
  };

  export type ShowArtistScalarFieldEnum = (typeof ShowArtistScalarFieldEnum)[keyof typeof ShowArtistScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: UuidFilter<"Artist"> | string
    name?: StringFilter<"Artist"> | string
    members?: StringFilter<"Artist"> | string
    origin?: StringFilter<"Artist"> | string
    genres?: StringFilter<"Artist"> | string
    image?: StringFilter<"Artist"> | string
    status?: BoolFilter<"Artist"> | boolean
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
    shows?: ShowArtistListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    members?: SortOrder
    origin?: SortOrder
    genres?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shows?: ShowArtistOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    name?: StringFilter<"Artist"> | string
    members?: StringFilter<"Artist"> | string
    origin?: StringFilter<"Artist"> | string
    genres?: StringFilter<"Artist"> | string
    image?: StringFilter<"Artist"> | string
    status?: BoolFilter<"Artist"> | boolean
    createdAt?: DateTimeFilter<"Artist"> | Date | string
    updatedAt?: DateTimeFilter<"Artist"> | Date | string
    shows?: ShowArtistListRelationFilter
  }, "id">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    members?: SortOrder
    origin?: SortOrder
    genres?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Artist"> | string
    name?: StringWithAggregatesFilter<"Artist"> | string
    members?: StringWithAggregatesFilter<"Artist"> | string
    origin?: StringWithAggregatesFilter<"Artist"> | string
    genres?: StringWithAggregatesFilter<"Artist"> | string
    image?: StringWithAggregatesFilter<"Artist"> | string
    status?: BoolWithAggregatesFilter<"Artist"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Artist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Artist"> | Date | string
  }

  export type ShowWhereInput = {
    AND?: ShowWhereInput | ShowWhereInput[]
    OR?: ShowWhereInput[]
    NOT?: ShowWhereInput | ShowWhereInput[]
    id?: UuidFilter<"Show"> | string
    name?: StringFilter<"Show"> | string
    location?: StringFilter<"Show"> | string
    date?: DateTimeFilter<"Show"> | Date | string
    createdAt?: DateTimeFilter<"Show"> | Date | string
    updatedAt?: DateTimeFilter<"Show"> | Date | string
    artists?: ShowArtistListRelationFilter
  }

  export type ShowOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    artists?: ShowArtistOrderByRelationAggregateInput
  }

  export type ShowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShowWhereInput | ShowWhereInput[]
    OR?: ShowWhereInput[]
    NOT?: ShowWhereInput | ShowWhereInput[]
    name?: StringFilter<"Show"> | string
    location?: StringFilter<"Show"> | string
    date?: DateTimeFilter<"Show"> | Date | string
    createdAt?: DateTimeFilter<"Show"> | Date | string
    updatedAt?: DateTimeFilter<"Show"> | Date | string
    artists?: ShowArtistListRelationFilter
  }, "id">

  export type ShowOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShowCountOrderByAggregateInput
    _max?: ShowMaxOrderByAggregateInput
    _min?: ShowMinOrderByAggregateInput
  }

  export type ShowScalarWhereWithAggregatesInput = {
    AND?: ShowScalarWhereWithAggregatesInput | ShowScalarWhereWithAggregatesInput[]
    OR?: ShowScalarWhereWithAggregatesInput[]
    NOT?: ShowScalarWhereWithAggregatesInput | ShowScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Show"> | string
    name?: StringWithAggregatesFilter<"Show"> | string
    location?: StringWithAggregatesFilter<"Show"> | string
    date?: DateTimeWithAggregatesFilter<"Show"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Show"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Show"> | Date | string
  }

  export type ShowArtistWhereInput = {
    AND?: ShowArtistWhereInput | ShowArtistWhereInput[]
    OR?: ShowArtistWhereInput[]
    NOT?: ShowArtistWhereInput | ShowArtistWhereInput[]
    showId?: UuidFilter<"ShowArtist"> | string
    artistId?: UuidFilter<"ShowArtist"> | string
    show?: XOR<ShowScalarRelationFilter, ShowWhereInput>
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
  }

  export type ShowArtistOrderByWithRelationInput = {
    showId?: SortOrder
    artistId?: SortOrder
    show?: ShowOrderByWithRelationInput
    artist?: ArtistOrderByWithRelationInput
  }

  export type ShowArtistWhereUniqueInput = Prisma.AtLeast<{
    showId_artistId?: ShowArtistShowIdArtistIdCompoundUniqueInput
    AND?: ShowArtistWhereInput | ShowArtistWhereInput[]
    OR?: ShowArtistWhereInput[]
    NOT?: ShowArtistWhereInput | ShowArtistWhereInput[]
    showId?: UuidFilter<"ShowArtist"> | string
    artistId?: UuidFilter<"ShowArtist"> | string
    show?: XOR<ShowScalarRelationFilter, ShowWhereInput>
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
  }, "showId_artistId">

  export type ShowArtistOrderByWithAggregationInput = {
    showId?: SortOrder
    artistId?: SortOrder
    _count?: ShowArtistCountOrderByAggregateInput
    _max?: ShowArtistMaxOrderByAggregateInput
    _min?: ShowArtistMinOrderByAggregateInput
  }

  export type ShowArtistScalarWhereWithAggregatesInput = {
    AND?: ShowArtistScalarWhereWithAggregatesInput | ShowArtistScalarWhereWithAggregatesInput[]
    OR?: ShowArtistScalarWhereWithAggregatesInput[]
    NOT?: ShowArtistScalarWhereWithAggregatesInput | ShowArtistScalarWhereWithAggregatesInput[]
    showId?: UuidWithAggregatesFilter<"ShowArtist"> | string
    artistId?: UuidWithAggregatesFilter<"ShowArtist"> | string
  }

  export type ArtistCreateInput = {
    id?: string
    name: string
    members: string
    origin: string
    genres: string
    image: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shows?: ShowArtistCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateInput = {
    id?: string
    name: string
    members: string
    origin: string
    genres: string
    image: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shows?: ShowArtistUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    members?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    genres?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shows?: ShowArtistUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    members?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    genres?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shows?: ShowArtistUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateManyInput = {
    id?: string
    name: string
    members: string
    origin: string
    genres: string
    image: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    members?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    genres?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    members?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    genres?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCreateInput = {
    id?: string
    name: string
    location: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ShowArtistCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    artists?: ShowArtistUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ShowArtistUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ShowArtistUncheckedUpdateManyWithoutShowNestedInput
  }

  export type ShowCreateManyInput = {
    id?: string
    name: string
    location: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowArtistCreateInput = {
    show: ShowCreateNestedOneWithoutArtistsInput
    artist: ArtistCreateNestedOneWithoutShowsInput
  }

  export type ShowArtistUncheckedCreateInput = {
    showId: string
    artistId: string
  }

  export type ShowArtistUpdateInput = {
    show?: ShowUpdateOneRequiredWithoutArtistsNestedInput
    artist?: ArtistUpdateOneRequiredWithoutShowsNestedInput
  }

  export type ShowArtistUncheckedUpdateInput = {
    showId?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
  }

  export type ShowArtistCreateManyInput = {
    showId: string
    artistId: string
  }

  export type ShowArtistUpdateManyMutationInput = {

  }

  export type ShowArtistUncheckedUpdateManyInput = {
    showId?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ShowArtistListRelationFilter = {
    every?: ShowArtistWhereInput
    some?: ShowArtistWhereInput
    none?: ShowArtistWhereInput
  }

  export type ShowArtistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    members?: SortOrder
    origin?: SortOrder
    genres?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    members?: SortOrder
    origin?: SortOrder
    genres?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    members?: SortOrder
    origin?: SortOrder
    genres?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ShowCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowScalarRelationFilter = {
    is?: ShowWhereInput
    isNot?: ShowWhereInput
  }

  export type ArtistScalarRelationFilter = {
    is?: ArtistWhereInput
    isNot?: ArtistWhereInput
  }

  export type ShowArtistShowIdArtistIdCompoundUniqueInput = {
    showId: string
    artistId: string
  }

  export type ShowArtistCountOrderByAggregateInput = {
    showId?: SortOrder
    artistId?: SortOrder
  }

  export type ShowArtistMaxOrderByAggregateInput = {
    showId?: SortOrder
    artistId?: SortOrder
  }

  export type ShowArtistMinOrderByAggregateInput = {
    showId?: SortOrder
    artistId?: SortOrder
  }

  export type ShowArtistCreateNestedManyWithoutArtistInput = {
    create?: XOR<ShowArtistCreateWithoutArtistInput, ShowArtistUncheckedCreateWithoutArtistInput> | ShowArtistCreateWithoutArtistInput[] | ShowArtistUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ShowArtistCreateOrConnectWithoutArtistInput | ShowArtistCreateOrConnectWithoutArtistInput[]
    createMany?: ShowArtistCreateManyArtistInputEnvelope
    connect?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
  }

  export type ShowArtistUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<ShowArtistCreateWithoutArtistInput, ShowArtistUncheckedCreateWithoutArtistInput> | ShowArtistCreateWithoutArtistInput[] | ShowArtistUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ShowArtistCreateOrConnectWithoutArtistInput | ShowArtistCreateOrConnectWithoutArtistInput[]
    createMany?: ShowArtistCreateManyArtistInputEnvelope
    connect?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShowArtistUpdateManyWithoutArtistNestedInput = {
    create?: XOR<ShowArtistCreateWithoutArtistInput, ShowArtistUncheckedCreateWithoutArtistInput> | ShowArtistCreateWithoutArtistInput[] | ShowArtistUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ShowArtistCreateOrConnectWithoutArtistInput | ShowArtistCreateOrConnectWithoutArtistInput[]
    upsert?: ShowArtistUpsertWithWhereUniqueWithoutArtistInput | ShowArtistUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: ShowArtistCreateManyArtistInputEnvelope
    set?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
    disconnect?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
    delete?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
    connect?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
    update?: ShowArtistUpdateWithWhereUniqueWithoutArtistInput | ShowArtistUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: ShowArtistUpdateManyWithWhereWithoutArtistInput | ShowArtistUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: ShowArtistScalarWhereInput | ShowArtistScalarWhereInput[]
  }

  export type ShowArtistUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<ShowArtistCreateWithoutArtistInput, ShowArtistUncheckedCreateWithoutArtistInput> | ShowArtistCreateWithoutArtistInput[] | ShowArtistUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ShowArtistCreateOrConnectWithoutArtistInput | ShowArtistCreateOrConnectWithoutArtistInput[]
    upsert?: ShowArtistUpsertWithWhereUniqueWithoutArtistInput | ShowArtistUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: ShowArtistCreateManyArtistInputEnvelope
    set?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
    disconnect?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
    delete?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
    connect?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
    update?: ShowArtistUpdateWithWhereUniqueWithoutArtistInput | ShowArtistUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: ShowArtistUpdateManyWithWhereWithoutArtistInput | ShowArtistUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: ShowArtistScalarWhereInput | ShowArtistScalarWhereInput[]
  }

  export type ShowArtistCreateNestedManyWithoutShowInput = {
    create?: XOR<ShowArtistCreateWithoutShowInput, ShowArtistUncheckedCreateWithoutShowInput> | ShowArtistCreateWithoutShowInput[] | ShowArtistUncheckedCreateWithoutShowInput[]
    connectOrCreate?: ShowArtistCreateOrConnectWithoutShowInput | ShowArtistCreateOrConnectWithoutShowInput[]
    createMany?: ShowArtistCreateManyShowInputEnvelope
    connect?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
  }

  export type ShowArtistUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<ShowArtistCreateWithoutShowInput, ShowArtistUncheckedCreateWithoutShowInput> | ShowArtistCreateWithoutShowInput[] | ShowArtistUncheckedCreateWithoutShowInput[]
    connectOrCreate?: ShowArtistCreateOrConnectWithoutShowInput | ShowArtistCreateOrConnectWithoutShowInput[]
    createMany?: ShowArtistCreateManyShowInputEnvelope
    connect?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
  }

  export type ShowArtistUpdateManyWithoutShowNestedInput = {
    create?: XOR<ShowArtistCreateWithoutShowInput, ShowArtistUncheckedCreateWithoutShowInput> | ShowArtistCreateWithoutShowInput[] | ShowArtistUncheckedCreateWithoutShowInput[]
    connectOrCreate?: ShowArtistCreateOrConnectWithoutShowInput | ShowArtistCreateOrConnectWithoutShowInput[]
    upsert?: ShowArtistUpsertWithWhereUniqueWithoutShowInput | ShowArtistUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: ShowArtistCreateManyShowInputEnvelope
    set?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
    disconnect?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
    delete?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
    connect?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
    update?: ShowArtistUpdateWithWhereUniqueWithoutShowInput | ShowArtistUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: ShowArtistUpdateManyWithWhereWithoutShowInput | ShowArtistUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: ShowArtistScalarWhereInput | ShowArtistScalarWhereInput[]
  }

  export type ShowArtistUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<ShowArtistCreateWithoutShowInput, ShowArtistUncheckedCreateWithoutShowInput> | ShowArtistCreateWithoutShowInput[] | ShowArtistUncheckedCreateWithoutShowInput[]
    connectOrCreate?: ShowArtistCreateOrConnectWithoutShowInput | ShowArtistCreateOrConnectWithoutShowInput[]
    upsert?: ShowArtistUpsertWithWhereUniqueWithoutShowInput | ShowArtistUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: ShowArtistCreateManyShowInputEnvelope
    set?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
    disconnect?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
    delete?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
    connect?: ShowArtistWhereUniqueInput | ShowArtistWhereUniqueInput[]
    update?: ShowArtistUpdateWithWhereUniqueWithoutShowInput | ShowArtistUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: ShowArtistUpdateManyWithWhereWithoutShowInput | ShowArtistUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: ShowArtistScalarWhereInput | ShowArtistScalarWhereInput[]
  }

  export type ShowCreateNestedOneWithoutArtistsInput = {
    create?: XOR<ShowCreateWithoutArtistsInput, ShowUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: ShowCreateOrConnectWithoutArtistsInput
    connect?: ShowWhereUniqueInput
  }

  export type ArtistCreateNestedOneWithoutShowsInput = {
    create?: XOR<ArtistCreateWithoutShowsInput, ArtistUncheckedCreateWithoutShowsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutShowsInput
    connect?: ArtistWhereUniqueInput
  }

  export type ShowUpdateOneRequiredWithoutArtistsNestedInput = {
    create?: XOR<ShowCreateWithoutArtistsInput, ShowUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: ShowCreateOrConnectWithoutArtistsInput
    upsert?: ShowUpsertWithoutArtistsInput
    connect?: ShowWhereUniqueInput
    update?: XOR<XOR<ShowUpdateToOneWithWhereWithoutArtistsInput, ShowUpdateWithoutArtistsInput>, ShowUncheckedUpdateWithoutArtistsInput>
  }

  export type ArtistUpdateOneRequiredWithoutShowsNestedInput = {
    create?: XOR<ArtistCreateWithoutShowsInput, ArtistUncheckedCreateWithoutShowsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutShowsInput
    upsert?: ArtistUpsertWithoutShowsInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutShowsInput, ArtistUpdateWithoutShowsInput>, ArtistUncheckedUpdateWithoutShowsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ShowArtistCreateWithoutArtistInput = {
    show: ShowCreateNestedOneWithoutArtistsInput
  }

  export type ShowArtistUncheckedCreateWithoutArtistInput = {
    showId: string
  }

  export type ShowArtistCreateOrConnectWithoutArtistInput = {
    where: ShowArtistWhereUniqueInput
    create: XOR<ShowArtistCreateWithoutArtistInput, ShowArtistUncheckedCreateWithoutArtistInput>
  }

  export type ShowArtistCreateManyArtistInputEnvelope = {
    data: ShowArtistCreateManyArtistInput | ShowArtistCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type ShowArtistUpsertWithWhereUniqueWithoutArtistInput = {
    where: ShowArtistWhereUniqueInput
    update: XOR<ShowArtistUpdateWithoutArtistInput, ShowArtistUncheckedUpdateWithoutArtistInput>
    create: XOR<ShowArtistCreateWithoutArtistInput, ShowArtistUncheckedCreateWithoutArtistInput>
  }

  export type ShowArtistUpdateWithWhereUniqueWithoutArtistInput = {
    where: ShowArtistWhereUniqueInput
    data: XOR<ShowArtistUpdateWithoutArtistInput, ShowArtistUncheckedUpdateWithoutArtistInput>
  }

  export type ShowArtistUpdateManyWithWhereWithoutArtistInput = {
    where: ShowArtistScalarWhereInput
    data: XOR<ShowArtistUpdateManyMutationInput, ShowArtistUncheckedUpdateManyWithoutArtistInput>
  }

  export type ShowArtistScalarWhereInput = {
    AND?: ShowArtistScalarWhereInput | ShowArtistScalarWhereInput[]
    OR?: ShowArtistScalarWhereInput[]
    NOT?: ShowArtistScalarWhereInput | ShowArtistScalarWhereInput[]
    showId?: UuidFilter<"ShowArtist"> | string
    artistId?: UuidFilter<"ShowArtist"> | string
  }

  export type ShowArtistCreateWithoutShowInput = {
    artist: ArtistCreateNestedOneWithoutShowsInput
  }

  export type ShowArtistUncheckedCreateWithoutShowInput = {
    artistId: string
  }

  export type ShowArtistCreateOrConnectWithoutShowInput = {
    where: ShowArtistWhereUniqueInput
    create: XOR<ShowArtistCreateWithoutShowInput, ShowArtistUncheckedCreateWithoutShowInput>
  }

  export type ShowArtistCreateManyShowInputEnvelope = {
    data: ShowArtistCreateManyShowInput | ShowArtistCreateManyShowInput[]
    skipDuplicates?: boolean
  }

  export type ShowArtistUpsertWithWhereUniqueWithoutShowInput = {
    where: ShowArtistWhereUniqueInput
    update: XOR<ShowArtistUpdateWithoutShowInput, ShowArtistUncheckedUpdateWithoutShowInput>
    create: XOR<ShowArtistCreateWithoutShowInput, ShowArtistUncheckedCreateWithoutShowInput>
  }

  export type ShowArtistUpdateWithWhereUniqueWithoutShowInput = {
    where: ShowArtistWhereUniqueInput
    data: XOR<ShowArtistUpdateWithoutShowInput, ShowArtistUncheckedUpdateWithoutShowInput>
  }

  export type ShowArtistUpdateManyWithWhereWithoutShowInput = {
    where: ShowArtistScalarWhereInput
    data: XOR<ShowArtistUpdateManyMutationInput, ShowArtistUncheckedUpdateManyWithoutShowInput>
  }

  export type ShowCreateWithoutArtistsInput = {
    id?: string
    name: string
    location: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowUncheckedCreateWithoutArtistsInput = {
    id?: string
    name: string
    location: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowCreateOrConnectWithoutArtistsInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutArtistsInput, ShowUncheckedCreateWithoutArtistsInput>
  }

  export type ArtistCreateWithoutShowsInput = {
    id?: string
    name: string
    members: string
    origin: string
    genres: string
    image: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtistUncheckedCreateWithoutShowsInput = {
    id?: string
    name: string
    members: string
    origin: string
    genres: string
    image: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtistCreateOrConnectWithoutShowsInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutShowsInput, ArtistUncheckedCreateWithoutShowsInput>
  }

  export type ShowUpsertWithoutArtistsInput = {
    update: XOR<ShowUpdateWithoutArtistsInput, ShowUncheckedUpdateWithoutArtistsInput>
    create: XOR<ShowCreateWithoutArtistsInput, ShowUncheckedCreateWithoutArtistsInput>
    where?: ShowWhereInput
  }

  export type ShowUpdateToOneWithWhereWithoutArtistsInput = {
    where?: ShowWhereInput
    data: XOR<ShowUpdateWithoutArtistsInput, ShowUncheckedUpdateWithoutArtistsInput>
  }

  export type ShowUpdateWithoutArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowUncheckedUpdateWithoutArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistUpsertWithoutShowsInput = {
    update: XOR<ArtistUpdateWithoutShowsInput, ArtistUncheckedUpdateWithoutShowsInput>
    create: XOR<ArtistCreateWithoutShowsInput, ArtistUncheckedCreateWithoutShowsInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutShowsInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutShowsInput, ArtistUncheckedUpdateWithoutShowsInput>
  }

  export type ArtistUpdateWithoutShowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    members?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    genres?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistUncheckedUpdateWithoutShowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    members?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    genres?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowArtistCreateManyArtistInput = {
    showId: string
  }

  export type ShowArtistUpdateWithoutArtistInput = {
    show?: ShowUpdateOneRequiredWithoutArtistsNestedInput
  }

  export type ShowArtistUncheckedUpdateWithoutArtistInput = {
    showId?: StringFieldUpdateOperationsInput | string
  }

  export type ShowArtistUncheckedUpdateManyWithoutArtistInput = {
    showId?: StringFieldUpdateOperationsInput | string
  }

  export type ShowArtistCreateManyShowInput = {
    artistId: string
  }

  export type ShowArtistUpdateWithoutShowInput = {
    artist?: ArtistUpdateOneRequiredWithoutShowsNestedInput
  }

  export type ShowArtistUncheckedUpdateWithoutShowInput = {
    artistId?: StringFieldUpdateOperationsInput | string
  }

  export type ShowArtistUncheckedUpdateManyWithoutShowInput = {
    artistId?: StringFieldUpdateOperationsInput | string
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