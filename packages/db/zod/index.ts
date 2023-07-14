import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const AccountScalarFieldEnumSchema = z.enum(['id','userId','type','provider','providerAccountId','refresh_token','access_token','expires_at','token_type','scope','id_token','session_state']);

export const CategoryScalarFieldEnumSchema = z.enum(['id','name','userId','updatedAt','createdAt']);

export const ExpiryDateScalarFieldEnumSchema = z.enum(['id','type','year','month','day','updatedAt','createdAt']);

export const GroupScalarFieldEnumSchema = z.enum(['id','name','userId','groupId','updatedAt','createdAt']);

export const JanScalarFieldEnumSchema = z.enum(['code','updatedAt','createdAt']);

export const JanSiteScalarFieldEnumSchema = z.enum(['id','title','updatedAt','createdAt']);

export const NoteScalarFieldEnumSchema = z.enum(['id','content','updatedAt','createdAt','userId','productId']);

export const ProductScalarFieldEnumSchema = z.enum(['id','title','image','janCode','janSiteId','updatedAt','createdAt']);

export const ProductTagScalarFieldEnumSchema = z.enum(['id','name','userId','updatedAt','createdAt']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SessionScalarFieldEnumSchema = z.enum(['id','sessionToken','expires','userId']);

export const SkuScalarFieldEnumSchema = z.enum(['id','expiryDateId','productId','updatedAt','createdAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const StockScalarFieldEnumSchema = z.enum(['id','description','quantity','userId','skuId','groupId','updatedAt','createdAt']);

export const StockTagScalarFieldEnumSchema = z.enum(['id','name','userId','updatedAt','createdAt']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','emailVerified','image']);

export const VerificationTokenScalarFieldEnumSchema = z.enum(['identifier','token','expires']);

export const ExpiryTypeSchema = z.enum(['EXPIRATION_DATE','BEST_BEFORE_DATE','MANUAL_DATE']);

export type ExpiryTypeType = `${z.infer<typeof ExpiryTypeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// EXPIRY DATE SCHEMA
/////////////////////////////////////////

export const ExpiryDateSchema = z.object({
  type: ExpiryTypeSchema,
  id: z.string().cuid(),
  year: z.number().int(),
  month: z.number().int().nullable(),
  day: z.number().int().nullable(),
  updatedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type ExpiryDate = z.infer<typeof ExpiryDateSchema>

/////////////////////////////////////////
// JAN SCHEMA
/////////////////////////////////////////

export const JanSchema = z.object({
  code: z.string(),
  updatedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type Jan = z.infer<typeof JanSchema>

/////////////////////////////////////////
// JAN SITE SCHEMA
/////////////////////////////////////////

export const JanSiteSchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  updatedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type JanSite = z.infer<typeof JanSiteSchema>

/////////////////////////////////////////
// NOTE SCHEMA
/////////////////////////////////////////

export const NoteSchema = z.object({
  id: z.string().cuid(),
  content: z.string(),
  updatedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
  userId: z.string(),
  productId: z.string().nullable(),
})

export type Note = z.infer<typeof NoteSchema>

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  image: z.string().nullable(),
  janCode: z.string().nullable(),
  janSiteId: z.string().nullable(),
  updatedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type Product = z.infer<typeof ProductSchema>

/////////////////////////////////////////
// SKU SCHEMA
/////////////////////////////////////////

export const SkuSchema = z.object({
  id: z.string().cuid(),
  expiryDateId: z.string().nullable(),
  productId: z.string(),
  updatedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type Sku = z.infer<typeof SkuSchema>

/////////////////////////////////////////
// STOCK SCHEMA
/////////////////////////////////////////

export const StockSchema = z.object({
  id: z.string().cuid(),
  description: z.string().nullable(),
  quantity: z.number().int(),
  userId: z.string(),
  skuId: z.string(),
  groupId: z.string().nullable(),
  updatedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type Stock = z.infer<typeof StockSchema>

/////////////////////////////////////////
// GROUP SCHEMA
/////////////////////////////////////////

export const GroupSchema = z.object({
  id: z.string().cuid(),
  name: z.string().nullable(),
  userId: z.string(),
  groupId: z.string().nullable(),
  updatedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type Group = z.infer<typeof GroupSchema>

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  userId: z.string().nullable(),
  updatedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type Category = z.infer<typeof CategorySchema>

/////////////////////////////////////////
// PRODUCT TAG SCHEMA
/////////////////////////////////////////

export const ProductTagSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  userId: z.string(),
  updatedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type ProductTag = z.infer<typeof ProductTagSchema>

/////////////////////////////////////////
// STOCK TAG SCHEMA
/////////////////////////////////////////

export const StockTagSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  userId: z.string(),
  updatedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type StockTag = z.infer<typeof StockTagSchema>

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().nullable(),
  access_token: z.string().nullable(),
  expires_at: z.number().int().nullable(),
  token_type: z.string().nullable(),
  scope: z.string().nullable(),
  id_token: z.string().nullable(),
  session_state: z.string().nullable(),
})

export type Account = z.infer<typeof AccountSchema>

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string().cuid(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
  userId: z.string(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  name: z.string().nullable(),
  email: z.string().nullable(),
  emailVerified: z.coerce.date().nullable(),
  image: z.string().nullable(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// VERIFICATION TOKEN SCHEMA
/////////////////////////////////////////

export const VerificationTokenSchema = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
})

export type VerificationToken = z.infer<typeof VerificationTokenSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// EXPIRY DATE
//------------------------------------------------------

export const ExpiryDateIncludeSchema: z.ZodType<Prisma.ExpiryDateInclude> = z.object({
  skus: z.union([z.boolean(),z.lazy(() => SkuFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ExpiryDateCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ExpiryDateArgsSchema: z.ZodType<Prisma.ExpiryDateArgs> = z.object({
  select: z.lazy(() => ExpiryDateSelectSchema).optional(),
  include: z.lazy(() => ExpiryDateIncludeSchema).optional(),
}).strict();

export const ExpiryDateCountOutputTypeArgsSchema: z.ZodType<Prisma.ExpiryDateCountOutputTypeArgs> = z.object({
  select: z.lazy(() => ExpiryDateCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ExpiryDateCountOutputTypeSelectSchema: z.ZodType<Prisma.ExpiryDateCountOutputTypeSelect> = z.object({
  skus: z.boolean().optional(),
}).strict();

export const ExpiryDateSelectSchema: z.ZodType<Prisma.ExpiryDateSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  year: z.boolean().optional(),
  month: z.boolean().optional(),
  day: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  skus: z.union([z.boolean(),z.lazy(() => SkuFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ExpiryDateCountOutputTypeArgsSchema)]).optional(),
}).strict()

// JAN
//------------------------------------------------------

export const JanIncludeSchema: z.ZodType<Prisma.JanInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => JanCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const JanArgsSchema: z.ZodType<Prisma.JanArgs> = z.object({
  select: z.lazy(() => JanSelectSchema).optional(),
  include: z.lazy(() => JanIncludeSchema).optional(),
}).strict();

export const JanCountOutputTypeArgsSchema: z.ZodType<Prisma.JanCountOutputTypeArgs> = z.object({
  select: z.lazy(() => JanCountOutputTypeSelectSchema).nullish(),
}).strict();

export const JanCountOutputTypeSelectSchema: z.ZodType<Prisma.JanCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const JanSelectSchema: z.ZodType<Prisma.JanSelect> = z.object({
  code: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => JanCountOutputTypeArgsSchema)]).optional(),
}).strict()

// JAN SITE
//------------------------------------------------------

export const JanSiteIncludeSchema: z.ZodType<Prisma.JanSiteInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => JanSiteCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const JanSiteArgsSchema: z.ZodType<Prisma.JanSiteArgs> = z.object({
  select: z.lazy(() => JanSiteSelectSchema).optional(),
  include: z.lazy(() => JanSiteIncludeSchema).optional(),
}).strict();

export const JanSiteCountOutputTypeArgsSchema: z.ZodType<Prisma.JanSiteCountOutputTypeArgs> = z.object({
  select: z.lazy(() => JanSiteCountOutputTypeSelectSchema).nullish(),
}).strict();

export const JanSiteCountOutputTypeSelectSchema: z.ZodType<Prisma.JanSiteCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const JanSiteSelectSchema: z.ZodType<Prisma.JanSiteSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => JanSiteCountOutputTypeArgsSchema)]).optional(),
}).strict()

// NOTE
//------------------------------------------------------

export const NoteIncludeSchema: z.ZodType<Prisma.NoteInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  Product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

export const NoteArgsSchema: z.ZodType<Prisma.NoteArgs> = z.object({
  select: z.lazy(() => NoteSelectSchema).optional(),
  include: z.lazy(() => NoteIncludeSchema).optional(),
}).strict();

export const NoteSelectSchema: z.ZodType<Prisma.NoteSelect> = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  productId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  Product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

// PRODUCT
//------------------------------------------------------

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z.object({
  jan: z.union([z.boolean(),z.lazy(() => JanArgsSchema)]).optional(),
  janSite: z.union([z.boolean(),z.lazy(() => JanSiteArgsSchema)]).optional(),
  skus: z.union([z.boolean(),z.lazy(() => SkuFindManyArgsSchema)]).optional(),
  productTags: z.union([z.boolean(),z.lazy(() => ProductTagFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => CategoryFindManyArgsSchema)]).optional(),
  notes: z.union([z.boolean(),z.lazy(() => NoteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProductArgsSchema: z.ZodType<Prisma.ProductArgs> = z.object({
  select: z.lazy(() => ProductSelectSchema).optional(),
  include: z.lazy(() => ProductIncludeSchema).optional(),
}).strict();

export const ProductCountOutputTypeArgsSchema: z.ZodType<Prisma.ProductCountOutputTypeArgs> = z.object({
  select: z.lazy(() => ProductCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ProductCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = z.object({
  skus: z.boolean().optional(),
  productTags: z.boolean().optional(),
  categories: z.boolean().optional(),
  notes: z.boolean().optional(),
}).strict();

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  image: z.boolean().optional(),
  janCode: z.boolean().optional(),
  janSiteId: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  jan: z.union([z.boolean(),z.lazy(() => JanArgsSchema)]).optional(),
  janSite: z.union([z.boolean(),z.lazy(() => JanSiteArgsSchema)]).optional(),
  skus: z.union([z.boolean(),z.lazy(() => SkuFindManyArgsSchema)]).optional(),
  productTags: z.union([z.boolean(),z.lazy(() => ProductTagFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => CategoryFindManyArgsSchema)]).optional(),
  notes: z.union([z.boolean(),z.lazy(() => NoteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

// SKU
//------------------------------------------------------

export const SkuIncludeSchema: z.ZodType<Prisma.SkuInclude> = z.object({
  expiryDate: z.union([z.boolean(),z.lazy(() => ExpiryDateArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  stocks: z.union([z.boolean(),z.lazy(() => StockFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SkuCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SkuArgsSchema: z.ZodType<Prisma.SkuArgs> = z.object({
  select: z.lazy(() => SkuSelectSchema).optional(),
  include: z.lazy(() => SkuIncludeSchema).optional(),
}).strict();

export const SkuCountOutputTypeArgsSchema: z.ZodType<Prisma.SkuCountOutputTypeArgs> = z.object({
  select: z.lazy(() => SkuCountOutputTypeSelectSchema).nullish(),
}).strict();

export const SkuCountOutputTypeSelectSchema: z.ZodType<Prisma.SkuCountOutputTypeSelect> = z.object({
  stocks: z.boolean().optional(),
}).strict();

export const SkuSelectSchema: z.ZodType<Prisma.SkuSelect> = z.object({
  id: z.boolean().optional(),
  expiryDateId: z.boolean().optional(),
  productId: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  expiryDate: z.union([z.boolean(),z.lazy(() => ExpiryDateArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  stocks: z.union([z.boolean(),z.lazy(() => StockFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SkuCountOutputTypeArgsSchema)]).optional(),
}).strict()

// STOCK
//------------------------------------------------------

export const StockIncludeSchema: z.ZodType<Prisma.StockInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  sku: z.union([z.boolean(),z.lazy(() => SkuArgsSchema)]).optional(),
  group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  stockTags: z.union([z.boolean(),z.lazy(() => StockTagFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StockCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const StockArgsSchema: z.ZodType<Prisma.StockArgs> = z.object({
  select: z.lazy(() => StockSelectSchema).optional(),
  include: z.lazy(() => StockIncludeSchema).optional(),
}).strict();

export const StockCountOutputTypeArgsSchema: z.ZodType<Prisma.StockCountOutputTypeArgs> = z.object({
  select: z.lazy(() => StockCountOutputTypeSelectSchema).nullish(),
}).strict();

export const StockCountOutputTypeSelectSchema: z.ZodType<Prisma.StockCountOutputTypeSelect> = z.object({
  stockTags: z.boolean().optional(),
}).strict();

export const StockSelectSchema: z.ZodType<Prisma.StockSelect> = z.object({
  id: z.boolean().optional(),
  description: z.boolean().optional(),
  quantity: z.boolean().optional(),
  userId: z.boolean().optional(),
  skuId: z.boolean().optional(),
  groupId: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  sku: z.union([z.boolean(),z.lazy(() => SkuArgsSchema)]).optional(),
  group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  stockTags: z.union([z.boolean(),z.lazy(() => StockTagFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StockCountOutputTypeArgsSchema)]).optional(),
}).strict()

// GROUP
//------------------------------------------------------

export const GroupIncludeSchema: z.ZodType<Prisma.GroupInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  groups: z.union([z.boolean(),z.lazy(() => GroupFindManyArgsSchema)]).optional(),
  stocks: z.union([z.boolean(),z.lazy(() => StockFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GroupCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const GroupArgsSchema: z.ZodType<Prisma.GroupArgs> = z.object({
  select: z.lazy(() => GroupSelectSchema).optional(),
  include: z.lazy(() => GroupIncludeSchema).optional(),
}).strict();

export const GroupCountOutputTypeArgsSchema: z.ZodType<Prisma.GroupCountOutputTypeArgs> = z.object({
  select: z.lazy(() => GroupCountOutputTypeSelectSchema).nullish(),
}).strict();

export const GroupCountOutputTypeSelectSchema: z.ZodType<Prisma.GroupCountOutputTypeSelect> = z.object({
  groups: z.boolean().optional(),
  stocks: z.boolean().optional(),
}).strict();

export const GroupSelectSchema: z.ZodType<Prisma.GroupSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  userId: z.boolean().optional(),
  groupId: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  groups: z.union([z.boolean(),z.lazy(() => GroupFindManyArgsSchema)]).optional(),
  stocks: z.union([z.boolean(),z.lazy(() => StockFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GroupCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CATEGORY
//------------------------------------------------------

export const CategoryIncludeSchema: z.ZodType<Prisma.CategoryInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CategoryArgsSchema: z.ZodType<Prisma.CategoryArgs> = z.object({
  select: z.lazy(() => CategorySelectSchema).optional(),
  include: z.lazy(() => CategoryIncludeSchema).optional(),
}).strict();

export const CategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.CategoryCountOutputTypeArgs> = z.object({
  select: z.lazy(() => CategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.CategoryCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const CategorySelectSchema: z.ZodType<Prisma.CategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  userId: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PRODUCT TAG
//------------------------------------------------------

export const ProductTagIncludeSchema: z.ZodType<Prisma.ProductTagInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductTagCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProductTagArgsSchema: z.ZodType<Prisma.ProductTagArgs> = z.object({
  select: z.lazy(() => ProductTagSelectSchema).optional(),
  include: z.lazy(() => ProductTagIncludeSchema).optional(),
}).strict();

export const ProductTagCountOutputTypeArgsSchema: z.ZodType<Prisma.ProductTagCountOutputTypeArgs> = z.object({
  select: z.lazy(() => ProductTagCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ProductTagCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductTagCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const ProductTagSelectSchema: z.ZodType<Prisma.ProductTagSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  userId: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductTagCountOutputTypeArgsSchema)]).optional(),
}).strict()

// STOCK TAG
//------------------------------------------------------

export const StockTagIncludeSchema: z.ZodType<Prisma.StockTagInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  stocks: z.union([z.boolean(),z.lazy(() => StockFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StockTagCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const StockTagArgsSchema: z.ZodType<Prisma.StockTagArgs> = z.object({
  select: z.lazy(() => StockTagSelectSchema).optional(),
  include: z.lazy(() => StockTagIncludeSchema).optional(),
}).strict();

export const StockTagCountOutputTypeArgsSchema: z.ZodType<Prisma.StockTagCountOutputTypeArgs> = z.object({
  select: z.lazy(() => StockTagCountOutputTypeSelectSchema).nullish(),
}).strict();

export const StockTagCountOutputTypeSelectSchema: z.ZodType<Prisma.StockTagCountOutputTypeSelect> = z.object({
  stocks: z.boolean().optional(),
}).strict();

export const StockTagSelectSchema: z.ZodType<Prisma.StockTagSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  userId: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  stocks: z.union([z.boolean(),z.lazy(() => StockFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StockTagCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const AccountArgsSchema: z.ZodType<Prisma.AccountArgs> = z.object({
  select: z.lazy(() => AccountSelectSchema).optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
}).strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  type: z.boolean().optional(),
  provider: z.boolean().optional(),
  providerAccountId: z.boolean().optional(),
  refresh_token: z.boolean().optional(),
  access_token: z.boolean().optional(),
  expires_at: z.boolean().optional(),
  token_type: z.boolean().optional(),
  scope: z.boolean().optional(),
  id_token: z.boolean().optional(),
  session_state: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SessionArgsSchema: z.ZodType<Prisma.SessionArgs> = z.object({
  select: z.lazy(() => SessionSelectSchema).optional(),
  include: z.lazy(() => SessionIncludeSchema).optional(),
}).strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  id: z.boolean().optional(),
  sessionToken: z.boolean().optional(),
  expires: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  stocks: z.union([z.boolean(),z.lazy(() => StockFindManyArgsSchema)]).optional(),
  groups: z.union([z.boolean(),z.lazy(() => GroupFindManyArgsSchema)]).optional(),
  productTags: z.union([z.boolean(),z.lazy(() => ProductTagFindManyArgsSchema)]).optional(),
  stockTags: z.union([z.boolean(),z.lazy(() => StockTagFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => CategoryFindManyArgsSchema)]).optional(),
  notes: z.union([z.boolean(),z.lazy(() => NoteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  accounts: z.boolean().optional(),
  sessions: z.boolean().optional(),
  stocks: z.boolean().optional(),
  groups: z.boolean().optional(),
  productTags: z.boolean().optional(),
  stockTags: z.boolean().optional(),
  categories: z.boolean().optional(),
  notes: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  stocks: z.union([z.boolean(),z.lazy(() => StockFindManyArgsSchema)]).optional(),
  groups: z.union([z.boolean(),z.lazy(() => GroupFindManyArgsSchema)]).optional(),
  productTags: z.union([z.boolean(),z.lazy(() => ProductTagFindManyArgsSchema)]).optional(),
  stockTags: z.union([z.boolean(),z.lazy(() => StockTagFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => CategoryFindManyArgsSchema)]).optional(),
  notes: z.union([z.boolean(),z.lazy(() => NoteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// VERIFICATION TOKEN
//------------------------------------------------------

export const VerificationTokenSelectSchema: z.ZodType<Prisma.VerificationTokenSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ExpiryDateWhereInputSchema: z.ZodType<Prisma.ExpiryDateWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ExpiryDateWhereInputSchema),z.lazy(() => ExpiryDateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExpiryDateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExpiryDateWhereInputSchema),z.lazy(() => ExpiryDateWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumExpiryTypeFilterSchema),z.lazy(() => ExpiryTypeSchema) ]).optional(),
  year: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  month: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  day: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  skus: z.lazy(() => SkuListRelationFilterSchema).optional()
}).strict();

export const ExpiryDateOrderByWithRelationInputSchema: z.ZodType<Prisma.ExpiryDateOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  month: z.lazy(() => SortOrderSchema).optional(),
  day: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  skus: z.lazy(() => SkuOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ExpiryDateWhereUniqueInputSchema: z.ZodType<Prisma.ExpiryDateWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  type_year_month_day: z.lazy(() => ExpiryDateTypeYearMonthDayCompoundUniqueInputSchema).optional()
}).strict();

export const ExpiryDateOrderByWithAggregationInputSchema: z.ZodType<Prisma.ExpiryDateOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  month: z.lazy(() => SortOrderSchema).optional(),
  day: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ExpiryDateCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ExpiryDateAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ExpiryDateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ExpiryDateMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ExpiryDateSumOrderByAggregateInputSchema).optional()
}).strict();

export const ExpiryDateScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ExpiryDateScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ExpiryDateScalarWhereWithAggregatesInputSchema),z.lazy(() => ExpiryDateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExpiryDateScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExpiryDateScalarWhereWithAggregatesInputSchema),z.lazy(() => ExpiryDateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumExpiryTypeWithAggregatesFilterSchema),z.lazy(() => ExpiryTypeSchema) ]).optional(),
  year: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  month: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  day: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const JanWhereInputSchema: z.ZodType<Prisma.JanWhereInput> = z.object({
  AND: z.union([ z.lazy(() => JanWhereInputSchema),z.lazy(() => JanWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => JanWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JanWhereInputSchema),z.lazy(() => JanWhereInputSchema).array() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict();

export const JanOrderByWithRelationInputSchema: z.ZodType<Prisma.JanOrderByWithRelationInput> = z.object({
  code: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional()
}).strict();

export const JanWhereUniqueInputSchema: z.ZodType<Prisma.JanWhereUniqueInput> = z.object({
  code: z.string().optional()
}).strict();

export const JanOrderByWithAggregationInputSchema: z.ZodType<Prisma.JanOrderByWithAggregationInput> = z.object({
  code: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => JanCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => JanMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => JanMinOrderByAggregateInputSchema).optional()
}).strict();

export const JanScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.JanScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => JanScalarWhereWithAggregatesInputSchema),z.lazy(() => JanScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => JanScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JanScalarWhereWithAggregatesInputSchema),z.lazy(() => JanScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  code: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const JanSiteWhereInputSchema: z.ZodType<Prisma.JanSiteWhereInput> = z.object({
  AND: z.union([ z.lazy(() => JanSiteWhereInputSchema),z.lazy(() => JanSiteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => JanSiteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JanSiteWhereInputSchema),z.lazy(() => JanSiteWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict();

export const JanSiteOrderByWithRelationInputSchema: z.ZodType<Prisma.JanSiteOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional()
}).strict();

export const JanSiteWhereUniqueInputSchema: z.ZodType<Prisma.JanSiteWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const JanSiteOrderByWithAggregationInputSchema: z.ZodType<Prisma.JanSiteOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => JanSiteCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => JanSiteMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => JanSiteMinOrderByAggregateInputSchema).optional()
}).strict();

export const JanSiteScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.JanSiteScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => JanSiteScalarWhereWithAggregatesInputSchema),z.lazy(() => JanSiteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => JanSiteScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JanSiteScalarWhereWithAggregatesInputSchema),z.lazy(() => JanSiteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const NoteWhereInputSchema: z.ZodType<Prisma.NoteWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NoteWhereInputSchema),z.lazy(() => NoteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NoteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NoteWhereInputSchema),z.lazy(() => NoteWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  Product: z.union([ z.lazy(() => ProductRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional().nullable(),
}).strict();

export const NoteOrderByWithRelationInputSchema: z.ZodType<Prisma.NoteOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  Product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional()
}).strict();

export const NoteWhereUniqueInputSchema: z.ZodType<Prisma.NoteWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const NoteOrderByWithAggregationInputSchema: z.ZodType<Prisma.NoteOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NoteCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NoteMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NoteMinOrderByAggregateInputSchema).optional()
}).strict();

export const NoteScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NoteScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NoteScalarWhereWithAggregatesInputSchema),z.lazy(() => NoteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NoteScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NoteScalarWhereWithAggregatesInputSchema),z.lazy(() => NoteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ProductWhereInputSchema: z.ZodType<Prisma.ProductWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  janCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  janSiteId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  jan: z.union([ z.lazy(() => JanRelationFilterSchema),z.lazy(() => JanWhereInputSchema) ]).optional().nullable(),
  janSite: z.union([ z.lazy(() => JanSiteRelationFilterSchema),z.lazy(() => JanSiteWhereInputSchema) ]).optional().nullable(),
  skus: z.lazy(() => SkuListRelationFilterSchema).optional(),
  productTags: z.lazy(() => ProductTagListRelationFilterSchema).optional(),
  categories: z.lazy(() => CategoryListRelationFilterSchema).optional(),
  notes: z.lazy(() => NoteListRelationFilterSchema).optional()
}).strict();

export const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  janCode: z.lazy(() => SortOrderSchema).optional(),
  janSiteId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  jan: z.lazy(() => JanOrderByWithRelationInputSchema).optional(),
  janSite: z.lazy(() => JanSiteOrderByWithRelationInputSchema).optional(),
  skus: z.lazy(() => SkuOrderByRelationAggregateInputSchema).optional(),
  productTags: z.lazy(() => ProductTagOrderByRelationAggregateInputSchema).optional(),
  categories: z.lazy(() => CategoryOrderByRelationAggregateInputSchema).optional(),
  notes: z.lazy(() => NoteOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  title_janCode: z.lazy(() => ProductTitleJanCodeCompoundUniqueInputSchema).optional()
}).strict();

export const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  janCode: z.lazy(() => SortOrderSchema).optional(),
  janSiteId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductMinOrderByAggregateInputSchema).optional()
}).strict();

export const ProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  janCode: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  janSiteId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const SkuWhereInputSchema: z.ZodType<Prisma.SkuWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SkuWhereInputSchema),z.lazy(() => SkuWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkuWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkuWhereInputSchema),z.lazy(() => SkuWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiryDateId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  productId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expiryDate: z.union([ z.lazy(() => ExpiryDateRelationFilterSchema),z.lazy(() => ExpiryDateWhereInputSchema) ]).optional().nullable(),
  product: z.union([ z.lazy(() => ProductRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
  stocks: z.lazy(() => StockListRelationFilterSchema).optional()
}).strict();

export const SkuOrderByWithRelationInputSchema: z.ZodType<Prisma.SkuOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiryDateId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  expiryDate: z.lazy(() => ExpiryDateOrderByWithRelationInputSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional(),
  stocks: z.lazy(() => StockOrderByRelationAggregateInputSchema).optional()
}).strict();

export const SkuWhereUniqueInputSchema: z.ZodType<Prisma.SkuWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  expiryDateId_productId: z.lazy(() => SkuExpiryDateIdProductIdCompoundUniqueInputSchema).optional()
}).strict();

export const SkuOrderByWithAggregationInputSchema: z.ZodType<Prisma.SkuOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiryDateId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SkuCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SkuMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SkuMinOrderByAggregateInputSchema).optional()
}).strict();

export const SkuScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SkuScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SkuScalarWhereWithAggregatesInputSchema),z.lazy(() => SkuScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkuScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkuScalarWhereWithAggregatesInputSchema),z.lazy(() => SkuScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expiryDateId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  productId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const StockWhereInputSchema: z.ZodType<Prisma.StockWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StockWhereInputSchema),z.lazy(() => StockWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StockWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StockWhereInputSchema),z.lazy(() => StockWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  skuId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  groupId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  sku: z.union([ z.lazy(() => SkuRelationFilterSchema),z.lazy(() => SkuWhereInputSchema) ]).optional(),
  group: z.union([ z.lazy(() => GroupRelationFilterSchema),z.lazy(() => GroupWhereInputSchema) ]).optional().nullable(),
  stockTags: z.lazy(() => StockTagListRelationFilterSchema).optional()
}).strict();

export const StockOrderByWithRelationInputSchema: z.ZodType<Prisma.StockOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  skuId: z.lazy(() => SortOrderSchema).optional(),
  groupId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  sku: z.lazy(() => SkuOrderByWithRelationInputSchema).optional(),
  group: z.lazy(() => GroupOrderByWithRelationInputSchema).optional(),
  stockTags: z.lazy(() => StockTagOrderByRelationAggregateInputSchema).optional()
}).strict();

export const StockWhereUniqueInputSchema: z.ZodType<Prisma.StockWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  skuId_groupId_userId: z.lazy(() => StockSkuIdGroupIdUserIdCompoundUniqueInputSchema).optional()
}).strict();

export const StockOrderByWithAggregationInputSchema: z.ZodType<Prisma.StockOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  skuId: z.lazy(() => SortOrderSchema).optional(),
  groupId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => StockCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => StockAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => StockMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => StockMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => StockSumOrderByAggregateInputSchema).optional()
}).strict();

export const StockScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StockScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => StockScalarWhereWithAggregatesInputSchema),z.lazy(() => StockScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StockScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StockScalarWhereWithAggregatesInputSchema),z.lazy(() => StockScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  skuId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  groupId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const GroupWhereInputSchema: z.ZodType<Prisma.GroupWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GroupWhereInputSchema),z.lazy(() => GroupWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupWhereInputSchema),z.lazy(() => GroupWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  groupId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  group: z.union([ z.lazy(() => GroupRelationFilterSchema),z.lazy(() => GroupWhereInputSchema) ]).optional().nullable(),
  groups: z.lazy(() => GroupListRelationFilterSchema).optional(),
  stocks: z.lazy(() => StockListRelationFilterSchema).optional()
}).strict();

export const GroupOrderByWithRelationInputSchema: z.ZodType<Prisma.GroupOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  groupId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  group: z.lazy(() => GroupOrderByWithRelationInputSchema).optional(),
  groups: z.lazy(() => GroupOrderByRelationAggregateInputSchema).optional(),
  stocks: z.lazy(() => StockOrderByRelationAggregateInputSchema).optional()
}).strict();

export const GroupWhereUniqueInputSchema: z.ZodType<Prisma.GroupWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  name_userId_groupId: z.lazy(() => GroupNameUserIdGroupIdCompoundUniqueInputSchema).optional()
}).strict();

export const GroupOrderByWithAggregationInputSchema: z.ZodType<Prisma.GroupOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  groupId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GroupCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GroupMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GroupMinOrderByAggregateInputSchema).optional()
}).strict();

export const GroupScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GroupScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GroupScalarWhereWithAggregatesInputSchema),z.lazy(() => GroupScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupScalarWhereWithAggregatesInputSchema),z.lazy(() => GroupScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  groupId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CategoryWhereInputSchema: z.ZodType<Prisma.CategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict();

export const CategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CategoryWhereUniqueInputSchema: z.ZodType<Prisma.CategoryWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  name_userId: z.lazy(() => CategoryNameUserIdCompoundUniqueInputSchema).optional()
}).strict();

export const CategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.CategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CategoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CategoryMinOrderByAggregateInputSchema).optional()
}).strict();

export const CategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CategoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ProductTagWhereInputSchema: z.ZodType<Prisma.ProductTagWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductTagWhereInputSchema),z.lazy(() => ProductTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductTagWhereInputSchema),z.lazy(() => ProductTagWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict();

export const ProductTagOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductTagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ProductTagWhereUniqueInputSchema: z.ZodType<Prisma.ProductTagWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  name_userId: z.lazy(() => ProductTagNameUserIdCompoundUniqueInputSchema).optional()
}).strict();

export const ProductTagOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductTagOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductTagCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductTagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductTagMinOrderByAggregateInputSchema).optional()
}).strict();

export const ProductTagScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductTagScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductTagScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductTagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductTagScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const StockTagWhereInputSchema: z.ZodType<Prisma.StockTagWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StockTagWhereInputSchema),z.lazy(() => StockTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StockTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StockTagWhereInputSchema),z.lazy(() => StockTagWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  stocks: z.lazy(() => StockListRelationFilterSchema).optional()
}).strict();

export const StockTagOrderByWithRelationInputSchema: z.ZodType<Prisma.StockTagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  stocks: z.lazy(() => StockOrderByRelationAggregateInputSchema).optional()
}).strict();

export const StockTagWhereUniqueInputSchema: z.ZodType<Prisma.StockTagWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  name_userId: z.lazy(() => StockTagNameUserIdCompoundUniqueInputSchema).optional()
}).strict();

export const StockTagOrderByWithAggregationInputSchema: z.ZodType<Prisma.StockTagOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => StockTagCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => StockTagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => StockTagMinOrderByAggregateInputSchema).optional()
}).strict();

export const StockTagScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StockTagScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => StockTagScalarWhereWithAggregatesInputSchema),z.lazy(() => StockTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StockTagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StockTagScalarWhereWithAggregatesInputSchema),z.lazy(() => StockTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema).optional()
}).strict();

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AccountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AccountSumOrderByAggregateInputSchema).optional()
}).strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string().optional()
}).strict();

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional()
}).strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  stocks: z.lazy(() => StockListRelationFilterSchema).optional(),
  groups: z.lazy(() => GroupListRelationFilterSchema).optional(),
  productTags: z.lazy(() => ProductTagListRelationFilterSchema).optional(),
  stockTags: z.lazy(() => StockTagListRelationFilterSchema).optional(),
  categories: z.lazy(() => CategoryListRelationFilterSchema).optional(),
  notes: z.lazy(() => NoteListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
  stocks: z.lazy(() => StockOrderByRelationAggregateInputSchema).optional(),
  groups: z.lazy(() => GroupOrderByRelationAggregateInputSchema).optional(),
  productTags: z.lazy(() => ProductTagOrderByRelationAggregateInputSchema).optional(),
  stockTags: z.lazy(() => StockTagOrderByRelationAggregateInputSchema).optional(),
  categories: z.lazy(() => CategoryOrderByRelationAggregateInputSchema).optional(),
  notes: z.lazy(() => NoteOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional()
}).strict();

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const VerificationTokenWhereInputSchema: z.ZodType<Prisma.VerificationTokenWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VerificationTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithRelationInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenWhereUniqueInputSchema: z.ZodType<Prisma.VerificationTokenWhereUniqueInput> = z.object({
  token: z.string().optional(),
  identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema).optional()
}).strict();

export const VerificationTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithAggregationInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VerificationTokenCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VerificationTokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VerificationTokenMinOrderByAggregateInputSchema).optional()
}).strict();

export const VerificationTokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VerificationTokenScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ExpiryDateCreateInputSchema: z.ZodType<Prisma.ExpiryDateCreateInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.lazy(() => ExpiryTypeSchema),
  year: z.number().int(),
  month: z.number().int().optional().nullable(),
  day: z.number().int().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  skus: z.lazy(() => SkuCreateNestedManyWithoutExpiryDateInputSchema).optional()
}).strict();

export const ExpiryDateUncheckedCreateInputSchema: z.ZodType<Prisma.ExpiryDateUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.lazy(() => ExpiryTypeSchema),
  year: z.number().int(),
  month: z.number().int().optional().nullable(),
  day: z.number().int().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  skus: z.lazy(() => SkuUncheckedCreateNestedManyWithoutExpiryDateInputSchema).optional()
}).strict();

export const ExpiryDateUpdateInputSchema: z.ZodType<Prisma.ExpiryDateUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ExpiryTypeSchema),z.lazy(() => EnumExpiryTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  month: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  day: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  skus: z.lazy(() => SkuUpdateManyWithoutExpiryDateNestedInputSchema).optional()
}).strict();

export const ExpiryDateUncheckedUpdateInputSchema: z.ZodType<Prisma.ExpiryDateUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ExpiryTypeSchema),z.lazy(() => EnumExpiryTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  month: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  day: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  skus: z.lazy(() => SkuUncheckedUpdateManyWithoutExpiryDateNestedInputSchema).optional()
}).strict();

export const ExpiryDateCreateManyInputSchema: z.ZodType<Prisma.ExpiryDateCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.lazy(() => ExpiryTypeSchema),
  year: z.number().int(),
  month: z.number().int().optional().nullable(),
  day: z.number().int().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ExpiryDateUpdateManyMutationInputSchema: z.ZodType<Prisma.ExpiryDateUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ExpiryTypeSchema),z.lazy(() => EnumExpiryTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  month: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  day: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ExpiryDateUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ExpiryDateUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ExpiryTypeSchema),z.lazy(() => EnumExpiryTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  month: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  day: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JanCreateInputSchema: z.ZodType<Prisma.JanCreateInput> = z.object({
  code: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutJanInputSchema).optional()
}).strict();

export const JanUncheckedCreateInputSchema: z.ZodType<Prisma.JanUncheckedCreateInput> = z.object({
  code: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutJanInputSchema).optional()
}).strict();

export const JanUpdateInputSchema: z.ZodType<Prisma.JanUpdateInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutJanNestedInputSchema).optional()
}).strict();

export const JanUncheckedUpdateInputSchema: z.ZodType<Prisma.JanUncheckedUpdateInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutJanNestedInputSchema).optional()
}).strict();

export const JanCreateManyInputSchema: z.ZodType<Prisma.JanCreateManyInput> = z.object({
  code: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const JanUpdateManyMutationInputSchema: z.ZodType<Prisma.JanUpdateManyMutationInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JanUncheckedUpdateManyInputSchema: z.ZodType<Prisma.JanUncheckedUpdateManyInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JanSiteCreateInputSchema: z.ZodType<Prisma.JanSiteCreateInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutJanSiteInputSchema).optional()
}).strict();

export const JanSiteUncheckedCreateInputSchema: z.ZodType<Prisma.JanSiteUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutJanSiteInputSchema).optional()
}).strict();

export const JanSiteUpdateInputSchema: z.ZodType<Prisma.JanSiteUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutJanSiteNestedInputSchema).optional()
}).strict();

export const JanSiteUncheckedUpdateInputSchema: z.ZodType<Prisma.JanSiteUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutJanSiteNestedInputSchema).optional()
}).strict();

export const JanSiteCreateManyInputSchema: z.ZodType<Prisma.JanSiteCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const JanSiteUpdateManyMutationInputSchema: z.ZodType<Prisma.JanSiteUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JanSiteUncheckedUpdateManyInputSchema: z.ZodType<Prisma.JanSiteUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NoteCreateInputSchema: z.ZodType<Prisma.NoteCreateInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutNotesInputSchema),
  Product: z.lazy(() => ProductCreateNestedOneWithoutNotesInputSchema).optional()
}).strict();

export const NoteUncheckedCreateInputSchema: z.ZodType<Prisma.NoteUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  productId: z.string().optional().nullable()
}).strict();

export const NoteUpdateInputSchema: z.ZodType<Prisma.NoteUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutNotesNestedInputSchema).optional(),
  Product: z.lazy(() => ProductUpdateOneWithoutNotesNestedInputSchema).optional()
}).strict();

export const NoteUncheckedUpdateInputSchema: z.ZodType<Prisma.NoteUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const NoteCreateManyInputSchema: z.ZodType<Prisma.NoteCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  productId: z.string().optional().nullable()
}).strict();

export const NoteUpdateManyMutationInputSchema: z.ZodType<Prisma.NoteUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NoteUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NoteUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  jan: z.lazy(() => JanCreateNestedOneWithoutProductsInputSchema).optional(),
  janSite: z.lazy(() => JanSiteCreateNestedOneWithoutProductsInputSchema).optional(),
  skus: z.lazy(() => SkuCreateNestedManyWithoutProductInputSchema).optional(),
  productTags: z.lazy(() => ProductTagCreateNestedManyWithoutProductsInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutProductsInputSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string().optional().nullable(),
  janCode: z.string().optional().nullable(),
  janSiteId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  skus: z.lazy(() => SkuUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jan: z.lazy(() => JanUpdateOneWithoutProductsNestedInputSchema).optional(),
  janSite: z.lazy(() => JanSiteUpdateOneWithoutProductsNestedInputSchema).optional(),
  skus: z.lazy(() => SkuUpdateManyWithoutProductNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUpdateManyWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutProductsNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  janCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  janSiteId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  skus: z.lazy(() => SkuUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string().optional().nullable(),
  janCode: z.string().optional().nullable(),
  janSiteId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  janCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  janSiteId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SkuCreateInputSchema: z.ZodType<Prisma.SkuCreateInput> = z.object({
  id: z.string().cuid().optional(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  expiryDate: z.lazy(() => ExpiryDateCreateNestedOneWithoutSkusInputSchema).optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutSkusInputSchema),
  stocks: z.lazy(() => StockCreateNestedManyWithoutSkuInputSchema).optional()
}).strict();

export const SkuUncheckedCreateInputSchema: z.ZodType<Prisma.SkuUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  expiryDateId: z.string().optional().nullable(),
  productId: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  stocks: z.lazy(() => StockUncheckedCreateNestedManyWithoutSkuInputSchema).optional()
}).strict();

export const SkuUpdateInputSchema: z.ZodType<Prisma.SkuUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiryDate: z.lazy(() => ExpiryDateUpdateOneWithoutSkusNestedInputSchema).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutSkusNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUpdateManyWithoutSkuNestedInputSchema).optional()
}).strict();

export const SkuUncheckedUpdateInputSchema: z.ZodType<Prisma.SkuUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiryDateId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  stocks: z.lazy(() => StockUncheckedUpdateManyWithoutSkuNestedInputSchema).optional()
}).strict();

export const SkuCreateManyInputSchema: z.ZodType<Prisma.SkuCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  expiryDateId: z.string().optional().nullable(),
  productId: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const SkuUpdateManyMutationInputSchema: z.ZodType<Prisma.SkuUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SkuUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SkuUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiryDateId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StockCreateInputSchema: z.ZodType<Prisma.StockCreateInput> = z.object({
  id: z.string().cuid().optional(),
  description: z.string().optional().nullable(),
  quantity: z.number().int().optional(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutStocksInputSchema),
  sku: z.lazy(() => SkuCreateNestedOneWithoutStocksInputSchema),
  group: z.lazy(() => GroupCreateNestedOneWithoutStocksInputSchema).optional(),
  stockTags: z.lazy(() => StockTagCreateNestedManyWithoutStocksInputSchema).optional()
}).strict();

export const StockUncheckedCreateInputSchema: z.ZodType<Prisma.StockUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  description: z.string().optional().nullable(),
  quantity: z.number().int().optional(),
  userId: z.string(),
  skuId: z.string(),
  groupId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  stockTags: z.lazy(() => StockTagUncheckedCreateNestedManyWithoutStocksInputSchema).optional()
}).strict();

export const StockUpdateInputSchema: z.ZodType<Prisma.StockUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutStocksNestedInputSchema).optional(),
  sku: z.lazy(() => SkuUpdateOneRequiredWithoutStocksNestedInputSchema).optional(),
  group: z.lazy(() => GroupUpdateOneWithoutStocksNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUpdateManyWithoutStocksNestedInputSchema).optional()
}).strict();

export const StockUncheckedUpdateInputSchema: z.ZodType<Prisma.StockUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skuId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  groupId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  stockTags: z.lazy(() => StockTagUncheckedUpdateManyWithoutStocksNestedInputSchema).optional()
}).strict();

export const StockCreateManyInputSchema: z.ZodType<Prisma.StockCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  description: z.string().optional().nullable(),
  quantity: z.number().int().optional(),
  userId: z.string(),
  skuId: z.string(),
  groupId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const StockUpdateManyMutationInputSchema: z.ZodType<Prisma.StockUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StockUncheckedUpdateManyInputSchema: z.ZodType<Prisma.StockUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skuId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  groupId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GroupCreateInputSchema: z.ZodType<Prisma.GroupCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutGroupsInputSchema),
  group: z.lazy(() => GroupCreateNestedOneWithoutGroupsInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutGroupInputSchema).optional(),
  stocks: z.lazy(() => StockCreateNestedManyWithoutGroupInputSchema).optional()
}).strict();

export const GroupUncheckedCreateInputSchema: z.ZodType<Prisma.GroupUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  userId: z.string(),
  groupId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutGroupInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedCreateNestedManyWithoutGroupInputSchema).optional()
}).strict();

export const GroupUpdateInputSchema: z.ZodType<Prisma.GroupUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutGroupsNestedInputSchema).optional(),
  group: z.lazy(() => GroupUpdateOneWithoutGroupsNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutGroupNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUpdateManyWithoutGroupNestedInputSchema).optional()
}).strict();

export const GroupUncheckedUpdateInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  groupId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutGroupNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedUpdateManyWithoutGroupNestedInputSchema).optional()
}).strict();

export const GroupCreateManyInputSchema: z.ZodType<Prisma.GroupCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  userId: z.string(),
  groupId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const GroupUpdateManyMutationInputSchema: z.ZodType<Prisma.GroupUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GroupUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  groupId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryCreateInputSchema: z.ZodType<Prisma.CategoryCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCategoriesInputSchema).optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutCategoriesInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  userId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutCategoriesInputSchema).optional()
}).strict();

export const CategoryUpdateInputSchema: z.ZodType<Prisma.CategoryUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutCategoriesNestedInputSchema).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const CategoryCreateManyInputSchema: z.ZodType<Prisma.CategoryCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  userId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const CategoryUpdateManyMutationInputSchema: z.ZodType<Prisma.CategoryUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductTagCreateInputSchema: z.ZodType<Prisma.ProductTagCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProductTagsInputSchema),
  products: z.lazy(() => ProductCreateNestedManyWithoutProductTagsInputSchema).optional()
}).strict();

export const ProductTagUncheckedCreateInputSchema: z.ZodType<Prisma.ProductTagUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  userId: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutProductTagsInputSchema).optional()
}).strict();

export const ProductTagUpdateInputSchema: z.ZodType<Prisma.ProductTagUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutProductTagsNestedInputSchema).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutProductTagsNestedInputSchema).optional()
}).strict();

export const ProductTagUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductTagUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutProductTagsNestedInputSchema).optional()
}).strict();

export const ProductTagCreateManyInputSchema: z.ZodType<Prisma.ProductTagCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  userId: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ProductTagUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductTagUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductTagUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductTagUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StockTagCreateInputSchema: z.ZodType<Prisma.StockTagCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutStockTagsInputSchema),
  stocks: z.lazy(() => StockCreateNestedManyWithoutStockTagsInputSchema).optional()
}).strict();

export const StockTagUncheckedCreateInputSchema: z.ZodType<Prisma.StockTagUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  userId: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  stocks: z.lazy(() => StockUncheckedCreateNestedManyWithoutStockTagsInputSchema).optional()
}).strict();

export const StockTagUpdateInputSchema: z.ZodType<Prisma.StockTagUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutStockTagsNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUpdateManyWithoutStockTagsNestedInputSchema).optional()
}).strict();

export const StockTagUncheckedUpdateInputSchema: z.ZodType<Prisma.StockTagUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  stocks: z.lazy(() => StockUncheckedUpdateManyWithoutStockTagsNestedInputSchema).optional()
}).strict();

export const StockTagCreateManyInputSchema: z.ZodType<Prisma.StockTagCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  userId: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const StockTagUpdateManyMutationInputSchema: z.ZodType<Prisma.StockTagUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StockTagUncheckedUpdateManyInputSchema: z.ZodType<Prisma.StockTagUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema)
}).strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema)
}).strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
  userId: z.string()
}).strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema).optional()
}).strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
  userId: z.string()
}).strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  stocks: z.lazy(() => StockCreateNestedManyWithoutUserInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutUserInputSchema).optional(),
  productTags: z.lazy(() => ProductTagCreateNestedManyWithoutUserInputSchema).optional(),
  stockTags: z.lazy(() => StockTagCreateNestedManyWithoutUserInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutUserInputSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUpdateManyWithoutUserNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutUserNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUpdateManyWithoutUserNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUpdateManyWithoutUserNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutUserNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const VerificationTokenCreateInputSchema: z.ZodType<Prisma.VerificationTokenCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUpdateInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenCreateManyInputSchema: z.ZodType<Prisma.VerificationTokenCreateManyInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateManyMutationInputSchema: z.ZodType<Prisma.VerificationTokenUpdateManyMutationInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateManyInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.union([ z.string().array(),z.string() ]).optional(),
  notIn: z.union([ z.string().array(),z.string() ]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const EnumExpiryTypeFilterSchema: z.ZodType<Prisma.EnumExpiryTypeFilter> = z.object({
  equals: z.lazy(() => ExpiryTypeSchema).optional(),
  in: z.union([ z.lazy(() => ExpiryTypeSchema).array(),z.lazy(() => ExpiryTypeSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => ExpiryTypeSchema).array(),z.lazy(() => ExpiryTypeSchema) ]).optional(),
  not: z.union([ z.lazy(() => ExpiryTypeSchema),z.lazy(() => NestedEnumExpiryTypeFilterSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const SkuListRelationFilterSchema: z.ZodType<Prisma.SkuListRelationFilter> = z.object({
  every: z.lazy(() => SkuWhereInputSchema).optional(),
  some: z.lazy(() => SkuWhereInputSchema).optional(),
  none: z.lazy(() => SkuWhereInputSchema).optional()
}).strict();

export const SkuOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SkuOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ExpiryDateTypeYearMonthDayCompoundUniqueInputSchema: z.ZodType<Prisma.ExpiryDateTypeYearMonthDayCompoundUniqueInput> = z.object({
  type: z.lazy(() => ExpiryTypeSchema),
  year: z.number(),
  month: z.number(),
  day: z.number()
}).strict();

export const ExpiryDateCountOrderByAggregateInputSchema: z.ZodType<Prisma.ExpiryDateCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  month: z.lazy(() => SortOrderSchema).optional(),
  day: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ExpiryDateAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ExpiryDateAvgOrderByAggregateInput> = z.object({
  year: z.lazy(() => SortOrderSchema).optional(),
  month: z.lazy(() => SortOrderSchema).optional(),
  day: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ExpiryDateMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ExpiryDateMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  month: z.lazy(() => SortOrderSchema).optional(),
  day: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ExpiryDateMinOrderByAggregateInputSchema: z.ZodType<Prisma.ExpiryDateMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  month: z.lazy(() => SortOrderSchema).optional(),
  day: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ExpiryDateSumOrderByAggregateInputSchema: z.ZodType<Prisma.ExpiryDateSumOrderByAggregateInput> = z.object({
  year: z.lazy(() => SortOrderSchema).optional(),
  month: z.lazy(() => SortOrderSchema).optional(),
  day: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.union([ z.string().array(),z.string() ]).optional(),
  notIn: z.union([ z.string().array(),z.string() ]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const EnumExpiryTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumExpiryTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ExpiryTypeSchema).optional(),
  in: z.union([ z.lazy(() => ExpiryTypeSchema).array(),z.lazy(() => ExpiryTypeSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => ExpiryTypeSchema).array(),z.lazy(() => ExpiryTypeSchema) ]).optional(),
  not: z.union([ z.lazy(() => ExpiryTypeSchema),z.lazy(() => NestedEnumExpiryTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumExpiryTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumExpiryTypeFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const ProductListRelationFilterSchema: z.ZodType<Prisma.ProductListRelationFilter> = z.object({
  every: z.lazy(() => ProductWhereInputSchema).optional(),
  some: z.lazy(() => ProductWhereInputSchema).optional(),
  none: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const ProductOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JanCountOrderByAggregateInputSchema: z.ZodType<Prisma.JanCountOrderByAggregateInput> = z.object({
  code: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JanMaxOrderByAggregateInputSchema: z.ZodType<Prisma.JanMaxOrderByAggregateInput> = z.object({
  code: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JanMinOrderByAggregateInputSchema: z.ZodType<Prisma.JanMinOrderByAggregateInput> = z.object({
  code: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JanSiteCountOrderByAggregateInputSchema: z.ZodType<Prisma.JanSiteCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JanSiteMaxOrderByAggregateInputSchema: z.ZodType<Prisma.JanSiteMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JanSiteMinOrderByAggregateInputSchema: z.ZodType<Prisma.JanSiteMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  notIn: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const ProductRelationFilterSchema: z.ZodType<Prisma.ProductRelationFilter> = z.object({
  is: z.lazy(() => ProductWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ProductWhereInputSchema).optional().nullable()
}).strict();

export const NoteCountOrderByAggregateInputSchema: z.ZodType<Prisma.NoteCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NoteMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NoteMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NoteMinOrderByAggregateInputSchema: z.ZodType<Prisma.NoteMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  notIn: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const JanRelationFilterSchema: z.ZodType<Prisma.JanRelationFilter> = z.object({
  is: z.lazy(() => JanWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => JanWhereInputSchema).optional().nullable()
}).strict();

export const JanSiteRelationFilterSchema: z.ZodType<Prisma.JanSiteRelationFilter> = z.object({
  is: z.lazy(() => JanSiteWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => JanSiteWhereInputSchema).optional().nullable()
}).strict();

export const ProductTagListRelationFilterSchema: z.ZodType<Prisma.ProductTagListRelationFilter> = z.object({
  every: z.lazy(() => ProductTagWhereInputSchema).optional(),
  some: z.lazy(() => ProductTagWhereInputSchema).optional(),
  none: z.lazy(() => ProductTagWhereInputSchema).optional()
}).strict();

export const CategoryListRelationFilterSchema: z.ZodType<Prisma.CategoryListRelationFilter> = z.object({
  every: z.lazy(() => CategoryWhereInputSchema).optional(),
  some: z.lazy(() => CategoryWhereInputSchema).optional(),
  none: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export const NoteListRelationFilterSchema: z.ZodType<Prisma.NoteListRelationFilter> = z.object({
  every: z.lazy(() => NoteWhereInputSchema).optional(),
  some: z.lazy(() => NoteWhereInputSchema).optional(),
  none: z.lazy(() => NoteWhereInputSchema).optional()
}).strict();

export const ProductTagOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductTagOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CategoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NoteOrderByRelationAggregateInputSchema: z.ZodType<Prisma.NoteOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductTitleJanCodeCompoundUniqueInputSchema: z.ZodType<Prisma.ProductTitleJanCodeCompoundUniqueInput> = z.object({
  title: z.string(),
  janCode: z.string()
}).strict();

export const ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  janCode: z.lazy(() => SortOrderSchema).optional(),
  janSiteId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  janCode: z.lazy(() => SortOrderSchema).optional(),
  janSiteId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  janCode: z.lazy(() => SortOrderSchema).optional(),
  janSiteId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ExpiryDateRelationFilterSchema: z.ZodType<Prisma.ExpiryDateRelationFilter> = z.object({
  is: z.lazy(() => ExpiryDateWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ExpiryDateWhereInputSchema).optional().nullable()
}).strict();

export const StockListRelationFilterSchema: z.ZodType<Prisma.StockListRelationFilter> = z.object({
  every: z.lazy(() => StockWhereInputSchema).optional(),
  some: z.lazy(() => StockWhereInputSchema).optional(),
  none: z.lazy(() => StockWhereInputSchema).optional()
}).strict();

export const StockOrderByRelationAggregateInputSchema: z.ZodType<Prisma.StockOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SkuExpiryDateIdProductIdCompoundUniqueInputSchema: z.ZodType<Prisma.SkuExpiryDateIdProductIdCompoundUniqueInput> = z.object({
  expiryDateId: z.string(),
  productId: z.string()
}).strict();

export const SkuCountOrderByAggregateInputSchema: z.ZodType<Prisma.SkuCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiryDateId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SkuMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SkuMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiryDateId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SkuMinOrderByAggregateInputSchema: z.ZodType<Prisma.SkuMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  expiryDateId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SkuRelationFilterSchema: z.ZodType<Prisma.SkuRelationFilter> = z.object({
  is: z.lazy(() => SkuWhereInputSchema).optional(),
  isNot: z.lazy(() => SkuWhereInputSchema).optional()
}).strict();

export const GroupRelationFilterSchema: z.ZodType<Prisma.GroupRelationFilter> = z.object({
  is: z.lazy(() => GroupWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => GroupWhereInputSchema).optional().nullable()
}).strict();

export const StockTagListRelationFilterSchema: z.ZodType<Prisma.StockTagListRelationFilter> = z.object({
  every: z.lazy(() => StockTagWhereInputSchema).optional(),
  some: z.lazy(() => StockTagWhereInputSchema).optional(),
  none: z.lazy(() => StockTagWhereInputSchema).optional()
}).strict();

export const StockTagOrderByRelationAggregateInputSchema: z.ZodType<Prisma.StockTagOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StockSkuIdGroupIdUserIdCompoundUniqueInputSchema: z.ZodType<Prisma.StockSkuIdGroupIdUserIdCompoundUniqueInput> = z.object({
  skuId: z.string(),
  groupId: z.string(),
  userId: z.string()
}).strict();

export const StockCountOrderByAggregateInputSchema: z.ZodType<Prisma.StockCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  skuId: z.lazy(() => SortOrderSchema).optional(),
  groupId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StockAvgOrderByAggregateInputSchema: z.ZodType<Prisma.StockAvgOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StockMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StockMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  skuId: z.lazy(() => SortOrderSchema).optional(),
  groupId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StockMinOrderByAggregateInputSchema: z.ZodType<Prisma.StockMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  skuId: z.lazy(() => SortOrderSchema).optional(),
  groupId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StockSumOrderByAggregateInputSchema: z.ZodType<Prisma.StockSumOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupListRelationFilterSchema: z.ZodType<Prisma.GroupListRelationFilter> = z.object({
  every: z.lazy(() => GroupWhereInputSchema).optional(),
  some: z.lazy(() => GroupWhereInputSchema).optional(),
  none: z.lazy(() => GroupWhereInputSchema).optional()
}).strict();

export const GroupOrderByRelationAggregateInputSchema: z.ZodType<Prisma.GroupOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupNameUserIdGroupIdCompoundUniqueInputSchema: z.ZodType<Prisma.GroupNameUserIdGroupIdCompoundUniqueInput> = z.object({
  name: z.string(),
  userId: z.string(),
  groupId: z.string()
}).strict();

export const GroupCountOrderByAggregateInputSchema: z.ZodType<Prisma.GroupCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  groupId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GroupMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  groupId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupMinOrderByAggregateInputSchema: z.ZodType<Prisma.GroupMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  groupId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryNameUserIdCompoundUniqueInputSchema: z.ZodType<Prisma.CategoryNameUserIdCompoundUniqueInput> = z.object({
  name: z.string(),
  userId: z.string()
}).strict();

export const CategoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductTagNameUserIdCompoundUniqueInputSchema: z.ZodType<Prisma.ProductTagNameUserIdCompoundUniqueInput> = z.object({
  name: z.string(),
  userId: z.string()
}).strict();

export const ProductTagCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductTagCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductTagMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductTagMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductTagMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductTagMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StockTagNameUserIdCompoundUniqueInputSchema: z.ZodType<Prisma.StockTagNameUserIdCompoundUniqueInput> = z.object({
  name: z.string(),
  userId: z.string()
}).strict();

export const StockTagCountOrderByAggregateInputSchema: z.ZodType<Prisma.StockTagCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StockTagMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StockTagMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StockTagMinOrderByAggregateInputSchema: z.ZodType<Prisma.StockTagMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountProviderProviderAccountIdCompoundUniqueInputSchema: z.ZodType<Prisma.AccountProviderProviderAccountIdCompoundUniqueInput> = z.object({
  provider: z.string(),
  providerAccountId: z.string()
}).strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AccountAvgOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountSumOrderByAggregateInputSchema: z.ZodType<Prisma.AccountSumOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional().nullable(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> = z.object({
  every: z.lazy(() => AccountWhereInputSchema).optional(),
  some: z.lazy(() => AccountWhereInputSchema).optional(),
  none: z.lazy(() => AccountWhereInputSchema).optional()
}).strict();

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> = z.object({
  every: z.lazy(() => SessionWhereInputSchema).optional(),
  some: z.lazy(() => SessionWhereInputSchema).optional(),
  none: z.lazy(() => SessionWhereInputSchema).optional()
}).strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional().nullable(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const VerificationTokenIdentifierTokenCompoundUniqueInputSchema: z.ZodType<Prisma.VerificationTokenIdentifierTokenCompoundUniqueInput> = z.object({
  identifier: z.string(),
  token: z.string()
}).strict();

export const VerificationTokenCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenCountOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMaxOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMinOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMinOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SkuCreateNestedManyWithoutExpiryDateInputSchema: z.ZodType<Prisma.SkuCreateNestedManyWithoutExpiryDateInput> = z.object({
  create: z.union([ z.lazy(() => SkuCreateWithoutExpiryDateInputSchema),z.lazy(() => SkuCreateWithoutExpiryDateInputSchema).array(),z.lazy(() => SkuUncheckedCreateWithoutExpiryDateInputSchema),z.lazy(() => SkuUncheckedCreateWithoutExpiryDateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkuCreateOrConnectWithoutExpiryDateInputSchema),z.lazy(() => SkuCreateOrConnectWithoutExpiryDateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkuCreateManyExpiryDateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SkuUncheckedCreateNestedManyWithoutExpiryDateInputSchema: z.ZodType<Prisma.SkuUncheckedCreateNestedManyWithoutExpiryDateInput> = z.object({
  create: z.union([ z.lazy(() => SkuCreateWithoutExpiryDateInputSchema),z.lazy(() => SkuCreateWithoutExpiryDateInputSchema).array(),z.lazy(() => SkuUncheckedCreateWithoutExpiryDateInputSchema),z.lazy(() => SkuUncheckedCreateWithoutExpiryDateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkuCreateOrConnectWithoutExpiryDateInputSchema),z.lazy(() => SkuCreateOrConnectWithoutExpiryDateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkuCreateManyExpiryDateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const EnumExpiryTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumExpiryTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ExpiryTypeSchema).optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const SkuUpdateManyWithoutExpiryDateNestedInputSchema: z.ZodType<Prisma.SkuUpdateManyWithoutExpiryDateNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkuCreateWithoutExpiryDateInputSchema),z.lazy(() => SkuCreateWithoutExpiryDateInputSchema).array(),z.lazy(() => SkuUncheckedCreateWithoutExpiryDateInputSchema),z.lazy(() => SkuUncheckedCreateWithoutExpiryDateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkuCreateOrConnectWithoutExpiryDateInputSchema),z.lazy(() => SkuCreateOrConnectWithoutExpiryDateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkuUpsertWithWhereUniqueWithoutExpiryDateInputSchema),z.lazy(() => SkuUpsertWithWhereUniqueWithoutExpiryDateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkuCreateManyExpiryDateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkuUpdateWithWhereUniqueWithoutExpiryDateInputSchema),z.lazy(() => SkuUpdateWithWhereUniqueWithoutExpiryDateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkuUpdateManyWithWhereWithoutExpiryDateInputSchema),z.lazy(() => SkuUpdateManyWithWhereWithoutExpiryDateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkuScalarWhereInputSchema),z.lazy(() => SkuScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SkuUncheckedUpdateManyWithoutExpiryDateNestedInputSchema: z.ZodType<Prisma.SkuUncheckedUpdateManyWithoutExpiryDateNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkuCreateWithoutExpiryDateInputSchema),z.lazy(() => SkuCreateWithoutExpiryDateInputSchema).array(),z.lazy(() => SkuUncheckedCreateWithoutExpiryDateInputSchema),z.lazy(() => SkuUncheckedCreateWithoutExpiryDateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkuCreateOrConnectWithoutExpiryDateInputSchema),z.lazy(() => SkuCreateOrConnectWithoutExpiryDateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkuUpsertWithWhereUniqueWithoutExpiryDateInputSchema),z.lazy(() => SkuUpsertWithWhereUniqueWithoutExpiryDateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkuCreateManyExpiryDateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkuUpdateWithWhereUniqueWithoutExpiryDateInputSchema),z.lazy(() => SkuUpdateWithWhereUniqueWithoutExpiryDateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkuUpdateManyWithWhereWithoutExpiryDateInputSchema),z.lazy(() => SkuUpdateManyWithWhereWithoutExpiryDateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkuScalarWhereInputSchema),z.lazy(() => SkuScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductCreateNestedManyWithoutJanInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutJanInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutJanInputSchema),z.lazy(() => ProductCreateWithoutJanInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutJanInputSchema),z.lazy(() => ProductUncheckedCreateWithoutJanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutJanInputSchema),z.lazy(() => ProductCreateOrConnectWithoutJanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyJanInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedCreateNestedManyWithoutJanInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutJanInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutJanInputSchema),z.lazy(() => ProductCreateWithoutJanInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutJanInputSchema),z.lazy(() => ProductUncheckedCreateWithoutJanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutJanInputSchema),z.lazy(() => ProductCreateOrConnectWithoutJanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyJanInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUpdateManyWithoutJanNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutJanNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutJanInputSchema),z.lazy(() => ProductCreateWithoutJanInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutJanInputSchema),z.lazy(() => ProductUncheckedCreateWithoutJanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutJanInputSchema),z.lazy(() => ProductCreateOrConnectWithoutJanInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutJanInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutJanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyJanInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutJanInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutJanInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutJanInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutJanInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutJanNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutJanNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutJanInputSchema),z.lazy(() => ProductCreateWithoutJanInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutJanInputSchema),z.lazy(() => ProductUncheckedCreateWithoutJanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutJanInputSchema),z.lazy(() => ProductCreateOrConnectWithoutJanInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutJanInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutJanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyJanInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutJanInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutJanInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutJanInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutJanInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductCreateNestedManyWithoutJanSiteInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutJanSiteInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutJanSiteInputSchema),z.lazy(() => ProductCreateWithoutJanSiteInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutJanSiteInputSchema),z.lazy(() => ProductUncheckedCreateWithoutJanSiteInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutJanSiteInputSchema),z.lazy(() => ProductCreateOrConnectWithoutJanSiteInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyJanSiteInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedCreateNestedManyWithoutJanSiteInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutJanSiteInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutJanSiteInputSchema),z.lazy(() => ProductCreateWithoutJanSiteInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutJanSiteInputSchema),z.lazy(() => ProductUncheckedCreateWithoutJanSiteInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutJanSiteInputSchema),z.lazy(() => ProductCreateOrConnectWithoutJanSiteInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyJanSiteInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUpdateManyWithoutJanSiteNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutJanSiteNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutJanSiteInputSchema),z.lazy(() => ProductCreateWithoutJanSiteInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutJanSiteInputSchema),z.lazy(() => ProductUncheckedCreateWithoutJanSiteInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutJanSiteInputSchema),z.lazy(() => ProductCreateOrConnectWithoutJanSiteInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutJanSiteInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutJanSiteInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyJanSiteInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutJanSiteInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutJanSiteInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutJanSiteInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutJanSiteInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutJanSiteNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutJanSiteNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutJanSiteInputSchema),z.lazy(() => ProductCreateWithoutJanSiteInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutJanSiteInputSchema),z.lazy(() => ProductUncheckedCreateWithoutJanSiteInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutJanSiteInputSchema),z.lazy(() => ProductCreateOrConnectWithoutJanSiteInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutJanSiteInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutJanSiteInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyJanSiteInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutJanSiteInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutJanSiteInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutJanSiteInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutJanSiteInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutNotesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutNotesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutNotesInputSchema),z.lazy(() => UserUncheckedCreateWithoutNotesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const ProductCreateNestedOneWithoutNotesInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutNotesInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutNotesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutNotesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutNotesInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutNotesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutNotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutNotesInputSchema),z.lazy(() => UserUncheckedCreateWithoutNotesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutNotesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutNotesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutNotesInputSchema) ]).optional(),
}).strict();

export const ProductUpdateOneWithoutNotesNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneWithoutNotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutNotesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutNotesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutNotesInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutNotesInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithoutNotesInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutNotesInputSchema) ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const JanCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.JanCreateNestedOneWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => JanCreateWithoutProductsInputSchema),z.lazy(() => JanUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JanCreateOrConnectWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => JanWhereUniqueInputSchema).optional()
}).strict();

export const JanSiteCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.JanSiteCreateNestedOneWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => JanSiteCreateWithoutProductsInputSchema),z.lazy(() => JanSiteUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JanSiteCreateOrConnectWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => JanSiteWhereUniqueInputSchema).optional()
}).strict();

export const SkuCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.SkuCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => SkuCreateWithoutProductInputSchema),z.lazy(() => SkuCreateWithoutProductInputSchema).array(),z.lazy(() => SkuUncheckedCreateWithoutProductInputSchema),z.lazy(() => SkuUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkuCreateOrConnectWithoutProductInputSchema),z.lazy(() => SkuCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkuCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductTagCreateNestedManyWithoutProductsInputSchema: z.ZodType<Prisma.ProductTagCreateNestedManyWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => ProductTagCreateWithoutProductsInputSchema),z.lazy(() => ProductTagCreateWithoutProductsInputSchema).array(),z.lazy(() => ProductTagUncheckedCreateWithoutProductsInputSchema),z.lazy(() => ProductTagUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductTagCreateOrConnectWithoutProductsInputSchema),z.lazy(() => ProductTagCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CategoryCreateNestedManyWithoutProductsInputSchema: z.ZodType<Prisma.CategoryCreateNestedManyWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryCreateWithoutProductsInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NoteCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.NoteCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => NoteCreateWithoutProductInputSchema),z.lazy(() => NoteCreateWithoutProductInputSchema).array(),z.lazy(() => NoteUncheckedCreateWithoutProductInputSchema),z.lazy(() => NoteUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NoteCreateOrConnectWithoutProductInputSchema),z.lazy(() => NoteCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NoteCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SkuUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.SkuUncheckedCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => SkuCreateWithoutProductInputSchema),z.lazy(() => SkuCreateWithoutProductInputSchema).array(),z.lazy(() => SkuUncheckedCreateWithoutProductInputSchema),z.lazy(() => SkuUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkuCreateOrConnectWithoutProductInputSchema),z.lazy(() => SkuCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkuCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductTagUncheckedCreateNestedManyWithoutProductsInputSchema: z.ZodType<Prisma.ProductTagUncheckedCreateNestedManyWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => ProductTagCreateWithoutProductsInputSchema),z.lazy(() => ProductTagCreateWithoutProductsInputSchema).array(),z.lazy(() => ProductTagUncheckedCreateWithoutProductsInputSchema),z.lazy(() => ProductTagUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductTagCreateOrConnectWithoutProductsInputSchema),z.lazy(() => ProductTagCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CategoryUncheckedCreateNestedManyWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateNestedManyWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryCreateWithoutProductsInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NoteUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.NoteUncheckedCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => NoteCreateWithoutProductInputSchema),z.lazy(() => NoteCreateWithoutProductInputSchema).array(),z.lazy(() => NoteUncheckedCreateWithoutProductInputSchema),z.lazy(() => NoteUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NoteCreateOrConnectWithoutProductInputSchema),z.lazy(() => NoteCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NoteCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const JanUpdateOneWithoutProductsNestedInputSchema: z.ZodType<Prisma.JanUpdateOneWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => JanCreateWithoutProductsInputSchema),z.lazy(() => JanUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JanCreateOrConnectWithoutProductsInputSchema).optional(),
  upsert: z.lazy(() => JanUpsertWithoutProductsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => JanWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => JanUpdateWithoutProductsInputSchema),z.lazy(() => JanUncheckedUpdateWithoutProductsInputSchema) ]).optional(),
}).strict();

export const JanSiteUpdateOneWithoutProductsNestedInputSchema: z.ZodType<Prisma.JanSiteUpdateOneWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => JanSiteCreateWithoutProductsInputSchema),z.lazy(() => JanSiteUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JanSiteCreateOrConnectWithoutProductsInputSchema).optional(),
  upsert: z.lazy(() => JanSiteUpsertWithoutProductsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => JanSiteWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => JanSiteUpdateWithoutProductsInputSchema),z.lazy(() => JanSiteUncheckedUpdateWithoutProductsInputSchema) ]).optional(),
}).strict();

export const SkuUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.SkuUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkuCreateWithoutProductInputSchema),z.lazy(() => SkuCreateWithoutProductInputSchema).array(),z.lazy(() => SkuUncheckedCreateWithoutProductInputSchema),z.lazy(() => SkuUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkuCreateOrConnectWithoutProductInputSchema),z.lazy(() => SkuCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkuUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => SkuUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkuCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkuUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => SkuUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkuUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => SkuUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkuScalarWhereInputSchema),z.lazy(() => SkuScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductTagUpdateManyWithoutProductsNestedInputSchema: z.ZodType<Prisma.ProductTagUpdateManyWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductTagCreateWithoutProductsInputSchema),z.lazy(() => ProductTagCreateWithoutProductsInputSchema).array(),z.lazy(() => ProductTagUncheckedCreateWithoutProductsInputSchema),z.lazy(() => ProductTagUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductTagCreateOrConnectWithoutProductsInputSchema),z.lazy(() => ProductTagCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductTagUpsertWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => ProductTagUpsertWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductTagUpdateWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => ProductTagUpdateWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductTagUpdateManyWithWhereWithoutProductsInputSchema),z.lazy(() => ProductTagUpdateManyWithWhereWithoutProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductTagScalarWhereInputSchema),z.lazy(() => ProductTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CategoryUpdateManyWithoutProductsNestedInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryCreateWithoutProductsInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryUpsertWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => CategoryUpsertWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => CategoryUpdateWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryUpdateManyWithWhereWithoutProductsInputSchema),z.lazy(() => CategoryUpdateManyWithWhereWithoutProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NoteUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.NoteUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => NoteCreateWithoutProductInputSchema),z.lazy(() => NoteCreateWithoutProductInputSchema).array(),z.lazy(() => NoteUncheckedCreateWithoutProductInputSchema),z.lazy(() => NoteUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NoteCreateOrConnectWithoutProductInputSchema),z.lazy(() => NoteCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NoteUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => NoteUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NoteCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NoteUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => NoteUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NoteUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => NoteUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NoteScalarWhereInputSchema),z.lazy(() => NoteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SkuUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.SkuUncheckedUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkuCreateWithoutProductInputSchema),z.lazy(() => SkuCreateWithoutProductInputSchema).array(),z.lazy(() => SkuUncheckedCreateWithoutProductInputSchema),z.lazy(() => SkuUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkuCreateOrConnectWithoutProductInputSchema),z.lazy(() => SkuCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkuUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => SkuUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkuCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkuWhereUniqueInputSchema),z.lazy(() => SkuWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkuUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => SkuUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkuUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => SkuUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkuScalarWhereInputSchema),z.lazy(() => SkuScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductTagUncheckedUpdateManyWithoutProductsNestedInputSchema: z.ZodType<Prisma.ProductTagUncheckedUpdateManyWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductTagCreateWithoutProductsInputSchema),z.lazy(() => ProductTagCreateWithoutProductsInputSchema).array(),z.lazy(() => ProductTagUncheckedCreateWithoutProductsInputSchema),z.lazy(() => ProductTagUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductTagCreateOrConnectWithoutProductsInputSchema),z.lazy(() => ProductTagCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductTagUpsertWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => ProductTagUpsertWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductTagUpdateWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => ProductTagUpdateWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductTagUpdateManyWithWhereWithoutProductsInputSchema),z.lazy(() => ProductTagUpdateManyWithWhereWithoutProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductTagScalarWhereInputSchema),z.lazy(() => ProductTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CategoryUncheckedUpdateManyWithoutProductsNestedInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryCreateWithoutProductsInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryUpsertWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => CategoryUpsertWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => CategoryUpdateWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryUpdateManyWithWhereWithoutProductsInputSchema),z.lazy(() => CategoryUpdateManyWithWhereWithoutProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NoteUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.NoteUncheckedUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => NoteCreateWithoutProductInputSchema),z.lazy(() => NoteCreateWithoutProductInputSchema).array(),z.lazy(() => NoteUncheckedCreateWithoutProductInputSchema),z.lazy(() => NoteUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NoteCreateOrConnectWithoutProductInputSchema),z.lazy(() => NoteCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NoteUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => NoteUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NoteCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NoteUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => NoteUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NoteUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => NoteUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NoteScalarWhereInputSchema),z.lazy(() => NoteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ExpiryDateCreateNestedOneWithoutSkusInputSchema: z.ZodType<Prisma.ExpiryDateCreateNestedOneWithoutSkusInput> = z.object({
  create: z.union([ z.lazy(() => ExpiryDateCreateWithoutSkusInputSchema),z.lazy(() => ExpiryDateUncheckedCreateWithoutSkusInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ExpiryDateCreateOrConnectWithoutSkusInputSchema).optional(),
  connect: z.lazy(() => ExpiryDateWhereUniqueInputSchema).optional()
}).strict();

export const ProductCreateNestedOneWithoutSkusInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutSkusInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutSkusInputSchema),z.lazy(() => ProductUncheckedCreateWithoutSkusInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutSkusInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional()
}).strict();

export const StockCreateNestedManyWithoutSkuInputSchema: z.ZodType<Prisma.StockCreateNestedManyWithoutSkuInput> = z.object({
  create: z.union([ z.lazy(() => StockCreateWithoutSkuInputSchema),z.lazy(() => StockCreateWithoutSkuInputSchema).array(),z.lazy(() => StockUncheckedCreateWithoutSkuInputSchema),z.lazy(() => StockUncheckedCreateWithoutSkuInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockCreateOrConnectWithoutSkuInputSchema),z.lazy(() => StockCreateOrConnectWithoutSkuInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StockCreateManySkuInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StockUncheckedCreateNestedManyWithoutSkuInputSchema: z.ZodType<Prisma.StockUncheckedCreateNestedManyWithoutSkuInput> = z.object({
  create: z.union([ z.lazy(() => StockCreateWithoutSkuInputSchema),z.lazy(() => StockCreateWithoutSkuInputSchema).array(),z.lazy(() => StockUncheckedCreateWithoutSkuInputSchema),z.lazy(() => StockUncheckedCreateWithoutSkuInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockCreateOrConnectWithoutSkuInputSchema),z.lazy(() => StockCreateOrConnectWithoutSkuInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StockCreateManySkuInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ExpiryDateUpdateOneWithoutSkusNestedInputSchema: z.ZodType<Prisma.ExpiryDateUpdateOneWithoutSkusNestedInput> = z.object({
  create: z.union([ z.lazy(() => ExpiryDateCreateWithoutSkusInputSchema),z.lazy(() => ExpiryDateUncheckedCreateWithoutSkusInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ExpiryDateCreateOrConnectWithoutSkusInputSchema).optional(),
  upsert: z.lazy(() => ExpiryDateUpsertWithoutSkusInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => ExpiryDateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ExpiryDateUpdateWithoutSkusInputSchema),z.lazy(() => ExpiryDateUncheckedUpdateWithoutSkusInputSchema) ]).optional(),
}).strict();

export const ProductUpdateOneRequiredWithoutSkusNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutSkusNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutSkusInputSchema),z.lazy(() => ProductUncheckedCreateWithoutSkusInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutSkusInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutSkusInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithoutSkusInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutSkusInputSchema) ]).optional(),
}).strict();

export const StockUpdateManyWithoutSkuNestedInputSchema: z.ZodType<Prisma.StockUpdateManyWithoutSkuNestedInput> = z.object({
  create: z.union([ z.lazy(() => StockCreateWithoutSkuInputSchema),z.lazy(() => StockCreateWithoutSkuInputSchema).array(),z.lazy(() => StockUncheckedCreateWithoutSkuInputSchema),z.lazy(() => StockUncheckedCreateWithoutSkuInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockCreateOrConnectWithoutSkuInputSchema),z.lazy(() => StockCreateOrConnectWithoutSkuInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StockUpsertWithWhereUniqueWithoutSkuInputSchema),z.lazy(() => StockUpsertWithWhereUniqueWithoutSkuInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StockCreateManySkuInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StockUpdateWithWhereUniqueWithoutSkuInputSchema),z.lazy(() => StockUpdateWithWhereUniqueWithoutSkuInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StockUpdateManyWithWhereWithoutSkuInputSchema),z.lazy(() => StockUpdateManyWithWhereWithoutSkuInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StockScalarWhereInputSchema),z.lazy(() => StockScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const StockUncheckedUpdateManyWithoutSkuNestedInputSchema: z.ZodType<Prisma.StockUncheckedUpdateManyWithoutSkuNestedInput> = z.object({
  create: z.union([ z.lazy(() => StockCreateWithoutSkuInputSchema),z.lazy(() => StockCreateWithoutSkuInputSchema).array(),z.lazy(() => StockUncheckedCreateWithoutSkuInputSchema),z.lazy(() => StockUncheckedCreateWithoutSkuInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockCreateOrConnectWithoutSkuInputSchema),z.lazy(() => StockCreateOrConnectWithoutSkuInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StockUpsertWithWhereUniqueWithoutSkuInputSchema),z.lazy(() => StockUpsertWithWhereUniqueWithoutSkuInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StockCreateManySkuInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StockUpdateWithWhereUniqueWithoutSkuInputSchema),z.lazy(() => StockUpdateWithWhereUniqueWithoutSkuInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StockUpdateManyWithWhereWithoutSkuInputSchema),z.lazy(() => StockUpdateManyWithWhereWithoutSkuInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StockScalarWhereInputSchema),z.lazy(() => StockScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutStocksInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutStocksInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutStocksInputSchema),z.lazy(() => UserUncheckedCreateWithoutStocksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStocksInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const SkuCreateNestedOneWithoutStocksInputSchema: z.ZodType<Prisma.SkuCreateNestedOneWithoutStocksInput> = z.object({
  create: z.union([ z.lazy(() => SkuCreateWithoutStocksInputSchema),z.lazy(() => SkuUncheckedCreateWithoutStocksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkuCreateOrConnectWithoutStocksInputSchema).optional(),
  connect: z.lazy(() => SkuWhereUniqueInputSchema).optional()
}).strict();

export const GroupCreateNestedOneWithoutStocksInputSchema: z.ZodType<Prisma.GroupCreateNestedOneWithoutStocksInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutStocksInputSchema),z.lazy(() => GroupUncheckedCreateWithoutStocksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutStocksInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional()
}).strict();

export const StockTagCreateNestedManyWithoutStocksInputSchema: z.ZodType<Prisma.StockTagCreateNestedManyWithoutStocksInput> = z.object({
  create: z.union([ z.lazy(() => StockTagCreateWithoutStocksInputSchema),z.lazy(() => StockTagCreateWithoutStocksInputSchema).array(),z.lazy(() => StockTagUncheckedCreateWithoutStocksInputSchema),z.lazy(() => StockTagUncheckedCreateWithoutStocksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockTagCreateOrConnectWithoutStocksInputSchema),z.lazy(() => StockTagCreateOrConnectWithoutStocksInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StockTagUncheckedCreateNestedManyWithoutStocksInputSchema: z.ZodType<Prisma.StockTagUncheckedCreateNestedManyWithoutStocksInput> = z.object({
  create: z.union([ z.lazy(() => StockTagCreateWithoutStocksInputSchema),z.lazy(() => StockTagCreateWithoutStocksInputSchema).array(),z.lazy(() => StockTagUncheckedCreateWithoutStocksInputSchema),z.lazy(() => StockTagUncheckedCreateWithoutStocksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockTagCreateOrConnectWithoutStocksInputSchema),z.lazy(() => StockTagCreateOrConnectWithoutStocksInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutStocksNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutStocksNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutStocksInputSchema),z.lazy(() => UserUncheckedCreateWithoutStocksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStocksInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutStocksInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutStocksInputSchema),z.lazy(() => UserUncheckedUpdateWithoutStocksInputSchema) ]).optional(),
}).strict();

export const SkuUpdateOneRequiredWithoutStocksNestedInputSchema: z.ZodType<Prisma.SkuUpdateOneRequiredWithoutStocksNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkuCreateWithoutStocksInputSchema),z.lazy(() => SkuUncheckedCreateWithoutStocksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkuCreateOrConnectWithoutStocksInputSchema).optional(),
  upsert: z.lazy(() => SkuUpsertWithoutStocksInputSchema).optional(),
  connect: z.lazy(() => SkuWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SkuUpdateWithoutStocksInputSchema),z.lazy(() => SkuUncheckedUpdateWithoutStocksInputSchema) ]).optional(),
}).strict();

export const GroupUpdateOneWithoutStocksNestedInputSchema: z.ZodType<Prisma.GroupUpdateOneWithoutStocksNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutStocksInputSchema),z.lazy(() => GroupUncheckedCreateWithoutStocksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutStocksInputSchema).optional(),
  upsert: z.lazy(() => GroupUpsertWithoutStocksInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GroupUpdateWithoutStocksInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutStocksInputSchema) ]).optional(),
}).strict();

export const StockTagUpdateManyWithoutStocksNestedInputSchema: z.ZodType<Prisma.StockTagUpdateManyWithoutStocksNestedInput> = z.object({
  create: z.union([ z.lazy(() => StockTagCreateWithoutStocksInputSchema),z.lazy(() => StockTagCreateWithoutStocksInputSchema).array(),z.lazy(() => StockTagUncheckedCreateWithoutStocksInputSchema),z.lazy(() => StockTagUncheckedCreateWithoutStocksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockTagCreateOrConnectWithoutStocksInputSchema),z.lazy(() => StockTagCreateOrConnectWithoutStocksInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StockTagUpsertWithWhereUniqueWithoutStocksInputSchema),z.lazy(() => StockTagUpsertWithWhereUniqueWithoutStocksInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StockTagUpdateWithWhereUniqueWithoutStocksInputSchema),z.lazy(() => StockTagUpdateWithWhereUniqueWithoutStocksInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StockTagUpdateManyWithWhereWithoutStocksInputSchema),z.lazy(() => StockTagUpdateManyWithWhereWithoutStocksInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StockTagScalarWhereInputSchema),z.lazy(() => StockTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const StockTagUncheckedUpdateManyWithoutStocksNestedInputSchema: z.ZodType<Prisma.StockTagUncheckedUpdateManyWithoutStocksNestedInput> = z.object({
  create: z.union([ z.lazy(() => StockTagCreateWithoutStocksInputSchema),z.lazy(() => StockTagCreateWithoutStocksInputSchema).array(),z.lazy(() => StockTagUncheckedCreateWithoutStocksInputSchema),z.lazy(() => StockTagUncheckedCreateWithoutStocksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockTagCreateOrConnectWithoutStocksInputSchema),z.lazy(() => StockTagCreateOrConnectWithoutStocksInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StockTagUpsertWithWhereUniqueWithoutStocksInputSchema),z.lazy(() => StockTagUpsertWithWhereUniqueWithoutStocksInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StockTagUpdateWithWhereUniqueWithoutStocksInputSchema),z.lazy(() => StockTagUpdateWithWhereUniqueWithoutStocksInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StockTagUpdateManyWithWhereWithoutStocksInputSchema),z.lazy(() => StockTagUpdateManyWithWhereWithoutStocksInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StockTagScalarWhereInputSchema),z.lazy(() => StockTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutGroupsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutGroupsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutGroupsInputSchema),z.lazy(() => UserUncheckedCreateWithoutGroupsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutGroupsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const GroupCreateNestedOneWithoutGroupsInputSchema: z.ZodType<Prisma.GroupCreateNestedOneWithoutGroupsInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutGroupsInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional()
}).strict();

export const GroupCreateNestedManyWithoutGroupInputSchema: z.ZodType<Prisma.GroupCreateNestedManyWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupInputSchema),z.lazy(() => GroupCreateWithoutGroupInputSchema).array(),z.lazy(() => GroupUncheckedCreateWithoutGroupInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupCreateOrConnectWithoutGroupInputSchema),z.lazy(() => GroupCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupCreateManyGroupInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StockCreateNestedManyWithoutGroupInputSchema: z.ZodType<Prisma.StockCreateNestedManyWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => StockCreateWithoutGroupInputSchema),z.lazy(() => StockCreateWithoutGroupInputSchema).array(),z.lazy(() => StockUncheckedCreateWithoutGroupInputSchema),z.lazy(() => StockUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockCreateOrConnectWithoutGroupInputSchema),z.lazy(() => StockCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StockCreateManyGroupInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const GroupUncheckedCreateNestedManyWithoutGroupInputSchema: z.ZodType<Prisma.GroupUncheckedCreateNestedManyWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupInputSchema),z.lazy(() => GroupCreateWithoutGroupInputSchema).array(),z.lazy(() => GroupUncheckedCreateWithoutGroupInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupCreateOrConnectWithoutGroupInputSchema),z.lazy(() => GroupCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupCreateManyGroupInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StockUncheckedCreateNestedManyWithoutGroupInputSchema: z.ZodType<Prisma.StockUncheckedCreateNestedManyWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => StockCreateWithoutGroupInputSchema),z.lazy(() => StockCreateWithoutGroupInputSchema).array(),z.lazy(() => StockUncheckedCreateWithoutGroupInputSchema),z.lazy(() => StockUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockCreateOrConnectWithoutGroupInputSchema),z.lazy(() => StockCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StockCreateManyGroupInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutGroupsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutGroupsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutGroupsInputSchema),z.lazy(() => UserUncheckedCreateWithoutGroupsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutGroupsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutGroupsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutGroupsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutGroupsInputSchema) ]).optional(),
}).strict();

export const GroupUpdateOneWithoutGroupsNestedInputSchema: z.ZodType<Prisma.GroupUpdateOneWithoutGroupsNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutGroupsInputSchema).optional(),
  upsert: z.lazy(() => GroupUpsertWithoutGroupsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GroupUpdateWithoutGroupsInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutGroupsInputSchema) ]).optional(),
}).strict();

export const GroupUpdateManyWithoutGroupNestedInputSchema: z.ZodType<Prisma.GroupUpdateManyWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupInputSchema),z.lazy(() => GroupCreateWithoutGroupInputSchema).array(),z.lazy(() => GroupUncheckedCreateWithoutGroupInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupCreateOrConnectWithoutGroupInputSchema),z.lazy(() => GroupCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GroupUpsertWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => GroupUpsertWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupCreateManyGroupInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GroupUpdateWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => GroupUpdateWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GroupUpdateManyWithWhereWithoutGroupInputSchema),z.lazy(() => GroupUpdateManyWithWhereWithoutGroupInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GroupScalarWhereInputSchema),z.lazy(() => GroupScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const StockUpdateManyWithoutGroupNestedInputSchema: z.ZodType<Prisma.StockUpdateManyWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => StockCreateWithoutGroupInputSchema),z.lazy(() => StockCreateWithoutGroupInputSchema).array(),z.lazy(() => StockUncheckedCreateWithoutGroupInputSchema),z.lazy(() => StockUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockCreateOrConnectWithoutGroupInputSchema),z.lazy(() => StockCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StockUpsertWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => StockUpsertWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StockCreateManyGroupInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StockUpdateWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => StockUpdateWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StockUpdateManyWithWhereWithoutGroupInputSchema),z.lazy(() => StockUpdateManyWithWhereWithoutGroupInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StockScalarWhereInputSchema),z.lazy(() => StockScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const GroupUncheckedUpdateManyWithoutGroupNestedInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateManyWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupInputSchema),z.lazy(() => GroupCreateWithoutGroupInputSchema).array(),z.lazy(() => GroupUncheckedCreateWithoutGroupInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupCreateOrConnectWithoutGroupInputSchema),z.lazy(() => GroupCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GroupUpsertWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => GroupUpsertWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupCreateManyGroupInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GroupUpdateWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => GroupUpdateWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GroupUpdateManyWithWhereWithoutGroupInputSchema),z.lazy(() => GroupUpdateManyWithWhereWithoutGroupInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GroupScalarWhereInputSchema),z.lazy(() => GroupScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const StockUncheckedUpdateManyWithoutGroupNestedInputSchema: z.ZodType<Prisma.StockUncheckedUpdateManyWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => StockCreateWithoutGroupInputSchema),z.lazy(() => StockCreateWithoutGroupInputSchema).array(),z.lazy(() => StockUncheckedCreateWithoutGroupInputSchema),z.lazy(() => StockUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockCreateOrConnectWithoutGroupInputSchema),z.lazy(() => StockCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StockUpsertWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => StockUpsertWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StockCreateManyGroupInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StockUpdateWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => StockUpdateWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StockUpdateManyWithWhereWithoutGroupInputSchema),z.lazy(() => StockUpdateManyWithWhereWithoutGroupInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StockScalarWhereInputSchema),z.lazy(() => StockScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutCategoriesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCategoriesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const ProductCreateNestedManyWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductCreateWithoutCategoriesInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedCreateNestedManyWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductCreateWithoutCategoriesInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCategoriesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCategoriesInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutCategoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCategoriesInputSchema) ]).optional(),
}).strict();

export const ProductUpdateManyWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductCreateWithoutCategoriesInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutCategoriesInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutCategoriesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductCreateWithoutCategoriesInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutCategoriesInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutCategoriesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutProductTagsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutProductTagsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutProductTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutProductTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProductTagsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const ProductCreateNestedManyWithoutProductTagsInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutProductTagsInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutProductTagsInputSchema),z.lazy(() => ProductCreateWithoutProductTagsInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutProductTagsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutProductTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutProductTagsInputSchema),z.lazy(() => ProductCreateOrConnectWithoutProductTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedCreateNestedManyWithoutProductTagsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutProductTagsInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutProductTagsInputSchema),z.lazy(() => ProductCreateWithoutProductTagsInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutProductTagsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutProductTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutProductTagsInputSchema),z.lazy(() => ProductCreateOrConnectWithoutProductTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutProductTagsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutProductTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutProductTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutProductTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProductTagsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutProductTagsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutProductTagsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutProductTagsInputSchema) ]).optional(),
}).strict();

export const ProductUpdateManyWithoutProductTagsNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutProductTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutProductTagsInputSchema),z.lazy(() => ProductCreateWithoutProductTagsInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutProductTagsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutProductTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutProductTagsInputSchema),z.lazy(() => ProductCreateOrConnectWithoutProductTagsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutProductTagsInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutProductTagsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutProductTagsInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutProductTagsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutProductTagsInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutProductTagsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutProductTagsNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutProductTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutProductTagsInputSchema),z.lazy(() => ProductCreateWithoutProductTagsInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutProductTagsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutProductTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutProductTagsInputSchema),z.lazy(() => ProductCreateOrConnectWithoutProductTagsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutProductTagsInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutProductTagsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutProductTagsInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutProductTagsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutProductTagsInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutProductTagsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutStockTagsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutStockTagsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutStockTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutStockTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStockTagsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const StockCreateNestedManyWithoutStockTagsInputSchema: z.ZodType<Prisma.StockCreateNestedManyWithoutStockTagsInput> = z.object({
  create: z.union([ z.lazy(() => StockCreateWithoutStockTagsInputSchema),z.lazy(() => StockCreateWithoutStockTagsInputSchema).array(),z.lazy(() => StockUncheckedCreateWithoutStockTagsInputSchema),z.lazy(() => StockUncheckedCreateWithoutStockTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockCreateOrConnectWithoutStockTagsInputSchema),z.lazy(() => StockCreateOrConnectWithoutStockTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StockUncheckedCreateNestedManyWithoutStockTagsInputSchema: z.ZodType<Prisma.StockUncheckedCreateNestedManyWithoutStockTagsInput> = z.object({
  create: z.union([ z.lazy(() => StockCreateWithoutStockTagsInputSchema),z.lazy(() => StockCreateWithoutStockTagsInputSchema).array(),z.lazy(() => StockUncheckedCreateWithoutStockTagsInputSchema),z.lazy(() => StockUncheckedCreateWithoutStockTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockCreateOrConnectWithoutStockTagsInputSchema),z.lazy(() => StockCreateOrConnectWithoutStockTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutStockTagsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutStockTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutStockTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutStockTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStockTagsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutStockTagsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutStockTagsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutStockTagsInputSchema) ]).optional(),
}).strict();

export const StockUpdateManyWithoutStockTagsNestedInputSchema: z.ZodType<Prisma.StockUpdateManyWithoutStockTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => StockCreateWithoutStockTagsInputSchema),z.lazy(() => StockCreateWithoutStockTagsInputSchema).array(),z.lazy(() => StockUncheckedCreateWithoutStockTagsInputSchema),z.lazy(() => StockUncheckedCreateWithoutStockTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockCreateOrConnectWithoutStockTagsInputSchema),z.lazy(() => StockCreateOrConnectWithoutStockTagsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StockUpsertWithWhereUniqueWithoutStockTagsInputSchema),z.lazy(() => StockUpsertWithWhereUniqueWithoutStockTagsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StockUpdateWithWhereUniqueWithoutStockTagsInputSchema),z.lazy(() => StockUpdateWithWhereUniqueWithoutStockTagsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StockUpdateManyWithWhereWithoutStockTagsInputSchema),z.lazy(() => StockUpdateManyWithWhereWithoutStockTagsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StockScalarWhereInputSchema),z.lazy(() => StockScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const StockUncheckedUpdateManyWithoutStockTagsNestedInputSchema: z.ZodType<Prisma.StockUncheckedUpdateManyWithoutStockTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => StockCreateWithoutStockTagsInputSchema),z.lazy(() => StockCreateWithoutStockTagsInputSchema).array(),z.lazy(() => StockUncheckedCreateWithoutStockTagsInputSchema),z.lazy(() => StockUncheckedCreateWithoutStockTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockCreateOrConnectWithoutStockTagsInputSchema),z.lazy(() => StockCreateOrConnectWithoutStockTagsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StockUpsertWithWhereUniqueWithoutStockTagsInputSchema),z.lazy(() => StockUpsertWithWhereUniqueWithoutStockTagsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StockUpdateWithWhereUniqueWithoutStockTagsInputSchema),z.lazy(() => StockUpdateWithWhereUniqueWithoutStockTagsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StockUpdateManyWithWhereWithoutStockTagsInputSchema),z.lazy(() => StockUpdateManyWithWhereWithoutStockTagsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StockScalarWhereInputSchema),z.lazy(() => StockScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]).optional(),
}).strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StockCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.StockCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => StockCreateWithoutUserInputSchema),z.lazy(() => StockCreateWithoutUserInputSchema).array(),z.lazy(() => StockUncheckedCreateWithoutUserInputSchema),z.lazy(() => StockUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockCreateOrConnectWithoutUserInputSchema),z.lazy(() => StockCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StockCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const GroupCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.GroupCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutUserInputSchema),z.lazy(() => GroupCreateWithoutUserInputSchema).array(),z.lazy(() => GroupUncheckedCreateWithoutUserInputSchema),z.lazy(() => GroupUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupCreateOrConnectWithoutUserInputSchema),z.lazy(() => GroupCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductTagCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ProductTagCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ProductTagCreateWithoutUserInputSchema),z.lazy(() => ProductTagCreateWithoutUserInputSchema).array(),z.lazy(() => ProductTagUncheckedCreateWithoutUserInputSchema),z.lazy(() => ProductTagUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductTagCreateOrConnectWithoutUserInputSchema),z.lazy(() => ProductTagCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductTagCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StockTagCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.StockTagCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => StockTagCreateWithoutUserInputSchema),z.lazy(() => StockTagCreateWithoutUserInputSchema).array(),z.lazy(() => StockTagUncheckedCreateWithoutUserInputSchema),z.lazy(() => StockTagUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockTagCreateOrConnectWithoutUserInputSchema),z.lazy(() => StockTagCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StockTagCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CategoryCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CategoryCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutUserInputSchema),z.lazy(() => CategoryCreateWithoutUserInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutUserInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutUserInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NoteCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.NoteCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => NoteCreateWithoutUserInputSchema),z.lazy(() => NoteCreateWithoutUserInputSchema).array(),z.lazy(() => NoteUncheckedCreateWithoutUserInputSchema),z.lazy(() => NoteUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NoteCreateOrConnectWithoutUserInputSchema),z.lazy(() => NoteCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NoteCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StockUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.StockUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => StockCreateWithoutUserInputSchema),z.lazy(() => StockCreateWithoutUserInputSchema).array(),z.lazy(() => StockUncheckedCreateWithoutUserInputSchema),z.lazy(() => StockUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockCreateOrConnectWithoutUserInputSchema),z.lazy(() => StockCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StockCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const GroupUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.GroupUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutUserInputSchema),z.lazy(() => GroupCreateWithoutUserInputSchema).array(),z.lazy(() => GroupUncheckedCreateWithoutUserInputSchema),z.lazy(() => GroupUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupCreateOrConnectWithoutUserInputSchema),z.lazy(() => GroupCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductTagUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ProductTagUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ProductTagCreateWithoutUserInputSchema),z.lazy(() => ProductTagCreateWithoutUserInputSchema).array(),z.lazy(() => ProductTagUncheckedCreateWithoutUserInputSchema),z.lazy(() => ProductTagUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductTagCreateOrConnectWithoutUserInputSchema),z.lazy(() => ProductTagCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductTagCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StockTagUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.StockTagUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => StockTagCreateWithoutUserInputSchema),z.lazy(() => StockTagCreateWithoutUserInputSchema).array(),z.lazy(() => StockTagUncheckedCreateWithoutUserInputSchema),z.lazy(() => StockTagUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockTagCreateOrConnectWithoutUserInputSchema),z.lazy(() => StockTagCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StockTagCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CategoryUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutUserInputSchema),z.lazy(() => CategoryCreateWithoutUserInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutUserInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutUserInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NoteUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.NoteUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => NoteCreateWithoutUserInputSchema),z.lazy(() => NoteCreateWithoutUserInputSchema).array(),z.lazy(() => NoteUncheckedCreateWithoutUserInputSchema),z.lazy(() => NoteUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NoteCreateOrConnectWithoutUserInputSchema),z.lazy(() => NoteCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NoteCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const StockUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.StockUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => StockCreateWithoutUserInputSchema),z.lazy(() => StockCreateWithoutUserInputSchema).array(),z.lazy(() => StockUncheckedCreateWithoutUserInputSchema),z.lazy(() => StockUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockCreateOrConnectWithoutUserInputSchema),z.lazy(() => StockCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StockUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => StockUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StockCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StockUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => StockUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StockUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => StockUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StockScalarWhereInputSchema),z.lazy(() => StockScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const GroupUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.GroupUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutUserInputSchema),z.lazy(() => GroupCreateWithoutUserInputSchema).array(),z.lazy(() => GroupUncheckedCreateWithoutUserInputSchema),z.lazy(() => GroupUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupCreateOrConnectWithoutUserInputSchema),z.lazy(() => GroupCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GroupUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => GroupUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GroupUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => GroupUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GroupUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => GroupUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GroupScalarWhereInputSchema),z.lazy(() => GroupScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductTagUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ProductTagUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductTagCreateWithoutUserInputSchema),z.lazy(() => ProductTagCreateWithoutUserInputSchema).array(),z.lazy(() => ProductTagUncheckedCreateWithoutUserInputSchema),z.lazy(() => ProductTagUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductTagCreateOrConnectWithoutUserInputSchema),z.lazy(() => ProductTagCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductTagUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ProductTagUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductTagCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductTagUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ProductTagUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductTagUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ProductTagUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductTagScalarWhereInputSchema),z.lazy(() => ProductTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const StockTagUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.StockTagUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => StockTagCreateWithoutUserInputSchema),z.lazy(() => StockTagCreateWithoutUserInputSchema).array(),z.lazy(() => StockTagUncheckedCreateWithoutUserInputSchema),z.lazy(() => StockTagUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockTagCreateOrConnectWithoutUserInputSchema),z.lazy(() => StockTagCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StockTagUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => StockTagUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StockTagCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StockTagUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => StockTagUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StockTagUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => StockTagUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StockTagScalarWhereInputSchema),z.lazy(() => StockTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CategoryUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutUserInputSchema),z.lazy(() => CategoryCreateWithoutUserInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutUserInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutUserInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CategoryUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CategoryUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => CategoryUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NoteUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.NoteUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => NoteCreateWithoutUserInputSchema),z.lazy(() => NoteCreateWithoutUserInputSchema).array(),z.lazy(() => NoteUncheckedCreateWithoutUserInputSchema),z.lazy(() => NoteUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NoteCreateOrConnectWithoutUserInputSchema),z.lazy(() => NoteCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NoteUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => NoteUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NoteCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NoteUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => NoteUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NoteUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => NoteUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NoteScalarWhereInputSchema),z.lazy(() => NoteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const StockUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.StockUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => StockCreateWithoutUserInputSchema),z.lazy(() => StockCreateWithoutUserInputSchema).array(),z.lazy(() => StockUncheckedCreateWithoutUserInputSchema),z.lazy(() => StockUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockCreateOrConnectWithoutUserInputSchema),z.lazy(() => StockCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StockUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => StockUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StockCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StockWhereUniqueInputSchema),z.lazy(() => StockWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StockUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => StockUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StockUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => StockUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StockScalarWhereInputSchema),z.lazy(() => StockScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const GroupUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutUserInputSchema),z.lazy(() => GroupCreateWithoutUserInputSchema).array(),z.lazy(() => GroupUncheckedCreateWithoutUserInputSchema),z.lazy(() => GroupUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupCreateOrConnectWithoutUserInputSchema),z.lazy(() => GroupCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GroupUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => GroupUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GroupUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => GroupUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GroupUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => GroupUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GroupScalarWhereInputSchema),z.lazy(() => GroupScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductTagUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ProductTagUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductTagCreateWithoutUserInputSchema),z.lazy(() => ProductTagCreateWithoutUserInputSchema).array(),z.lazy(() => ProductTagUncheckedCreateWithoutUserInputSchema),z.lazy(() => ProductTagUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductTagCreateOrConnectWithoutUserInputSchema),z.lazy(() => ProductTagCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductTagUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ProductTagUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductTagCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductTagWhereUniqueInputSchema),z.lazy(() => ProductTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductTagUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ProductTagUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductTagUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ProductTagUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductTagScalarWhereInputSchema),z.lazy(() => ProductTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const StockTagUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.StockTagUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => StockTagCreateWithoutUserInputSchema),z.lazy(() => StockTagCreateWithoutUserInputSchema).array(),z.lazy(() => StockTagUncheckedCreateWithoutUserInputSchema),z.lazy(() => StockTagUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StockTagCreateOrConnectWithoutUserInputSchema),z.lazy(() => StockTagCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StockTagUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => StockTagUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StockTagCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StockTagWhereUniqueInputSchema),z.lazy(() => StockTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StockTagUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => StockTagUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StockTagUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => StockTagUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StockTagScalarWhereInputSchema),z.lazy(() => StockTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CategoryUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutUserInputSchema),z.lazy(() => CategoryCreateWithoutUserInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutUserInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutUserInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CategoryUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CategoryUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => CategoryUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NoteUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.NoteUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => NoteCreateWithoutUserInputSchema),z.lazy(() => NoteCreateWithoutUserInputSchema).array(),z.lazy(() => NoteUncheckedCreateWithoutUserInputSchema),z.lazy(() => NoteUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NoteCreateOrConnectWithoutUserInputSchema),z.lazy(() => NoteCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NoteUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => NoteUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NoteCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NoteWhereUniqueInputSchema),z.lazy(() => NoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NoteUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => NoteUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NoteUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => NoteUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NoteScalarWhereInputSchema),z.lazy(() => NoteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.union([ z.string().array(),z.string() ]).optional(),
  notIn: z.union([ z.string().array(),z.string() ]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedEnumExpiryTypeFilterSchema: z.ZodType<Prisma.NestedEnumExpiryTypeFilter> = z.object({
  equals: z.lazy(() => ExpiryTypeSchema).optional(),
  in: z.union([ z.lazy(() => ExpiryTypeSchema).array(),z.lazy(() => ExpiryTypeSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => ExpiryTypeSchema).array(),z.lazy(() => ExpiryTypeSchema) ]).optional(),
  not: z.union([ z.lazy(() => ExpiryTypeSchema),z.lazy(() => NestedEnumExpiryTypeFilterSchema) ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.union([ z.string().array(),z.string() ]).optional(),
  notIn: z.union([ z.string().array(),z.string() ]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedEnumExpiryTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumExpiryTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ExpiryTypeSchema).optional(),
  in: z.union([ z.lazy(() => ExpiryTypeSchema).array(),z.lazy(() => ExpiryTypeSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => ExpiryTypeSchema).array(),z.lazy(() => ExpiryTypeSchema) ]).optional(),
  not: z.union([ z.lazy(() => ExpiryTypeSchema),z.lazy(() => NestedEnumExpiryTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumExpiryTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumExpiryTypeFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  notIn: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  notIn: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional().nullable(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional().nullable(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const SkuCreateWithoutExpiryDateInputSchema: z.ZodType<Prisma.SkuCreateWithoutExpiryDateInput> = z.object({
  id: z.string().cuid().optional(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutSkusInputSchema),
  stocks: z.lazy(() => StockCreateNestedManyWithoutSkuInputSchema).optional()
}).strict();

export const SkuUncheckedCreateWithoutExpiryDateInputSchema: z.ZodType<Prisma.SkuUncheckedCreateWithoutExpiryDateInput> = z.object({
  id: z.string().cuid().optional(),
  productId: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  stocks: z.lazy(() => StockUncheckedCreateNestedManyWithoutSkuInputSchema).optional()
}).strict();

export const SkuCreateOrConnectWithoutExpiryDateInputSchema: z.ZodType<Prisma.SkuCreateOrConnectWithoutExpiryDateInput> = z.object({
  where: z.lazy(() => SkuWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkuCreateWithoutExpiryDateInputSchema),z.lazy(() => SkuUncheckedCreateWithoutExpiryDateInputSchema) ]),
}).strict();

export const SkuCreateManyExpiryDateInputEnvelopeSchema: z.ZodType<Prisma.SkuCreateManyExpiryDateInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkuCreateManyExpiryDateInputSchema),z.lazy(() => SkuCreateManyExpiryDateInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const SkuUpsertWithWhereUniqueWithoutExpiryDateInputSchema: z.ZodType<Prisma.SkuUpsertWithWhereUniqueWithoutExpiryDateInput> = z.object({
  where: z.lazy(() => SkuWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkuUpdateWithoutExpiryDateInputSchema),z.lazy(() => SkuUncheckedUpdateWithoutExpiryDateInputSchema) ]),
  create: z.union([ z.lazy(() => SkuCreateWithoutExpiryDateInputSchema),z.lazy(() => SkuUncheckedCreateWithoutExpiryDateInputSchema) ]),
}).strict();

export const SkuUpdateWithWhereUniqueWithoutExpiryDateInputSchema: z.ZodType<Prisma.SkuUpdateWithWhereUniqueWithoutExpiryDateInput> = z.object({
  where: z.lazy(() => SkuWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkuUpdateWithoutExpiryDateInputSchema),z.lazy(() => SkuUncheckedUpdateWithoutExpiryDateInputSchema) ]),
}).strict();

export const SkuUpdateManyWithWhereWithoutExpiryDateInputSchema: z.ZodType<Prisma.SkuUpdateManyWithWhereWithoutExpiryDateInput> = z.object({
  where: z.lazy(() => SkuScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkuUpdateManyMutationInputSchema),z.lazy(() => SkuUncheckedUpdateManyWithoutSkusInputSchema) ]),
}).strict();

export const SkuScalarWhereInputSchema: z.ZodType<Prisma.SkuScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SkuScalarWhereInputSchema),z.lazy(() => SkuScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkuScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkuScalarWhereInputSchema),z.lazy(() => SkuScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiryDateId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  productId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ProductCreateWithoutJanInputSchema: z.ZodType<Prisma.ProductCreateWithoutJanInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  janSite: z.lazy(() => JanSiteCreateNestedOneWithoutProductsInputSchema).optional(),
  skus: z.lazy(() => SkuCreateNestedManyWithoutProductInputSchema).optional(),
  productTags: z.lazy(() => ProductTagCreateNestedManyWithoutProductsInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutProductsInputSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutJanInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutJanInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string().optional().nullable(),
  janSiteId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  skus: z.lazy(() => SkuUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutJanInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutJanInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutJanInputSchema),z.lazy(() => ProductUncheckedCreateWithoutJanInputSchema) ]),
}).strict();

export const ProductCreateManyJanInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManyJanInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductCreateManyJanInputSchema),z.lazy(() => ProductCreateManyJanInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProductUpsertWithWhereUniqueWithoutJanInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutJanInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutJanInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutJanInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutJanInputSchema),z.lazy(() => ProductUncheckedCreateWithoutJanInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutJanInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutJanInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutJanInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutJanInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutJanInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutJanInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutProductsInputSchema) ]),
}).strict();

export const ProductScalarWhereInputSchema: z.ZodType<Prisma.ProductScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  janCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  janSiteId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ProductCreateWithoutJanSiteInputSchema: z.ZodType<Prisma.ProductCreateWithoutJanSiteInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  jan: z.lazy(() => JanCreateNestedOneWithoutProductsInputSchema).optional(),
  skus: z.lazy(() => SkuCreateNestedManyWithoutProductInputSchema).optional(),
  productTags: z.lazy(() => ProductTagCreateNestedManyWithoutProductsInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutProductsInputSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutJanSiteInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutJanSiteInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string().optional().nullable(),
  janCode: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  skus: z.lazy(() => SkuUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutJanSiteInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutJanSiteInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutJanSiteInputSchema),z.lazy(() => ProductUncheckedCreateWithoutJanSiteInputSchema) ]),
}).strict();

export const ProductCreateManyJanSiteInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManyJanSiteInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductCreateManyJanSiteInputSchema),z.lazy(() => ProductCreateManyJanSiteInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProductUpsertWithWhereUniqueWithoutJanSiteInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutJanSiteInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutJanSiteInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutJanSiteInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutJanSiteInputSchema),z.lazy(() => ProductUncheckedCreateWithoutJanSiteInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutJanSiteInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutJanSiteInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutJanSiteInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutJanSiteInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutJanSiteInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutJanSiteInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutProductsInputSchema) ]),
}).strict();

export const UserCreateWithoutNotesInputSchema: z.ZodType<Prisma.UserCreateWithoutNotesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  stocks: z.lazy(() => StockCreateNestedManyWithoutUserInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutUserInputSchema).optional(),
  productTags: z.lazy(() => ProductTagCreateNestedManyWithoutUserInputSchema).optional(),
  stockTags: z.lazy(() => StockTagCreateNestedManyWithoutUserInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutNotesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutNotesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutNotesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutNotesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutNotesInputSchema),z.lazy(() => UserUncheckedCreateWithoutNotesInputSchema) ]),
}).strict();

export const ProductCreateWithoutNotesInputSchema: z.ZodType<Prisma.ProductCreateWithoutNotesInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  jan: z.lazy(() => JanCreateNestedOneWithoutProductsInputSchema).optional(),
  janSite: z.lazy(() => JanSiteCreateNestedOneWithoutProductsInputSchema).optional(),
  skus: z.lazy(() => SkuCreateNestedManyWithoutProductInputSchema).optional(),
  productTags: z.lazy(() => ProductTagCreateNestedManyWithoutProductsInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutNotesInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutNotesInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string().optional().nullable(),
  janCode: z.string().optional().nullable(),
  janSiteId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  skus: z.lazy(() => SkuUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutNotesInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutNotesInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutNotesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutNotesInputSchema) ]),
}).strict();

export const UserUpsertWithoutNotesInputSchema: z.ZodType<Prisma.UserUpsertWithoutNotesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutNotesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutNotesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutNotesInputSchema),z.lazy(() => UserUncheckedCreateWithoutNotesInputSchema) ]),
}).strict();

export const UserUpdateWithoutNotesInputSchema: z.ZodType<Prisma.UserUpdateWithoutNotesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUpdateManyWithoutUserNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutUserNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUpdateManyWithoutUserNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUpdateManyWithoutUserNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutNotesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutNotesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const ProductUpsertWithoutNotesInputSchema: z.ZodType<Prisma.ProductUpsertWithoutNotesInput> = z.object({
  update: z.union([ z.lazy(() => ProductUpdateWithoutNotesInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutNotesInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutNotesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutNotesInputSchema) ]),
}).strict();

export const ProductUpdateWithoutNotesInputSchema: z.ZodType<Prisma.ProductUpdateWithoutNotesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jan: z.lazy(() => JanUpdateOneWithoutProductsNestedInputSchema).optional(),
  janSite: z.lazy(() => JanSiteUpdateOneWithoutProductsNestedInputSchema).optional(),
  skus: z.lazy(() => SkuUpdateManyWithoutProductNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUpdateManyWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutNotesInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutNotesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  janCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  janSiteId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  skus: z.lazy(() => SkuUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const JanCreateWithoutProductsInputSchema: z.ZodType<Prisma.JanCreateWithoutProductsInput> = z.object({
  code: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const JanUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.JanUncheckedCreateWithoutProductsInput> = z.object({
  code: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const JanCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.JanCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => JanWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => JanCreateWithoutProductsInputSchema),z.lazy(() => JanUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const JanSiteCreateWithoutProductsInputSchema: z.ZodType<Prisma.JanSiteCreateWithoutProductsInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const JanSiteUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.JanSiteUncheckedCreateWithoutProductsInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const JanSiteCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.JanSiteCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => JanSiteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => JanSiteCreateWithoutProductsInputSchema),z.lazy(() => JanSiteUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const SkuCreateWithoutProductInputSchema: z.ZodType<Prisma.SkuCreateWithoutProductInput> = z.object({
  id: z.string().cuid().optional(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  expiryDate: z.lazy(() => ExpiryDateCreateNestedOneWithoutSkusInputSchema).optional(),
  stocks: z.lazy(() => StockCreateNestedManyWithoutSkuInputSchema).optional()
}).strict();

export const SkuUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.SkuUncheckedCreateWithoutProductInput> = z.object({
  id: z.string().cuid().optional(),
  expiryDateId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  stocks: z.lazy(() => StockUncheckedCreateNestedManyWithoutSkuInputSchema).optional()
}).strict();

export const SkuCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.SkuCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => SkuWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkuCreateWithoutProductInputSchema),z.lazy(() => SkuUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const SkuCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.SkuCreateManyProductInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkuCreateManyProductInputSchema),z.lazy(() => SkuCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProductTagCreateWithoutProductsInputSchema: z.ZodType<Prisma.ProductTagCreateWithoutProductsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProductTagsInputSchema)
}).strict();

export const ProductTagUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.ProductTagUncheckedCreateWithoutProductsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  userId: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ProductTagCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.ProductTagCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => ProductTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductTagCreateWithoutProductsInputSchema),z.lazy(() => ProductTagUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const CategoryCreateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryCreateWithoutProductsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCategoriesInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutProductsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  userId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const CategoryCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const NoteCreateWithoutProductInputSchema: z.ZodType<Prisma.NoteCreateWithoutProductInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutNotesInputSchema)
}).strict();

export const NoteUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.NoteUncheckedCreateWithoutProductInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export const NoteCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.NoteCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => NoteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NoteCreateWithoutProductInputSchema),z.lazy(() => NoteUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const NoteCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.NoteCreateManyProductInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => NoteCreateManyProductInputSchema),z.lazy(() => NoteCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const JanUpsertWithoutProductsInputSchema: z.ZodType<Prisma.JanUpsertWithoutProductsInput> = z.object({
  update: z.union([ z.lazy(() => JanUpdateWithoutProductsInputSchema),z.lazy(() => JanUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => JanCreateWithoutProductsInputSchema),z.lazy(() => JanUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const JanUpdateWithoutProductsInputSchema: z.ZodType<Prisma.JanUpdateWithoutProductsInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JanUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.JanUncheckedUpdateWithoutProductsInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JanSiteUpsertWithoutProductsInputSchema: z.ZodType<Prisma.JanSiteUpsertWithoutProductsInput> = z.object({
  update: z.union([ z.lazy(() => JanSiteUpdateWithoutProductsInputSchema),z.lazy(() => JanSiteUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => JanSiteCreateWithoutProductsInputSchema),z.lazy(() => JanSiteUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const JanSiteUpdateWithoutProductsInputSchema: z.ZodType<Prisma.JanSiteUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JanSiteUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.JanSiteUncheckedUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SkuUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.SkuUpsertWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => SkuWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkuUpdateWithoutProductInputSchema),z.lazy(() => SkuUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => SkuCreateWithoutProductInputSchema),z.lazy(() => SkuUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const SkuUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.SkuUpdateWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => SkuWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkuUpdateWithoutProductInputSchema),z.lazy(() => SkuUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export const SkuUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.SkuUpdateManyWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => SkuScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkuUpdateManyMutationInputSchema),z.lazy(() => SkuUncheckedUpdateManyWithoutSkusInputSchema) ]),
}).strict();

export const ProductTagUpsertWithWhereUniqueWithoutProductsInputSchema: z.ZodType<Prisma.ProductTagUpsertWithWhereUniqueWithoutProductsInput> = z.object({
  where: z.lazy(() => ProductTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductTagUpdateWithoutProductsInputSchema),z.lazy(() => ProductTagUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => ProductTagCreateWithoutProductsInputSchema),z.lazy(() => ProductTagUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const ProductTagUpdateWithWhereUniqueWithoutProductsInputSchema: z.ZodType<Prisma.ProductTagUpdateWithWhereUniqueWithoutProductsInput> = z.object({
  where: z.lazy(() => ProductTagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductTagUpdateWithoutProductsInputSchema),z.lazy(() => ProductTagUncheckedUpdateWithoutProductsInputSchema) ]),
}).strict();

export const ProductTagUpdateManyWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.ProductTagUpdateManyWithWhereWithoutProductsInput> = z.object({
  where: z.lazy(() => ProductTagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductTagUpdateManyMutationInputSchema),z.lazy(() => ProductTagUncheckedUpdateManyWithoutProductTagsInputSchema) ]),
}).strict();

export const ProductTagScalarWhereInputSchema: z.ZodType<Prisma.ProductTagScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductTagScalarWhereInputSchema),z.lazy(() => ProductTagScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductTagScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductTagScalarWhereInputSchema),z.lazy(() => ProductTagScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CategoryUpsertWithWhereUniqueWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUpsertWithWhereUniqueWithoutProductsInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CategoryUpdateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const CategoryUpdateWithWhereUniqueWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUpdateWithWhereUniqueWithoutProductsInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutProductsInputSchema) ]),
}).strict();

export const CategoryUpdateManyWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithWhereWithoutProductsInput> = z.object({
  where: z.lazy(() => CategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateManyMutationInputSchema),z.lazy(() => CategoryUncheckedUpdateManyWithoutCategoriesInputSchema) ]),
}).strict();

export const CategoryScalarWhereInputSchema: z.ZodType<Prisma.CategoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const NoteUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.NoteUpsertWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => NoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NoteUpdateWithoutProductInputSchema),z.lazy(() => NoteUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => NoteCreateWithoutProductInputSchema),z.lazy(() => NoteUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const NoteUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.NoteUpdateWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => NoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NoteUpdateWithoutProductInputSchema),z.lazy(() => NoteUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export const NoteUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.NoteUpdateManyWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => NoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NoteUpdateManyMutationInputSchema),z.lazy(() => NoteUncheckedUpdateManyWithoutNotesInputSchema) ]),
}).strict();

export const NoteScalarWhereInputSchema: z.ZodType<Prisma.NoteScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NoteScalarWhereInputSchema),z.lazy(() => NoteScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NoteScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NoteScalarWhereInputSchema),z.lazy(() => NoteScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ExpiryDateCreateWithoutSkusInputSchema: z.ZodType<Prisma.ExpiryDateCreateWithoutSkusInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.lazy(() => ExpiryTypeSchema),
  year: z.number().int(),
  month: z.number().int().optional().nullable(),
  day: z.number().int().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ExpiryDateUncheckedCreateWithoutSkusInputSchema: z.ZodType<Prisma.ExpiryDateUncheckedCreateWithoutSkusInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.lazy(() => ExpiryTypeSchema),
  year: z.number().int(),
  month: z.number().int().optional().nullable(),
  day: z.number().int().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ExpiryDateCreateOrConnectWithoutSkusInputSchema: z.ZodType<Prisma.ExpiryDateCreateOrConnectWithoutSkusInput> = z.object({
  where: z.lazy(() => ExpiryDateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ExpiryDateCreateWithoutSkusInputSchema),z.lazy(() => ExpiryDateUncheckedCreateWithoutSkusInputSchema) ]),
}).strict();

export const ProductCreateWithoutSkusInputSchema: z.ZodType<Prisma.ProductCreateWithoutSkusInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  jan: z.lazy(() => JanCreateNestedOneWithoutProductsInputSchema).optional(),
  janSite: z.lazy(() => JanSiteCreateNestedOneWithoutProductsInputSchema).optional(),
  productTags: z.lazy(() => ProductTagCreateNestedManyWithoutProductsInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutProductsInputSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutSkusInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutSkusInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string().optional().nullable(),
  janCode: z.string().optional().nullable(),
  janSiteId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  productTags: z.lazy(() => ProductTagUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutSkusInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutSkusInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutSkusInputSchema),z.lazy(() => ProductUncheckedCreateWithoutSkusInputSchema) ]),
}).strict();

export const StockCreateWithoutSkuInputSchema: z.ZodType<Prisma.StockCreateWithoutSkuInput> = z.object({
  id: z.string().cuid().optional(),
  description: z.string().optional().nullable(),
  quantity: z.number().int().optional(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutStocksInputSchema),
  group: z.lazy(() => GroupCreateNestedOneWithoutStocksInputSchema).optional(),
  stockTags: z.lazy(() => StockTagCreateNestedManyWithoutStocksInputSchema).optional()
}).strict();

export const StockUncheckedCreateWithoutSkuInputSchema: z.ZodType<Prisma.StockUncheckedCreateWithoutSkuInput> = z.object({
  id: z.string().cuid().optional(),
  description: z.string().optional().nullable(),
  quantity: z.number().int().optional(),
  userId: z.string(),
  groupId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  stockTags: z.lazy(() => StockTagUncheckedCreateNestedManyWithoutStocksInputSchema).optional()
}).strict();

export const StockCreateOrConnectWithoutSkuInputSchema: z.ZodType<Prisma.StockCreateOrConnectWithoutSkuInput> = z.object({
  where: z.lazy(() => StockWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StockCreateWithoutSkuInputSchema),z.lazy(() => StockUncheckedCreateWithoutSkuInputSchema) ]),
}).strict();

export const StockCreateManySkuInputEnvelopeSchema: z.ZodType<Prisma.StockCreateManySkuInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => StockCreateManySkuInputSchema),z.lazy(() => StockCreateManySkuInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ExpiryDateUpsertWithoutSkusInputSchema: z.ZodType<Prisma.ExpiryDateUpsertWithoutSkusInput> = z.object({
  update: z.union([ z.lazy(() => ExpiryDateUpdateWithoutSkusInputSchema),z.lazy(() => ExpiryDateUncheckedUpdateWithoutSkusInputSchema) ]),
  create: z.union([ z.lazy(() => ExpiryDateCreateWithoutSkusInputSchema),z.lazy(() => ExpiryDateUncheckedCreateWithoutSkusInputSchema) ]),
}).strict();

export const ExpiryDateUpdateWithoutSkusInputSchema: z.ZodType<Prisma.ExpiryDateUpdateWithoutSkusInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ExpiryTypeSchema),z.lazy(() => EnumExpiryTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  month: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  day: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ExpiryDateUncheckedUpdateWithoutSkusInputSchema: z.ZodType<Prisma.ExpiryDateUncheckedUpdateWithoutSkusInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ExpiryTypeSchema),z.lazy(() => EnumExpiryTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  month: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  day: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUpsertWithoutSkusInputSchema: z.ZodType<Prisma.ProductUpsertWithoutSkusInput> = z.object({
  update: z.union([ z.lazy(() => ProductUpdateWithoutSkusInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutSkusInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutSkusInputSchema),z.lazy(() => ProductUncheckedCreateWithoutSkusInputSchema) ]),
}).strict();

export const ProductUpdateWithoutSkusInputSchema: z.ZodType<Prisma.ProductUpdateWithoutSkusInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jan: z.lazy(() => JanUpdateOneWithoutProductsNestedInputSchema).optional(),
  janSite: z.lazy(() => JanSiteUpdateOneWithoutProductsNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUpdateManyWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutProductsNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutSkusInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutSkusInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  janCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  janSiteId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  productTags: z.lazy(() => ProductTagUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const StockUpsertWithWhereUniqueWithoutSkuInputSchema: z.ZodType<Prisma.StockUpsertWithWhereUniqueWithoutSkuInput> = z.object({
  where: z.lazy(() => StockWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StockUpdateWithoutSkuInputSchema),z.lazy(() => StockUncheckedUpdateWithoutSkuInputSchema) ]),
  create: z.union([ z.lazy(() => StockCreateWithoutSkuInputSchema),z.lazy(() => StockUncheckedCreateWithoutSkuInputSchema) ]),
}).strict();

export const StockUpdateWithWhereUniqueWithoutSkuInputSchema: z.ZodType<Prisma.StockUpdateWithWhereUniqueWithoutSkuInput> = z.object({
  where: z.lazy(() => StockWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StockUpdateWithoutSkuInputSchema),z.lazy(() => StockUncheckedUpdateWithoutSkuInputSchema) ]),
}).strict();

export const StockUpdateManyWithWhereWithoutSkuInputSchema: z.ZodType<Prisma.StockUpdateManyWithWhereWithoutSkuInput> = z.object({
  where: z.lazy(() => StockScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StockUpdateManyMutationInputSchema),z.lazy(() => StockUncheckedUpdateManyWithoutStocksInputSchema) ]),
}).strict();

export const StockScalarWhereInputSchema: z.ZodType<Prisma.StockScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StockScalarWhereInputSchema),z.lazy(() => StockScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StockScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StockScalarWhereInputSchema),z.lazy(() => StockScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  skuId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  groupId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserCreateWithoutStocksInputSchema: z.ZodType<Prisma.UserCreateWithoutStocksInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutUserInputSchema).optional(),
  productTags: z.lazy(() => ProductTagCreateNestedManyWithoutUserInputSchema).optional(),
  stockTags: z.lazy(() => StockTagCreateNestedManyWithoutUserInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutUserInputSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutStocksInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutStocksInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutStocksInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutStocksInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutStocksInputSchema),z.lazy(() => UserUncheckedCreateWithoutStocksInputSchema) ]),
}).strict();

export const SkuCreateWithoutStocksInputSchema: z.ZodType<Prisma.SkuCreateWithoutStocksInput> = z.object({
  id: z.string().cuid().optional(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  expiryDate: z.lazy(() => ExpiryDateCreateNestedOneWithoutSkusInputSchema).optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutSkusInputSchema)
}).strict();

export const SkuUncheckedCreateWithoutStocksInputSchema: z.ZodType<Prisma.SkuUncheckedCreateWithoutStocksInput> = z.object({
  id: z.string().cuid().optional(),
  expiryDateId: z.string().optional().nullable(),
  productId: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const SkuCreateOrConnectWithoutStocksInputSchema: z.ZodType<Prisma.SkuCreateOrConnectWithoutStocksInput> = z.object({
  where: z.lazy(() => SkuWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkuCreateWithoutStocksInputSchema),z.lazy(() => SkuUncheckedCreateWithoutStocksInputSchema) ]),
}).strict();

export const GroupCreateWithoutStocksInputSchema: z.ZodType<Prisma.GroupCreateWithoutStocksInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutGroupsInputSchema),
  group: z.lazy(() => GroupCreateNestedOneWithoutGroupsInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutGroupInputSchema).optional()
}).strict();

export const GroupUncheckedCreateWithoutStocksInputSchema: z.ZodType<Prisma.GroupUncheckedCreateWithoutStocksInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  userId: z.string(),
  groupId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutGroupInputSchema).optional()
}).strict();

export const GroupCreateOrConnectWithoutStocksInputSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutStocksInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupCreateWithoutStocksInputSchema),z.lazy(() => GroupUncheckedCreateWithoutStocksInputSchema) ]),
}).strict();

export const StockTagCreateWithoutStocksInputSchema: z.ZodType<Prisma.StockTagCreateWithoutStocksInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutStockTagsInputSchema)
}).strict();

export const StockTagUncheckedCreateWithoutStocksInputSchema: z.ZodType<Prisma.StockTagUncheckedCreateWithoutStocksInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  userId: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const StockTagCreateOrConnectWithoutStocksInputSchema: z.ZodType<Prisma.StockTagCreateOrConnectWithoutStocksInput> = z.object({
  where: z.lazy(() => StockTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StockTagCreateWithoutStocksInputSchema),z.lazy(() => StockTagUncheckedCreateWithoutStocksInputSchema) ]),
}).strict();

export const UserUpsertWithoutStocksInputSchema: z.ZodType<Prisma.UserUpsertWithoutStocksInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutStocksInputSchema),z.lazy(() => UserUncheckedUpdateWithoutStocksInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutStocksInputSchema),z.lazy(() => UserUncheckedCreateWithoutStocksInputSchema) ]),
}).strict();

export const UserUpdateWithoutStocksInputSchema: z.ZodType<Prisma.UserUpdateWithoutStocksInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutUserNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUpdateManyWithoutUserNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUpdateManyWithoutUserNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutUserNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutStocksInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutStocksInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const SkuUpsertWithoutStocksInputSchema: z.ZodType<Prisma.SkuUpsertWithoutStocksInput> = z.object({
  update: z.union([ z.lazy(() => SkuUpdateWithoutStocksInputSchema),z.lazy(() => SkuUncheckedUpdateWithoutStocksInputSchema) ]),
  create: z.union([ z.lazy(() => SkuCreateWithoutStocksInputSchema),z.lazy(() => SkuUncheckedCreateWithoutStocksInputSchema) ]),
}).strict();

export const SkuUpdateWithoutStocksInputSchema: z.ZodType<Prisma.SkuUpdateWithoutStocksInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiryDate: z.lazy(() => ExpiryDateUpdateOneWithoutSkusNestedInputSchema).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutSkusNestedInputSchema).optional()
}).strict();

export const SkuUncheckedUpdateWithoutStocksInputSchema: z.ZodType<Prisma.SkuUncheckedUpdateWithoutStocksInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiryDateId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GroupUpsertWithoutStocksInputSchema: z.ZodType<Prisma.GroupUpsertWithoutStocksInput> = z.object({
  update: z.union([ z.lazy(() => GroupUpdateWithoutStocksInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutStocksInputSchema) ]),
  create: z.union([ z.lazy(() => GroupCreateWithoutStocksInputSchema),z.lazy(() => GroupUncheckedCreateWithoutStocksInputSchema) ]),
}).strict();

export const GroupUpdateWithoutStocksInputSchema: z.ZodType<Prisma.GroupUpdateWithoutStocksInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutGroupsNestedInputSchema).optional(),
  group: z.lazy(() => GroupUpdateOneWithoutGroupsNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutGroupNestedInputSchema).optional()
}).strict();

export const GroupUncheckedUpdateWithoutStocksInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateWithoutStocksInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  groupId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutGroupNestedInputSchema).optional()
}).strict();

export const StockTagUpsertWithWhereUniqueWithoutStocksInputSchema: z.ZodType<Prisma.StockTagUpsertWithWhereUniqueWithoutStocksInput> = z.object({
  where: z.lazy(() => StockTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StockTagUpdateWithoutStocksInputSchema),z.lazy(() => StockTagUncheckedUpdateWithoutStocksInputSchema) ]),
  create: z.union([ z.lazy(() => StockTagCreateWithoutStocksInputSchema),z.lazy(() => StockTagUncheckedCreateWithoutStocksInputSchema) ]),
}).strict();

export const StockTagUpdateWithWhereUniqueWithoutStocksInputSchema: z.ZodType<Prisma.StockTagUpdateWithWhereUniqueWithoutStocksInput> = z.object({
  where: z.lazy(() => StockTagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StockTagUpdateWithoutStocksInputSchema),z.lazy(() => StockTagUncheckedUpdateWithoutStocksInputSchema) ]),
}).strict();

export const StockTagUpdateManyWithWhereWithoutStocksInputSchema: z.ZodType<Prisma.StockTagUpdateManyWithWhereWithoutStocksInput> = z.object({
  where: z.lazy(() => StockTagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StockTagUpdateManyMutationInputSchema),z.lazy(() => StockTagUncheckedUpdateManyWithoutStockTagsInputSchema) ]),
}).strict();

export const StockTagScalarWhereInputSchema: z.ZodType<Prisma.StockTagScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StockTagScalarWhereInputSchema),z.lazy(() => StockTagScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StockTagScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StockTagScalarWhereInputSchema),z.lazy(() => StockTagScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserCreateWithoutGroupsInputSchema: z.ZodType<Prisma.UserCreateWithoutGroupsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  stocks: z.lazy(() => StockCreateNestedManyWithoutUserInputSchema).optional(),
  productTags: z.lazy(() => ProductTagCreateNestedManyWithoutUserInputSchema).optional(),
  stockTags: z.lazy(() => StockTagCreateNestedManyWithoutUserInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutUserInputSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutGroupsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutGroupsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutGroupsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutGroupsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutGroupsInputSchema),z.lazy(() => UserUncheckedCreateWithoutGroupsInputSchema) ]),
}).strict();

export const GroupCreateWithoutGroupsInputSchema: z.ZodType<Prisma.GroupCreateWithoutGroupsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutGroupsInputSchema),
  group: z.lazy(() => GroupCreateNestedOneWithoutGroupsInputSchema).optional(),
  stocks: z.lazy(() => StockCreateNestedManyWithoutGroupInputSchema).optional()
}).strict();

export const GroupUncheckedCreateWithoutGroupsInputSchema: z.ZodType<Prisma.GroupUncheckedCreateWithoutGroupsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  userId: z.string(),
  groupId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  stocks: z.lazy(() => StockUncheckedCreateNestedManyWithoutGroupInputSchema).optional()
}).strict();

export const GroupCreateOrConnectWithoutGroupsInputSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutGroupsInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupsInputSchema) ]),
}).strict();

export const GroupCreateWithoutGroupInputSchema: z.ZodType<Prisma.GroupCreateWithoutGroupInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutGroupsInputSchema),
  groups: z.lazy(() => GroupCreateNestedManyWithoutGroupInputSchema).optional(),
  stocks: z.lazy(() => StockCreateNestedManyWithoutGroupInputSchema).optional()
}).strict();

export const GroupUncheckedCreateWithoutGroupInputSchema: z.ZodType<Prisma.GroupUncheckedCreateWithoutGroupInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  userId: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutGroupInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedCreateNestedManyWithoutGroupInputSchema).optional()
}).strict();

export const GroupCreateOrConnectWithoutGroupInputSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutGroupInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export const GroupCreateManyGroupInputEnvelopeSchema: z.ZodType<Prisma.GroupCreateManyGroupInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => GroupCreateManyGroupInputSchema),z.lazy(() => GroupCreateManyGroupInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const StockCreateWithoutGroupInputSchema: z.ZodType<Prisma.StockCreateWithoutGroupInput> = z.object({
  id: z.string().cuid().optional(),
  description: z.string().optional().nullable(),
  quantity: z.number().int().optional(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutStocksInputSchema),
  sku: z.lazy(() => SkuCreateNestedOneWithoutStocksInputSchema),
  stockTags: z.lazy(() => StockTagCreateNestedManyWithoutStocksInputSchema).optional()
}).strict();

export const StockUncheckedCreateWithoutGroupInputSchema: z.ZodType<Prisma.StockUncheckedCreateWithoutGroupInput> = z.object({
  id: z.string().cuid().optional(),
  description: z.string().optional().nullable(),
  quantity: z.number().int().optional(),
  userId: z.string(),
  skuId: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  stockTags: z.lazy(() => StockTagUncheckedCreateNestedManyWithoutStocksInputSchema).optional()
}).strict();

export const StockCreateOrConnectWithoutGroupInputSchema: z.ZodType<Prisma.StockCreateOrConnectWithoutGroupInput> = z.object({
  where: z.lazy(() => StockWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StockCreateWithoutGroupInputSchema),z.lazy(() => StockUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export const StockCreateManyGroupInputEnvelopeSchema: z.ZodType<Prisma.StockCreateManyGroupInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => StockCreateManyGroupInputSchema),z.lazy(() => StockCreateManyGroupInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithoutGroupsInputSchema: z.ZodType<Prisma.UserUpsertWithoutGroupsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutGroupsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutGroupsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutGroupsInputSchema),z.lazy(() => UserUncheckedCreateWithoutGroupsInputSchema) ]),
}).strict();

export const UserUpdateWithoutGroupsInputSchema: z.ZodType<Prisma.UserUpdateWithoutGroupsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUpdateManyWithoutUserNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUpdateManyWithoutUserNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUpdateManyWithoutUserNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutUserNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutGroupsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutGroupsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const GroupUpsertWithoutGroupsInputSchema: z.ZodType<Prisma.GroupUpsertWithoutGroupsInput> = z.object({
  update: z.union([ z.lazy(() => GroupUpdateWithoutGroupsInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutGroupsInputSchema) ]),
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupsInputSchema) ]),
}).strict();

export const GroupUpdateWithoutGroupsInputSchema: z.ZodType<Prisma.GroupUpdateWithoutGroupsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutGroupsNestedInputSchema).optional(),
  group: z.lazy(() => GroupUpdateOneWithoutGroupsNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUpdateManyWithoutGroupNestedInputSchema).optional()
}).strict();

export const GroupUncheckedUpdateWithoutGroupsInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateWithoutGroupsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  groupId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  stocks: z.lazy(() => StockUncheckedUpdateManyWithoutGroupNestedInputSchema).optional()
}).strict();

export const GroupUpsertWithWhereUniqueWithoutGroupInputSchema: z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutGroupInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => GroupUpdateWithoutGroupInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutGroupInputSchema) ]),
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export const GroupUpdateWithWhereUniqueWithoutGroupInputSchema: z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutGroupInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => GroupUpdateWithoutGroupInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutGroupInputSchema) ]),
}).strict();

export const GroupUpdateManyWithWhereWithoutGroupInputSchema: z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutGroupInput> = z.object({
  where: z.lazy(() => GroupScalarWhereInputSchema),
  data: z.union([ z.lazy(() => GroupUpdateManyMutationInputSchema),z.lazy(() => GroupUncheckedUpdateManyWithoutGroupsInputSchema) ]),
}).strict();

export const GroupScalarWhereInputSchema: z.ZodType<Prisma.GroupScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GroupScalarWhereInputSchema),z.lazy(() => GroupScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupScalarWhereInputSchema),z.lazy(() => GroupScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  groupId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const StockUpsertWithWhereUniqueWithoutGroupInputSchema: z.ZodType<Prisma.StockUpsertWithWhereUniqueWithoutGroupInput> = z.object({
  where: z.lazy(() => StockWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StockUpdateWithoutGroupInputSchema),z.lazy(() => StockUncheckedUpdateWithoutGroupInputSchema) ]),
  create: z.union([ z.lazy(() => StockCreateWithoutGroupInputSchema),z.lazy(() => StockUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export const StockUpdateWithWhereUniqueWithoutGroupInputSchema: z.ZodType<Prisma.StockUpdateWithWhereUniqueWithoutGroupInput> = z.object({
  where: z.lazy(() => StockWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StockUpdateWithoutGroupInputSchema),z.lazy(() => StockUncheckedUpdateWithoutGroupInputSchema) ]),
}).strict();

export const StockUpdateManyWithWhereWithoutGroupInputSchema: z.ZodType<Prisma.StockUpdateManyWithWhereWithoutGroupInput> = z.object({
  where: z.lazy(() => StockScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StockUpdateManyMutationInputSchema),z.lazy(() => StockUncheckedUpdateManyWithoutStocksInputSchema) ]),
}).strict();

export const UserCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.UserCreateWithoutCategoriesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  stocks: z.lazy(() => StockCreateNestedManyWithoutUserInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutUserInputSchema).optional(),
  productTags: z.lazy(() => ProductTagCreateNestedManyWithoutUserInputSchema).optional(),
  stockTags: z.lazy(() => StockTagCreateNestedManyWithoutUserInputSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCategoriesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutCategoriesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCategoriesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export const ProductCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductCreateWithoutCategoriesInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  jan: z.lazy(() => JanCreateNestedOneWithoutProductsInputSchema).optional(),
  janSite: z.lazy(() => JanSiteCreateNestedOneWithoutProductsInputSchema).optional(),
  skus: z.lazy(() => SkuCreateNestedManyWithoutProductInputSchema).optional(),
  productTags: z.lazy(() => ProductTagCreateNestedManyWithoutProductsInputSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutCategoriesInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string().optional().nullable(),
  janCode: z.string().optional().nullable(),
  janSiteId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  skus: z.lazy(() => SkuUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutCategoriesInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export const UserUpsertWithoutCategoriesInputSchema: z.ZodType<Prisma.UserUpsertWithoutCategoriesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCategoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export const UserUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.UserUpdateWithoutCategoriesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUpdateManyWithoutUserNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutUserNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUpdateManyWithoutUserNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUpdateManyWithoutUserNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCategoriesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const ProductUpsertWithWhereUniqueWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutCategoriesInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutCategoriesInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCategoriesInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutCategoriesInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutProductsInputSchema) ]),
}).strict();

export const UserCreateWithoutProductTagsInputSchema: z.ZodType<Prisma.UserCreateWithoutProductTagsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  stocks: z.lazy(() => StockCreateNestedManyWithoutUserInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutUserInputSchema).optional(),
  stockTags: z.lazy(() => StockTagCreateNestedManyWithoutUserInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutUserInputSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutProductTagsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutProductTagsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutProductTagsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutProductTagsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutProductTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutProductTagsInputSchema) ]),
}).strict();

export const ProductCreateWithoutProductTagsInputSchema: z.ZodType<Prisma.ProductCreateWithoutProductTagsInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  jan: z.lazy(() => JanCreateNestedOneWithoutProductsInputSchema).optional(),
  janSite: z.lazy(() => JanSiteCreateNestedOneWithoutProductsInputSchema).optional(),
  skus: z.lazy(() => SkuCreateNestedManyWithoutProductInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutProductsInputSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutProductTagsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutProductTagsInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string().optional().nullable(),
  janCode: z.string().optional().nullable(),
  janSiteId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  skus: z.lazy(() => SkuUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutProductTagsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutProductTagsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutProductTagsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutProductTagsInputSchema) ]),
}).strict();

export const UserUpsertWithoutProductTagsInputSchema: z.ZodType<Prisma.UserUpsertWithoutProductTagsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutProductTagsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutProductTagsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutProductTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutProductTagsInputSchema) ]),
}).strict();

export const UserUpdateWithoutProductTagsInputSchema: z.ZodType<Prisma.UserUpdateWithoutProductTagsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUpdateManyWithoutUserNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutUserNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUpdateManyWithoutUserNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutUserNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutProductTagsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutProductTagsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const ProductUpsertWithWhereUniqueWithoutProductTagsInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutProductTagsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutProductTagsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutProductTagsInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutProductTagsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutProductTagsInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutProductTagsInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutProductTagsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutProductTagsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutProductTagsInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutProductTagsInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutProductTagsInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutProductsInputSchema) ]),
}).strict();

export const UserCreateWithoutStockTagsInputSchema: z.ZodType<Prisma.UserCreateWithoutStockTagsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  stocks: z.lazy(() => StockCreateNestedManyWithoutUserInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutUserInputSchema).optional(),
  productTags: z.lazy(() => ProductTagCreateNestedManyWithoutUserInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutUserInputSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutStockTagsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutStockTagsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutStockTagsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutStockTagsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutStockTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutStockTagsInputSchema) ]),
}).strict();

export const StockCreateWithoutStockTagsInputSchema: z.ZodType<Prisma.StockCreateWithoutStockTagsInput> = z.object({
  id: z.string().cuid().optional(),
  description: z.string().optional().nullable(),
  quantity: z.number().int().optional(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutStocksInputSchema),
  sku: z.lazy(() => SkuCreateNestedOneWithoutStocksInputSchema),
  group: z.lazy(() => GroupCreateNestedOneWithoutStocksInputSchema).optional()
}).strict();

export const StockUncheckedCreateWithoutStockTagsInputSchema: z.ZodType<Prisma.StockUncheckedCreateWithoutStockTagsInput> = z.object({
  id: z.string().cuid().optional(),
  description: z.string().optional().nullable(),
  quantity: z.number().int().optional(),
  userId: z.string(),
  skuId: z.string(),
  groupId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const StockCreateOrConnectWithoutStockTagsInputSchema: z.ZodType<Prisma.StockCreateOrConnectWithoutStockTagsInput> = z.object({
  where: z.lazy(() => StockWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StockCreateWithoutStockTagsInputSchema),z.lazy(() => StockUncheckedCreateWithoutStockTagsInputSchema) ]),
}).strict();

export const UserUpsertWithoutStockTagsInputSchema: z.ZodType<Prisma.UserUpsertWithoutStockTagsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutStockTagsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutStockTagsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutStockTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutStockTagsInputSchema) ]),
}).strict();

export const UserUpdateWithoutStockTagsInputSchema: z.ZodType<Prisma.UserUpdateWithoutStockTagsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUpdateManyWithoutUserNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutUserNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUpdateManyWithoutUserNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutUserNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutStockTagsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutStockTagsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const StockUpsertWithWhereUniqueWithoutStockTagsInputSchema: z.ZodType<Prisma.StockUpsertWithWhereUniqueWithoutStockTagsInput> = z.object({
  where: z.lazy(() => StockWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StockUpdateWithoutStockTagsInputSchema),z.lazy(() => StockUncheckedUpdateWithoutStockTagsInputSchema) ]),
  create: z.union([ z.lazy(() => StockCreateWithoutStockTagsInputSchema),z.lazy(() => StockUncheckedCreateWithoutStockTagsInputSchema) ]),
}).strict();

export const StockUpdateWithWhereUniqueWithoutStockTagsInputSchema: z.ZodType<Prisma.StockUpdateWithWhereUniqueWithoutStockTagsInput> = z.object({
  where: z.lazy(() => StockWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StockUpdateWithoutStockTagsInputSchema),z.lazy(() => StockUncheckedUpdateWithoutStockTagsInputSchema) ]),
}).strict();

export const StockUpdateManyWithWhereWithoutStockTagsInputSchema: z.ZodType<Prisma.StockUpdateManyWithWhereWithoutStockTagsInput> = z.object({
  where: z.lazy(() => StockScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StockUpdateManyMutationInputSchema),z.lazy(() => StockUncheckedUpdateManyWithoutStocksInputSchema) ]),
}).strict();

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  stocks: z.lazy(() => StockCreateNestedManyWithoutUserInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutUserInputSchema).optional(),
  productTags: z.lazy(() => ProductTagCreateNestedManyWithoutUserInputSchema).optional(),
  stockTags: z.lazy(() => StockTagCreateNestedManyWithoutUserInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutUserInputSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUpdateManyWithoutUserNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutUserNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUpdateManyWithoutUserNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUpdateManyWithoutUserNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutUserNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  stocks: z.lazy(() => StockCreateNestedManyWithoutUserInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutUserInputSchema).optional(),
  productTags: z.lazy(() => ProductTagCreateNestedManyWithoutUserInputSchema).optional(),
  stockTags: z.lazy(() => StockTagCreateNestedManyWithoutUserInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutUserInputSchema).optional(),
  notes: z.lazy(() => NoteCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUpdateManyWithoutUserNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutUserNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUpdateManyWithoutUserNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUpdateManyWithoutUserNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutUserNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AccountCreateManyUserInputSchema),z.lazy(() => AccountCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date()
}).strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date()
}).strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SessionCreateManyUserInputSchema),z.lazy(() => SessionCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const StockCreateWithoutUserInputSchema: z.ZodType<Prisma.StockCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  description: z.string().optional().nullable(),
  quantity: z.number().int().optional(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  sku: z.lazy(() => SkuCreateNestedOneWithoutStocksInputSchema),
  group: z.lazy(() => GroupCreateNestedOneWithoutStocksInputSchema).optional(),
  stockTags: z.lazy(() => StockTagCreateNestedManyWithoutStocksInputSchema).optional()
}).strict();

export const StockUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.StockUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  description: z.string().optional().nullable(),
  quantity: z.number().int().optional(),
  skuId: z.string(),
  groupId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  stockTags: z.lazy(() => StockTagUncheckedCreateNestedManyWithoutStocksInputSchema).optional()
}).strict();

export const StockCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.StockCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => StockWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StockCreateWithoutUserInputSchema),z.lazy(() => StockUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const StockCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.StockCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => StockCreateManyUserInputSchema),z.lazy(() => StockCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const GroupCreateWithoutUserInputSchema: z.ZodType<Prisma.GroupCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  group: z.lazy(() => GroupCreateNestedOneWithoutGroupsInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutGroupInputSchema).optional(),
  stocks: z.lazy(() => StockCreateNestedManyWithoutGroupInputSchema).optional()
}).strict();

export const GroupUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.GroupUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  groupId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutGroupInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedCreateNestedManyWithoutGroupInputSchema).optional()
}).strict();

export const GroupCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupCreateWithoutUserInputSchema),z.lazy(() => GroupUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const GroupCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.GroupCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => GroupCreateManyUserInputSchema),z.lazy(() => GroupCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProductTagCreateWithoutUserInputSchema: z.ZodType<Prisma.ProductTagCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutProductTagsInputSchema).optional()
}).strict();

export const ProductTagUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ProductTagUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutProductTagsInputSchema).optional()
}).strict();

export const ProductTagCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ProductTagCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ProductTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductTagCreateWithoutUserInputSchema),z.lazy(() => ProductTagUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ProductTagCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ProductTagCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductTagCreateManyUserInputSchema),z.lazy(() => ProductTagCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const StockTagCreateWithoutUserInputSchema: z.ZodType<Prisma.StockTagCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  stocks: z.lazy(() => StockCreateNestedManyWithoutStockTagsInputSchema).optional()
}).strict();

export const StockTagUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.StockTagUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  stocks: z.lazy(() => StockUncheckedCreateNestedManyWithoutStockTagsInputSchema).optional()
}).strict();

export const StockTagCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.StockTagCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => StockTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StockTagCreateWithoutUserInputSchema),z.lazy(() => StockTagUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const StockTagCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.StockTagCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => StockTagCreateManyUserInputSchema),z.lazy(() => StockTagCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CategoryCreateWithoutUserInputSchema: z.ZodType<Prisma.CategoryCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutCategoriesInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutCategoriesInputSchema).optional()
}).strict();

export const CategoryCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutUserInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const CategoryCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.CategoryCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CategoryCreateManyUserInputSchema),z.lazy(() => CategoryCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const NoteCreateWithoutUserInputSchema: z.ZodType<Prisma.NoteCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  Product: z.lazy(() => ProductCreateNestedOneWithoutNotesInputSchema).optional()
}).strict();

export const NoteUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.NoteUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  productId: z.string().optional().nullable()
}).strict();

export const NoteCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.NoteCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => NoteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NoteCreateWithoutUserInputSchema),z.lazy(() => NoteUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const NoteCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.NoteCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => NoteCreateManyUserInputSchema),z.lazy(() => NoteCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateManyMutationInputSchema),z.lazy(() => AccountUncheckedUpdateManyWithoutAccountsInputSchema) ]),
}).strict();

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateManyMutationInputSchema),z.lazy(() => SessionUncheckedUpdateManyWithoutSessionsInputSchema) ]),
}).strict();

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const StockUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.StockUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => StockWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StockUpdateWithoutUserInputSchema),z.lazy(() => StockUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => StockCreateWithoutUserInputSchema),z.lazy(() => StockUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const StockUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.StockUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => StockWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StockUpdateWithoutUserInputSchema),z.lazy(() => StockUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const StockUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.StockUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => StockScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StockUpdateManyMutationInputSchema),z.lazy(() => StockUncheckedUpdateManyWithoutStocksInputSchema) ]),
}).strict();

export const GroupUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => GroupUpdateWithoutUserInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => GroupCreateWithoutUserInputSchema),z.lazy(() => GroupUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const GroupUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => GroupUpdateWithoutUserInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const GroupUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => GroupScalarWhereInputSchema),
  data: z.union([ z.lazy(() => GroupUpdateManyMutationInputSchema),z.lazy(() => GroupUncheckedUpdateManyWithoutGroupsInputSchema) ]),
}).strict();

export const ProductTagUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ProductTagUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ProductTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductTagUpdateWithoutUserInputSchema),z.lazy(() => ProductTagUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ProductTagCreateWithoutUserInputSchema),z.lazy(() => ProductTagUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ProductTagUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ProductTagUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ProductTagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductTagUpdateWithoutUserInputSchema),z.lazy(() => ProductTagUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const ProductTagUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ProductTagUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ProductTagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductTagUpdateManyMutationInputSchema),z.lazy(() => ProductTagUncheckedUpdateManyWithoutProductTagsInputSchema) ]),
}).strict();

export const StockTagUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.StockTagUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => StockTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StockTagUpdateWithoutUserInputSchema),z.lazy(() => StockTagUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => StockTagCreateWithoutUserInputSchema),z.lazy(() => StockTagUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const StockTagUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.StockTagUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => StockTagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StockTagUpdateWithoutUserInputSchema),z.lazy(() => StockTagUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const StockTagUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.StockTagUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => StockTagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StockTagUpdateManyMutationInputSchema),z.lazy(() => StockTagUncheckedUpdateManyWithoutStockTagsInputSchema) ]),
}).strict();

export const CategoryUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CategoryUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CategoryUpdateWithoutUserInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutUserInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const CategoryUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CategoryUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutUserInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const CategoryUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => CategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateManyMutationInputSchema),z.lazy(() => CategoryUncheckedUpdateManyWithoutCategoriesInputSchema) ]),
}).strict();

export const NoteUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.NoteUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => NoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NoteUpdateWithoutUserInputSchema),z.lazy(() => NoteUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => NoteCreateWithoutUserInputSchema),z.lazy(() => NoteUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const NoteUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.NoteUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => NoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NoteUpdateWithoutUserInputSchema),z.lazy(() => NoteUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const NoteUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.NoteUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => NoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NoteUpdateManyMutationInputSchema),z.lazy(() => NoteUncheckedUpdateManyWithoutNotesInputSchema) ]),
}).strict();

export const SkuCreateManyExpiryDateInputSchema: z.ZodType<Prisma.SkuCreateManyExpiryDateInput> = z.object({
  id: z.string().cuid().optional(),
  productId: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const SkuUpdateWithoutExpiryDateInputSchema: z.ZodType<Prisma.SkuUpdateWithoutExpiryDateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutSkusNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUpdateManyWithoutSkuNestedInputSchema).optional()
}).strict();

export const SkuUncheckedUpdateWithoutExpiryDateInputSchema: z.ZodType<Prisma.SkuUncheckedUpdateWithoutExpiryDateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  stocks: z.lazy(() => StockUncheckedUpdateManyWithoutSkuNestedInputSchema).optional()
}).strict();

export const SkuUncheckedUpdateManyWithoutSkusInputSchema: z.ZodType<Prisma.SkuUncheckedUpdateManyWithoutSkusInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateManyJanInputSchema: z.ZodType<Prisma.ProductCreateManyJanInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string().optional().nullable(),
  janSiteId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ProductUpdateWithoutJanInputSchema: z.ZodType<Prisma.ProductUpdateWithoutJanInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  janSite: z.lazy(() => JanSiteUpdateOneWithoutProductsNestedInputSchema).optional(),
  skus: z.lazy(() => SkuUpdateManyWithoutProductNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUpdateManyWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutProductsNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutJanInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutJanInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  janSiteId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  skus: z.lazy(() => SkuUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateManyWithoutProductsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutProductsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  janSiteId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateManyJanSiteInputSchema: z.ZodType<Prisma.ProductCreateManyJanSiteInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  image: z.string().optional().nullable(),
  janCode: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ProductUpdateWithoutJanSiteInputSchema: z.ZodType<Prisma.ProductUpdateWithoutJanSiteInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jan: z.lazy(() => JanUpdateOneWithoutProductsNestedInputSchema).optional(),
  skus: z.lazy(() => SkuUpdateManyWithoutProductNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUpdateManyWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutProductsNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutJanSiteInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutJanSiteInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  janCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  skus: z.lazy(() => SkuUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const SkuCreateManyProductInputSchema: z.ZodType<Prisma.SkuCreateManyProductInput> = z.object({
  id: z.string().cuid().optional(),
  expiryDateId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const NoteCreateManyProductInputSchema: z.ZodType<Prisma.NoteCreateManyProductInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export const SkuUpdateWithoutProductInputSchema: z.ZodType<Prisma.SkuUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiryDate: z.lazy(() => ExpiryDateUpdateOneWithoutSkusNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUpdateManyWithoutSkuNestedInputSchema).optional()
}).strict();

export const SkuUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.SkuUncheckedUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiryDateId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  stocks: z.lazy(() => StockUncheckedUpdateManyWithoutSkuNestedInputSchema).optional()
}).strict();

export const ProductTagUpdateWithoutProductsInputSchema: z.ZodType<Prisma.ProductTagUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutProductTagsNestedInputSchema).optional()
}).strict();

export const ProductTagUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.ProductTagUncheckedUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductTagUncheckedUpdateManyWithoutProductTagsInputSchema: z.ZodType<Prisma.ProductTagUncheckedUpdateManyWithoutProductTagsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryUpdateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryUncheckedUpdateManyWithoutCategoriesInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyWithoutCategoriesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NoteUpdateWithoutProductInputSchema: z.ZodType<Prisma.NoteUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutNotesNestedInputSchema).optional()
}).strict();

export const NoteUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.NoteUncheckedUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NoteUncheckedUpdateManyWithoutNotesInputSchema: z.ZodType<Prisma.NoteUncheckedUpdateManyWithoutNotesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StockCreateManySkuInputSchema: z.ZodType<Prisma.StockCreateManySkuInput> = z.object({
  id: z.string().cuid().optional(),
  description: z.string().optional().nullable(),
  quantity: z.number().int().optional(),
  userId: z.string(),
  groupId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const StockUpdateWithoutSkuInputSchema: z.ZodType<Prisma.StockUpdateWithoutSkuInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutStocksNestedInputSchema).optional(),
  group: z.lazy(() => GroupUpdateOneWithoutStocksNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUpdateManyWithoutStocksNestedInputSchema).optional()
}).strict();

export const StockUncheckedUpdateWithoutSkuInputSchema: z.ZodType<Prisma.StockUncheckedUpdateWithoutSkuInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  groupId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  stockTags: z.lazy(() => StockTagUncheckedUpdateManyWithoutStocksNestedInputSchema).optional()
}).strict();

export const StockUncheckedUpdateManyWithoutStocksInputSchema: z.ZodType<Prisma.StockUncheckedUpdateManyWithoutStocksInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  groupId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StockTagUpdateWithoutStocksInputSchema: z.ZodType<Prisma.StockTagUpdateWithoutStocksInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutStockTagsNestedInputSchema).optional()
}).strict();

export const StockTagUncheckedUpdateWithoutStocksInputSchema: z.ZodType<Prisma.StockTagUncheckedUpdateWithoutStocksInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StockTagUncheckedUpdateManyWithoutStockTagsInputSchema: z.ZodType<Prisma.StockTagUncheckedUpdateManyWithoutStockTagsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GroupCreateManyGroupInputSchema: z.ZodType<Prisma.GroupCreateManyGroupInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  userId: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const StockCreateManyGroupInputSchema: z.ZodType<Prisma.StockCreateManyGroupInput> = z.object({
  id: z.string().cuid().optional(),
  description: z.string().optional().nullable(),
  quantity: z.number().int().optional(),
  userId: z.string(),
  skuId: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const GroupUpdateWithoutGroupInputSchema: z.ZodType<Prisma.GroupUpdateWithoutGroupInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutGroupsNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutGroupNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUpdateManyWithoutGroupNestedInputSchema).optional()
}).strict();

export const GroupUncheckedUpdateWithoutGroupInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateWithoutGroupInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutGroupNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedUpdateManyWithoutGroupNestedInputSchema).optional()
}).strict();

export const GroupUncheckedUpdateManyWithoutGroupsInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateManyWithoutGroupsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StockUpdateWithoutGroupInputSchema: z.ZodType<Prisma.StockUpdateWithoutGroupInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutStocksNestedInputSchema).optional(),
  sku: z.lazy(() => SkuUpdateOneRequiredWithoutStocksNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUpdateManyWithoutStocksNestedInputSchema).optional()
}).strict();

export const StockUncheckedUpdateWithoutGroupInputSchema: z.ZodType<Prisma.StockUncheckedUpdateWithoutGroupInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skuId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  stockTags: z.lazy(() => StockTagUncheckedUpdateManyWithoutStocksNestedInputSchema).optional()
}).strict();

export const ProductUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUpdateWithoutCategoriesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jan: z.lazy(() => JanUpdateOneWithoutProductsNestedInputSchema).optional(),
  janSite: z.lazy(() => JanSiteUpdateOneWithoutProductsNestedInputSchema).optional(),
  skus: z.lazy(() => SkuUpdateManyWithoutProductNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUpdateManyWithoutProductsNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutCategoriesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  janCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  janSiteId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  skus: z.lazy(() => SkuUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  productTags: z.lazy(() => ProductTagUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUpdateWithoutProductTagsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutProductTagsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jan: z.lazy(() => JanUpdateOneWithoutProductsNestedInputSchema).optional(),
  janSite: z.lazy(() => JanSiteUpdateOneWithoutProductsNestedInputSchema).optional(),
  skus: z.lazy(() => SkuUpdateManyWithoutProductNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutProductsNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutProductTagsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutProductTagsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  janCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  janSiteId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  skus: z.lazy(() => SkuUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  notes: z.lazy(() => NoteUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const StockUpdateWithoutStockTagsInputSchema: z.ZodType<Prisma.StockUpdateWithoutStockTagsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutStocksNestedInputSchema).optional(),
  sku: z.lazy(() => SkuUpdateOneRequiredWithoutStocksNestedInputSchema).optional(),
  group: z.lazy(() => GroupUpdateOneWithoutStocksNestedInputSchema).optional()
}).strict();

export const StockUncheckedUpdateWithoutStockTagsInputSchema: z.ZodType<Prisma.StockUncheckedUpdateWithoutStockTagsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skuId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  groupId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date()
}).strict();

export const StockCreateManyUserInputSchema: z.ZodType<Prisma.StockCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  description: z.string().optional().nullable(),
  quantity: z.number().int().optional(),
  skuId: z.string(),
  groupId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const GroupCreateManyUserInputSchema: z.ZodType<Prisma.GroupCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  groupId: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ProductTagCreateManyUserInputSchema: z.ZodType<Prisma.ProductTagCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const StockTagCreateManyUserInputSchema: z.ZodType<Prisma.StockTagCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const CategoryCreateManyUserInputSchema: z.ZodType<Prisma.CategoryCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const NoteCreateManyUserInputSchema: z.ZodType<Prisma.NoteCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  productId: z.string().optional().nullable()
}).strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyWithoutAccountsInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutAccountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutSessionsInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StockUpdateWithoutUserInputSchema: z.ZodType<Prisma.StockUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sku: z.lazy(() => SkuUpdateOneRequiredWithoutStocksNestedInputSchema).optional(),
  group: z.lazy(() => GroupUpdateOneWithoutStocksNestedInputSchema).optional(),
  stockTags: z.lazy(() => StockTagUpdateManyWithoutStocksNestedInputSchema).optional()
}).strict();

export const StockUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.StockUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  skuId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  groupId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  stockTags: z.lazy(() => StockTagUncheckedUpdateManyWithoutStocksNestedInputSchema).optional()
}).strict();

export const GroupUpdateWithoutUserInputSchema: z.ZodType<Prisma.GroupUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.lazy(() => GroupUpdateOneWithoutGroupsNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutGroupNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUpdateManyWithoutGroupNestedInputSchema).optional()
}).strict();

export const GroupUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  groupId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutGroupNestedInputSchema).optional(),
  stocks: z.lazy(() => StockUncheckedUpdateManyWithoutGroupNestedInputSchema).optional()
}).strict();

export const ProductTagUpdateWithoutUserInputSchema: z.ZodType<Prisma.ProductTagUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutProductTagsNestedInputSchema).optional()
}).strict();

export const ProductTagUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ProductTagUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutProductTagsNestedInputSchema).optional()
}).strict();

export const StockTagUpdateWithoutUserInputSchema: z.ZodType<Prisma.StockTagUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  stocks: z.lazy(() => StockUpdateManyWithoutStockTagsNestedInputSchema).optional()
}).strict();

export const StockTagUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.StockTagUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  stocks: z.lazy(() => StockUncheckedUpdateManyWithoutStockTagsNestedInputSchema).optional()
}).strict();

export const CategoryUpdateWithoutUserInputSchema: z.ZodType<Prisma.CategoryUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const NoteUpdateWithoutUserInputSchema: z.ZodType<Prisma.NoteUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Product: z.lazy(() => ProductUpdateOneWithoutNotesNestedInputSchema).optional()
}).strict();

export const NoteUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.NoteUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ExpiryDateFindFirstArgsSchema: z.ZodType<Prisma.ExpiryDateFindFirstArgs> = z.object({
  select: ExpiryDateSelectSchema.optional(),
  include: ExpiryDateIncludeSchema.optional(),
  where: ExpiryDateWhereInputSchema.optional(),
  orderBy: z.union([ ExpiryDateOrderByWithRelationInputSchema.array(),ExpiryDateOrderByWithRelationInputSchema ]).optional(),
  cursor: ExpiryDateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ExpiryDateScalarFieldEnumSchema.array().optional(),
}).strict()

export const ExpiryDateFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ExpiryDateFindFirstOrThrowArgs> = z.object({
  select: ExpiryDateSelectSchema.optional(),
  include: ExpiryDateIncludeSchema.optional(),
  where: ExpiryDateWhereInputSchema.optional(),
  orderBy: z.union([ ExpiryDateOrderByWithRelationInputSchema.array(),ExpiryDateOrderByWithRelationInputSchema ]).optional(),
  cursor: ExpiryDateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ExpiryDateScalarFieldEnumSchema.array().optional(),
}).strict()

export const ExpiryDateFindManyArgsSchema: z.ZodType<Prisma.ExpiryDateFindManyArgs> = z.object({
  select: ExpiryDateSelectSchema.optional(),
  include: ExpiryDateIncludeSchema.optional(),
  where: ExpiryDateWhereInputSchema.optional(),
  orderBy: z.union([ ExpiryDateOrderByWithRelationInputSchema.array(),ExpiryDateOrderByWithRelationInputSchema ]).optional(),
  cursor: ExpiryDateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ExpiryDateScalarFieldEnumSchema.array().optional(),
}).strict()

export const ExpiryDateAggregateArgsSchema: z.ZodType<Prisma.ExpiryDateAggregateArgs> = z.object({
  where: ExpiryDateWhereInputSchema.optional(),
  orderBy: z.union([ ExpiryDateOrderByWithRelationInputSchema.array(),ExpiryDateOrderByWithRelationInputSchema ]).optional(),
  cursor: ExpiryDateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ExpiryDateGroupByArgsSchema: z.ZodType<Prisma.ExpiryDateGroupByArgs> = z.object({
  where: ExpiryDateWhereInputSchema.optional(),
  orderBy: z.union([ ExpiryDateOrderByWithAggregationInputSchema.array(),ExpiryDateOrderByWithAggregationInputSchema ]).optional(),
  by: ExpiryDateScalarFieldEnumSchema.array(),
  having: ExpiryDateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ExpiryDateFindUniqueArgsSchema: z.ZodType<Prisma.ExpiryDateFindUniqueArgs> = z.object({
  select: ExpiryDateSelectSchema.optional(),
  include: ExpiryDateIncludeSchema.optional(),
  where: ExpiryDateWhereUniqueInputSchema,
}).strict()

export const ExpiryDateFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ExpiryDateFindUniqueOrThrowArgs> = z.object({
  select: ExpiryDateSelectSchema.optional(),
  include: ExpiryDateIncludeSchema.optional(),
  where: ExpiryDateWhereUniqueInputSchema,
}).strict()

export const JanFindFirstArgsSchema: z.ZodType<Prisma.JanFindFirstArgs> = z.object({
  select: JanSelectSchema.optional(),
  include: JanIncludeSchema.optional(),
  where: JanWhereInputSchema.optional(),
  orderBy: z.union([ JanOrderByWithRelationInputSchema.array(),JanOrderByWithRelationInputSchema ]).optional(),
  cursor: JanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: JanScalarFieldEnumSchema.array().optional(),
}).strict()

export const JanFindFirstOrThrowArgsSchema: z.ZodType<Prisma.JanFindFirstOrThrowArgs> = z.object({
  select: JanSelectSchema.optional(),
  include: JanIncludeSchema.optional(),
  where: JanWhereInputSchema.optional(),
  orderBy: z.union([ JanOrderByWithRelationInputSchema.array(),JanOrderByWithRelationInputSchema ]).optional(),
  cursor: JanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: JanScalarFieldEnumSchema.array().optional(),
}).strict()

export const JanFindManyArgsSchema: z.ZodType<Prisma.JanFindManyArgs> = z.object({
  select: JanSelectSchema.optional(),
  include: JanIncludeSchema.optional(),
  where: JanWhereInputSchema.optional(),
  orderBy: z.union([ JanOrderByWithRelationInputSchema.array(),JanOrderByWithRelationInputSchema ]).optional(),
  cursor: JanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: JanScalarFieldEnumSchema.array().optional(),
}).strict()

export const JanAggregateArgsSchema: z.ZodType<Prisma.JanAggregateArgs> = z.object({
  where: JanWhereInputSchema.optional(),
  orderBy: z.union([ JanOrderByWithRelationInputSchema.array(),JanOrderByWithRelationInputSchema ]).optional(),
  cursor: JanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const JanGroupByArgsSchema: z.ZodType<Prisma.JanGroupByArgs> = z.object({
  where: JanWhereInputSchema.optional(),
  orderBy: z.union([ JanOrderByWithAggregationInputSchema.array(),JanOrderByWithAggregationInputSchema ]).optional(),
  by: JanScalarFieldEnumSchema.array(),
  having: JanScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const JanFindUniqueArgsSchema: z.ZodType<Prisma.JanFindUniqueArgs> = z.object({
  select: JanSelectSchema.optional(),
  include: JanIncludeSchema.optional(),
  where: JanWhereUniqueInputSchema,
}).strict()

export const JanFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.JanFindUniqueOrThrowArgs> = z.object({
  select: JanSelectSchema.optional(),
  include: JanIncludeSchema.optional(),
  where: JanWhereUniqueInputSchema,
}).strict()

export const JanSiteFindFirstArgsSchema: z.ZodType<Prisma.JanSiteFindFirstArgs> = z.object({
  select: JanSiteSelectSchema.optional(),
  include: JanSiteIncludeSchema.optional(),
  where: JanSiteWhereInputSchema.optional(),
  orderBy: z.union([ JanSiteOrderByWithRelationInputSchema.array(),JanSiteOrderByWithRelationInputSchema ]).optional(),
  cursor: JanSiteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: JanSiteScalarFieldEnumSchema.array().optional(),
}).strict()

export const JanSiteFindFirstOrThrowArgsSchema: z.ZodType<Prisma.JanSiteFindFirstOrThrowArgs> = z.object({
  select: JanSiteSelectSchema.optional(),
  include: JanSiteIncludeSchema.optional(),
  where: JanSiteWhereInputSchema.optional(),
  orderBy: z.union([ JanSiteOrderByWithRelationInputSchema.array(),JanSiteOrderByWithRelationInputSchema ]).optional(),
  cursor: JanSiteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: JanSiteScalarFieldEnumSchema.array().optional(),
}).strict()

export const JanSiteFindManyArgsSchema: z.ZodType<Prisma.JanSiteFindManyArgs> = z.object({
  select: JanSiteSelectSchema.optional(),
  include: JanSiteIncludeSchema.optional(),
  where: JanSiteWhereInputSchema.optional(),
  orderBy: z.union([ JanSiteOrderByWithRelationInputSchema.array(),JanSiteOrderByWithRelationInputSchema ]).optional(),
  cursor: JanSiteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: JanSiteScalarFieldEnumSchema.array().optional(),
}).strict()

export const JanSiteAggregateArgsSchema: z.ZodType<Prisma.JanSiteAggregateArgs> = z.object({
  where: JanSiteWhereInputSchema.optional(),
  orderBy: z.union([ JanSiteOrderByWithRelationInputSchema.array(),JanSiteOrderByWithRelationInputSchema ]).optional(),
  cursor: JanSiteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const JanSiteGroupByArgsSchema: z.ZodType<Prisma.JanSiteGroupByArgs> = z.object({
  where: JanSiteWhereInputSchema.optional(),
  orderBy: z.union([ JanSiteOrderByWithAggregationInputSchema.array(),JanSiteOrderByWithAggregationInputSchema ]).optional(),
  by: JanSiteScalarFieldEnumSchema.array(),
  having: JanSiteScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const JanSiteFindUniqueArgsSchema: z.ZodType<Prisma.JanSiteFindUniqueArgs> = z.object({
  select: JanSiteSelectSchema.optional(),
  include: JanSiteIncludeSchema.optional(),
  where: JanSiteWhereUniqueInputSchema,
}).strict()

export const JanSiteFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.JanSiteFindUniqueOrThrowArgs> = z.object({
  select: JanSiteSelectSchema.optional(),
  include: JanSiteIncludeSchema.optional(),
  where: JanSiteWhereUniqueInputSchema,
}).strict()

export const NoteFindFirstArgsSchema: z.ZodType<Prisma.NoteFindFirstArgs> = z.object({
  select: NoteSelectSchema.optional(),
  include: NoteIncludeSchema.optional(),
  where: NoteWhereInputSchema.optional(),
  orderBy: z.union([ NoteOrderByWithRelationInputSchema.array(),NoteOrderByWithRelationInputSchema ]).optional(),
  cursor: NoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: NoteScalarFieldEnumSchema.array().optional(),
}).strict()

export const NoteFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NoteFindFirstOrThrowArgs> = z.object({
  select: NoteSelectSchema.optional(),
  include: NoteIncludeSchema.optional(),
  where: NoteWhereInputSchema.optional(),
  orderBy: z.union([ NoteOrderByWithRelationInputSchema.array(),NoteOrderByWithRelationInputSchema ]).optional(),
  cursor: NoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: NoteScalarFieldEnumSchema.array().optional(),
}).strict()

export const NoteFindManyArgsSchema: z.ZodType<Prisma.NoteFindManyArgs> = z.object({
  select: NoteSelectSchema.optional(),
  include: NoteIncludeSchema.optional(),
  where: NoteWhereInputSchema.optional(),
  orderBy: z.union([ NoteOrderByWithRelationInputSchema.array(),NoteOrderByWithRelationInputSchema ]).optional(),
  cursor: NoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: NoteScalarFieldEnumSchema.array().optional(),
}).strict()

export const NoteAggregateArgsSchema: z.ZodType<Prisma.NoteAggregateArgs> = z.object({
  where: NoteWhereInputSchema.optional(),
  orderBy: z.union([ NoteOrderByWithRelationInputSchema.array(),NoteOrderByWithRelationInputSchema ]).optional(),
  cursor: NoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const NoteGroupByArgsSchema: z.ZodType<Prisma.NoteGroupByArgs> = z.object({
  where: NoteWhereInputSchema.optional(),
  orderBy: z.union([ NoteOrderByWithAggregationInputSchema.array(),NoteOrderByWithAggregationInputSchema ]).optional(),
  by: NoteScalarFieldEnumSchema.array(),
  having: NoteScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const NoteFindUniqueArgsSchema: z.ZodType<Prisma.NoteFindUniqueArgs> = z.object({
  select: NoteSelectSchema.optional(),
  include: NoteIncludeSchema.optional(),
  where: NoteWhereUniqueInputSchema,
}).strict()

export const NoteFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NoteFindUniqueOrThrowArgs> = z.object({
  select: NoteSelectSchema.optional(),
  include: NoteIncludeSchema.optional(),
  where: NoteWhereUniqueInputSchema,
}).strict()

export const ProductFindFirstArgsSchema: z.ZodType<Prisma.ProductFindFirstArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductScalarFieldEnumSchema.array().optional(),
}).strict()

export const ProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductFindFirstOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductScalarFieldEnumSchema.array().optional(),
}).strict()

export const ProductFindManyArgsSchema: z.ZodType<Prisma.ProductFindManyArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductScalarFieldEnumSchema.array().optional(),
}).strict()

export const ProductAggregateArgsSchema: z.ZodType<Prisma.ProductAggregateArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProductGroupByArgsSchema: z.ZodType<Prisma.ProductGroupByArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithAggregationInputSchema.array(),ProductOrderByWithAggregationInputSchema ]).optional(),
  by: ProductScalarFieldEnumSchema.array(),
  having: ProductScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProductFindUniqueArgsSchema: z.ZodType<Prisma.ProductFindUniqueArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const ProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductFindUniqueOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const SkuFindFirstArgsSchema: z.ZodType<Prisma.SkuFindFirstArgs> = z.object({
  select: SkuSelectSchema.optional(),
  include: SkuIncludeSchema.optional(),
  where: SkuWhereInputSchema.optional(),
  orderBy: z.union([ SkuOrderByWithRelationInputSchema.array(),SkuOrderByWithRelationInputSchema ]).optional(),
  cursor: SkuWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SkuScalarFieldEnumSchema.array().optional(),
}).strict()

export const SkuFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SkuFindFirstOrThrowArgs> = z.object({
  select: SkuSelectSchema.optional(),
  include: SkuIncludeSchema.optional(),
  where: SkuWhereInputSchema.optional(),
  orderBy: z.union([ SkuOrderByWithRelationInputSchema.array(),SkuOrderByWithRelationInputSchema ]).optional(),
  cursor: SkuWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SkuScalarFieldEnumSchema.array().optional(),
}).strict()

export const SkuFindManyArgsSchema: z.ZodType<Prisma.SkuFindManyArgs> = z.object({
  select: SkuSelectSchema.optional(),
  include: SkuIncludeSchema.optional(),
  where: SkuWhereInputSchema.optional(),
  orderBy: z.union([ SkuOrderByWithRelationInputSchema.array(),SkuOrderByWithRelationInputSchema ]).optional(),
  cursor: SkuWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SkuScalarFieldEnumSchema.array().optional(),
}).strict()

export const SkuAggregateArgsSchema: z.ZodType<Prisma.SkuAggregateArgs> = z.object({
  where: SkuWhereInputSchema.optional(),
  orderBy: z.union([ SkuOrderByWithRelationInputSchema.array(),SkuOrderByWithRelationInputSchema ]).optional(),
  cursor: SkuWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const SkuGroupByArgsSchema: z.ZodType<Prisma.SkuGroupByArgs> = z.object({
  where: SkuWhereInputSchema.optional(),
  orderBy: z.union([ SkuOrderByWithAggregationInputSchema.array(),SkuOrderByWithAggregationInputSchema ]).optional(),
  by: SkuScalarFieldEnumSchema.array(),
  having: SkuScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const SkuFindUniqueArgsSchema: z.ZodType<Prisma.SkuFindUniqueArgs> = z.object({
  select: SkuSelectSchema.optional(),
  include: SkuIncludeSchema.optional(),
  where: SkuWhereUniqueInputSchema,
}).strict()

export const SkuFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SkuFindUniqueOrThrowArgs> = z.object({
  select: SkuSelectSchema.optional(),
  include: SkuIncludeSchema.optional(),
  where: SkuWhereUniqueInputSchema,
}).strict()

export const StockFindFirstArgsSchema: z.ZodType<Prisma.StockFindFirstArgs> = z.object({
  select: StockSelectSchema.optional(),
  include: StockIncludeSchema.optional(),
  where: StockWhereInputSchema.optional(),
  orderBy: z.union([ StockOrderByWithRelationInputSchema.array(),StockOrderByWithRelationInputSchema ]).optional(),
  cursor: StockWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: StockScalarFieldEnumSchema.array().optional(),
}).strict()

export const StockFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StockFindFirstOrThrowArgs> = z.object({
  select: StockSelectSchema.optional(),
  include: StockIncludeSchema.optional(),
  where: StockWhereInputSchema.optional(),
  orderBy: z.union([ StockOrderByWithRelationInputSchema.array(),StockOrderByWithRelationInputSchema ]).optional(),
  cursor: StockWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: StockScalarFieldEnumSchema.array().optional(),
}).strict()

export const StockFindManyArgsSchema: z.ZodType<Prisma.StockFindManyArgs> = z.object({
  select: StockSelectSchema.optional(),
  include: StockIncludeSchema.optional(),
  where: StockWhereInputSchema.optional(),
  orderBy: z.union([ StockOrderByWithRelationInputSchema.array(),StockOrderByWithRelationInputSchema ]).optional(),
  cursor: StockWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: StockScalarFieldEnumSchema.array().optional(),
}).strict()

export const StockAggregateArgsSchema: z.ZodType<Prisma.StockAggregateArgs> = z.object({
  where: StockWhereInputSchema.optional(),
  orderBy: z.union([ StockOrderByWithRelationInputSchema.array(),StockOrderByWithRelationInputSchema ]).optional(),
  cursor: StockWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const StockGroupByArgsSchema: z.ZodType<Prisma.StockGroupByArgs> = z.object({
  where: StockWhereInputSchema.optional(),
  orderBy: z.union([ StockOrderByWithAggregationInputSchema.array(),StockOrderByWithAggregationInputSchema ]).optional(),
  by: StockScalarFieldEnumSchema.array(),
  having: StockScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const StockFindUniqueArgsSchema: z.ZodType<Prisma.StockFindUniqueArgs> = z.object({
  select: StockSelectSchema.optional(),
  include: StockIncludeSchema.optional(),
  where: StockWhereUniqueInputSchema,
}).strict()

export const StockFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.StockFindUniqueOrThrowArgs> = z.object({
  select: StockSelectSchema.optional(),
  include: StockIncludeSchema.optional(),
  where: StockWhereUniqueInputSchema,
}).strict()

export const GroupFindFirstArgsSchema: z.ZodType<Prisma.GroupFindFirstArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereInputSchema.optional(),
  orderBy: z.union([ GroupOrderByWithRelationInputSchema.array(),GroupOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: GroupScalarFieldEnumSchema.array().optional(),
}).strict()

export const GroupFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GroupFindFirstOrThrowArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereInputSchema.optional(),
  orderBy: z.union([ GroupOrderByWithRelationInputSchema.array(),GroupOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: GroupScalarFieldEnumSchema.array().optional(),
}).strict()

export const GroupFindManyArgsSchema: z.ZodType<Prisma.GroupFindManyArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereInputSchema.optional(),
  orderBy: z.union([ GroupOrderByWithRelationInputSchema.array(),GroupOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: GroupScalarFieldEnumSchema.array().optional(),
}).strict()

export const GroupAggregateArgsSchema: z.ZodType<Prisma.GroupAggregateArgs> = z.object({
  where: GroupWhereInputSchema.optional(),
  orderBy: z.union([ GroupOrderByWithRelationInputSchema.array(),GroupOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const GroupGroupByArgsSchema: z.ZodType<Prisma.GroupGroupByArgs> = z.object({
  where: GroupWhereInputSchema.optional(),
  orderBy: z.union([ GroupOrderByWithAggregationInputSchema.array(),GroupOrderByWithAggregationInputSchema ]).optional(),
  by: GroupScalarFieldEnumSchema.array(),
  having: GroupScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const GroupFindUniqueArgsSchema: z.ZodType<Prisma.GroupFindUniqueArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereUniqueInputSchema,
}).strict()

export const GroupFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GroupFindUniqueOrThrowArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereUniqueInputSchema,
}).strict()

export const CategoryFindFirstArgsSchema: z.ZodType<Prisma.CategoryFindFirstArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CategoryScalarFieldEnumSchema.array().optional(),
}).strict()

export const CategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindFirstOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CategoryScalarFieldEnumSchema.array().optional(),
}).strict()

export const CategoryFindManyArgsSchema: z.ZodType<Prisma.CategoryFindManyArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CategoryScalarFieldEnumSchema.array().optional(),
}).strict()

export const CategoryAggregateArgsSchema: z.ZodType<Prisma.CategoryAggregateArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CategoryGroupByArgsSchema: z.ZodType<Prisma.CategoryGroupByArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithAggregationInputSchema.array(),CategoryOrderByWithAggregationInputSchema ]).optional(),
  by: CategoryScalarFieldEnumSchema.array(),
  having: CategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CategoryFindUniqueArgsSchema: z.ZodType<Prisma.CategoryFindUniqueArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict()

export const CategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindUniqueOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict()

export const ProductTagFindFirstArgsSchema: z.ZodType<Prisma.ProductTagFindFirstArgs> = z.object({
  select: ProductTagSelectSchema.optional(),
  include: ProductTagIncludeSchema.optional(),
  where: ProductTagWhereInputSchema.optional(),
  orderBy: z.union([ ProductTagOrderByWithRelationInputSchema.array(),ProductTagOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductTagScalarFieldEnumSchema.array().optional(),
}).strict()

export const ProductTagFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductTagFindFirstOrThrowArgs> = z.object({
  select: ProductTagSelectSchema.optional(),
  include: ProductTagIncludeSchema.optional(),
  where: ProductTagWhereInputSchema.optional(),
  orderBy: z.union([ ProductTagOrderByWithRelationInputSchema.array(),ProductTagOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductTagScalarFieldEnumSchema.array().optional(),
}).strict()

export const ProductTagFindManyArgsSchema: z.ZodType<Prisma.ProductTagFindManyArgs> = z.object({
  select: ProductTagSelectSchema.optional(),
  include: ProductTagIncludeSchema.optional(),
  where: ProductTagWhereInputSchema.optional(),
  orderBy: z.union([ ProductTagOrderByWithRelationInputSchema.array(),ProductTagOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductTagScalarFieldEnumSchema.array().optional(),
}).strict()

export const ProductTagAggregateArgsSchema: z.ZodType<Prisma.ProductTagAggregateArgs> = z.object({
  where: ProductTagWhereInputSchema.optional(),
  orderBy: z.union([ ProductTagOrderByWithRelationInputSchema.array(),ProductTagOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProductTagGroupByArgsSchema: z.ZodType<Prisma.ProductTagGroupByArgs> = z.object({
  where: ProductTagWhereInputSchema.optional(),
  orderBy: z.union([ ProductTagOrderByWithAggregationInputSchema.array(),ProductTagOrderByWithAggregationInputSchema ]).optional(),
  by: ProductTagScalarFieldEnumSchema.array(),
  having: ProductTagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProductTagFindUniqueArgsSchema: z.ZodType<Prisma.ProductTagFindUniqueArgs> = z.object({
  select: ProductTagSelectSchema.optional(),
  include: ProductTagIncludeSchema.optional(),
  where: ProductTagWhereUniqueInputSchema,
}).strict()

export const ProductTagFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductTagFindUniqueOrThrowArgs> = z.object({
  select: ProductTagSelectSchema.optional(),
  include: ProductTagIncludeSchema.optional(),
  where: ProductTagWhereUniqueInputSchema,
}).strict()

export const StockTagFindFirstArgsSchema: z.ZodType<Prisma.StockTagFindFirstArgs> = z.object({
  select: StockTagSelectSchema.optional(),
  include: StockTagIncludeSchema.optional(),
  where: StockTagWhereInputSchema.optional(),
  orderBy: z.union([ StockTagOrderByWithRelationInputSchema.array(),StockTagOrderByWithRelationInputSchema ]).optional(),
  cursor: StockTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: StockTagScalarFieldEnumSchema.array().optional(),
}).strict()

export const StockTagFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StockTagFindFirstOrThrowArgs> = z.object({
  select: StockTagSelectSchema.optional(),
  include: StockTagIncludeSchema.optional(),
  where: StockTagWhereInputSchema.optional(),
  orderBy: z.union([ StockTagOrderByWithRelationInputSchema.array(),StockTagOrderByWithRelationInputSchema ]).optional(),
  cursor: StockTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: StockTagScalarFieldEnumSchema.array().optional(),
}).strict()

export const StockTagFindManyArgsSchema: z.ZodType<Prisma.StockTagFindManyArgs> = z.object({
  select: StockTagSelectSchema.optional(),
  include: StockTagIncludeSchema.optional(),
  where: StockTagWhereInputSchema.optional(),
  orderBy: z.union([ StockTagOrderByWithRelationInputSchema.array(),StockTagOrderByWithRelationInputSchema ]).optional(),
  cursor: StockTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: StockTagScalarFieldEnumSchema.array().optional(),
}).strict()

export const StockTagAggregateArgsSchema: z.ZodType<Prisma.StockTagAggregateArgs> = z.object({
  where: StockTagWhereInputSchema.optional(),
  orderBy: z.union([ StockTagOrderByWithRelationInputSchema.array(),StockTagOrderByWithRelationInputSchema ]).optional(),
  cursor: StockTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const StockTagGroupByArgsSchema: z.ZodType<Prisma.StockTagGroupByArgs> = z.object({
  where: StockTagWhereInputSchema.optional(),
  orderBy: z.union([ StockTagOrderByWithAggregationInputSchema.array(),StockTagOrderByWithAggregationInputSchema ]).optional(),
  by: StockTagScalarFieldEnumSchema.array(),
  having: StockTagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const StockTagFindUniqueArgsSchema: z.ZodType<Prisma.StockTagFindUniqueArgs> = z.object({
  select: StockTagSelectSchema.optional(),
  include: StockTagIncludeSchema.optional(),
  where: StockTagWhereUniqueInputSchema,
}).strict()

export const StockTagFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.StockTagFindUniqueOrThrowArgs> = z.object({
  select: StockTagSelectSchema.optional(),
  include: StockTagIncludeSchema.optional(),
  where: StockTagWhereUniqueInputSchema,
}).strict()

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AccountScalarFieldEnumSchema.array().optional(),
}).strict()

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AccountScalarFieldEnumSchema.array().optional(),
}).strict()

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AccountScalarFieldEnumSchema.array().optional(),
}).strict()

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithAggregationInputSchema.array(),AccountOrderByWithAggregationInputSchema ]).optional(),
  by: AccountScalarFieldEnumSchema.array(),
  having: AccountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict()

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict()

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SessionScalarFieldEnumSchema.array().optional(),
}).strict()

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SessionScalarFieldEnumSchema.array().optional(),
}).strict()

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SessionScalarFieldEnumSchema.array().optional(),
}).strict()

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithAggregationInputSchema.array(),SessionOrderByWithAggregationInputSchema ]).optional(),
  by: SessionScalarFieldEnumSchema.array(),
  having: SessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const VerificationTokenFindFirstArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: VerificationTokenScalarFieldEnumSchema.array().optional(),
}).strict()

export const VerificationTokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: VerificationTokenScalarFieldEnumSchema.array().optional(),
}).strict()

export const VerificationTokenFindManyArgsSchema: z.ZodType<Prisma.VerificationTokenFindManyArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: VerificationTokenScalarFieldEnumSchema.array().optional(),
}).strict()

export const VerificationTokenAggregateArgsSchema: z.ZodType<Prisma.VerificationTokenAggregateArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const VerificationTokenGroupByArgsSchema: z.ZodType<Prisma.VerificationTokenGroupByArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithAggregationInputSchema.array(),VerificationTokenOrderByWithAggregationInputSchema ]).optional(),
  by: VerificationTokenScalarFieldEnumSchema.array(),
  having: VerificationTokenScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const VerificationTokenFindUniqueArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict()

export const VerificationTokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict()

export const ExpiryDateCreateArgsSchema: z.ZodType<Prisma.ExpiryDateCreateArgs> = z.object({
  select: ExpiryDateSelectSchema.optional(),
  include: ExpiryDateIncludeSchema.optional(),
  data: z.union([ ExpiryDateCreateInputSchema,ExpiryDateUncheckedCreateInputSchema ]),
}).strict()

export const ExpiryDateUpsertArgsSchema: z.ZodType<Prisma.ExpiryDateUpsertArgs> = z.object({
  select: ExpiryDateSelectSchema.optional(),
  include: ExpiryDateIncludeSchema.optional(),
  where: ExpiryDateWhereUniqueInputSchema,
  create: z.union([ ExpiryDateCreateInputSchema,ExpiryDateUncheckedCreateInputSchema ]),
  update: z.union([ ExpiryDateUpdateInputSchema,ExpiryDateUncheckedUpdateInputSchema ]),
}).strict()

export const ExpiryDateCreateManyArgsSchema: z.ZodType<Prisma.ExpiryDateCreateManyArgs> = z.object({
  data: z.union([ ExpiryDateCreateManyInputSchema,ExpiryDateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ExpiryDateDeleteArgsSchema: z.ZodType<Prisma.ExpiryDateDeleteArgs> = z.object({
  select: ExpiryDateSelectSchema.optional(),
  include: ExpiryDateIncludeSchema.optional(),
  where: ExpiryDateWhereUniqueInputSchema,
}).strict()

export const ExpiryDateUpdateArgsSchema: z.ZodType<Prisma.ExpiryDateUpdateArgs> = z.object({
  select: ExpiryDateSelectSchema.optional(),
  include: ExpiryDateIncludeSchema.optional(),
  data: z.union([ ExpiryDateUpdateInputSchema,ExpiryDateUncheckedUpdateInputSchema ]),
  where: ExpiryDateWhereUniqueInputSchema,
}).strict()

export const ExpiryDateUpdateManyArgsSchema: z.ZodType<Prisma.ExpiryDateUpdateManyArgs> = z.object({
  data: z.union([ ExpiryDateUpdateManyMutationInputSchema,ExpiryDateUncheckedUpdateManyInputSchema ]),
  where: ExpiryDateWhereInputSchema.optional(),
}).strict()

export const ExpiryDateDeleteManyArgsSchema: z.ZodType<Prisma.ExpiryDateDeleteManyArgs> = z.object({
  where: ExpiryDateWhereInputSchema.optional(),
}).strict()

export const JanCreateArgsSchema: z.ZodType<Prisma.JanCreateArgs> = z.object({
  select: JanSelectSchema.optional(),
  include: JanIncludeSchema.optional(),
  data: z.union([ JanCreateInputSchema,JanUncheckedCreateInputSchema ]),
}).strict()

export const JanUpsertArgsSchema: z.ZodType<Prisma.JanUpsertArgs> = z.object({
  select: JanSelectSchema.optional(),
  include: JanIncludeSchema.optional(),
  where: JanWhereUniqueInputSchema,
  create: z.union([ JanCreateInputSchema,JanUncheckedCreateInputSchema ]),
  update: z.union([ JanUpdateInputSchema,JanUncheckedUpdateInputSchema ]),
}).strict()

export const JanCreateManyArgsSchema: z.ZodType<Prisma.JanCreateManyArgs> = z.object({
  data: z.union([ JanCreateManyInputSchema,JanCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const JanDeleteArgsSchema: z.ZodType<Prisma.JanDeleteArgs> = z.object({
  select: JanSelectSchema.optional(),
  include: JanIncludeSchema.optional(),
  where: JanWhereUniqueInputSchema,
}).strict()

export const JanUpdateArgsSchema: z.ZodType<Prisma.JanUpdateArgs> = z.object({
  select: JanSelectSchema.optional(),
  include: JanIncludeSchema.optional(),
  data: z.union([ JanUpdateInputSchema,JanUncheckedUpdateInputSchema ]),
  where: JanWhereUniqueInputSchema,
}).strict()

export const JanUpdateManyArgsSchema: z.ZodType<Prisma.JanUpdateManyArgs> = z.object({
  data: z.union([ JanUpdateManyMutationInputSchema,JanUncheckedUpdateManyInputSchema ]),
  where: JanWhereInputSchema.optional(),
}).strict()

export const JanDeleteManyArgsSchema: z.ZodType<Prisma.JanDeleteManyArgs> = z.object({
  where: JanWhereInputSchema.optional(),
}).strict()

export const JanSiteCreateArgsSchema: z.ZodType<Prisma.JanSiteCreateArgs> = z.object({
  select: JanSiteSelectSchema.optional(),
  include: JanSiteIncludeSchema.optional(),
  data: z.union([ JanSiteCreateInputSchema,JanSiteUncheckedCreateInputSchema ]),
}).strict()

export const JanSiteUpsertArgsSchema: z.ZodType<Prisma.JanSiteUpsertArgs> = z.object({
  select: JanSiteSelectSchema.optional(),
  include: JanSiteIncludeSchema.optional(),
  where: JanSiteWhereUniqueInputSchema,
  create: z.union([ JanSiteCreateInputSchema,JanSiteUncheckedCreateInputSchema ]),
  update: z.union([ JanSiteUpdateInputSchema,JanSiteUncheckedUpdateInputSchema ]),
}).strict()

export const JanSiteCreateManyArgsSchema: z.ZodType<Prisma.JanSiteCreateManyArgs> = z.object({
  data: z.union([ JanSiteCreateManyInputSchema,JanSiteCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const JanSiteDeleteArgsSchema: z.ZodType<Prisma.JanSiteDeleteArgs> = z.object({
  select: JanSiteSelectSchema.optional(),
  include: JanSiteIncludeSchema.optional(),
  where: JanSiteWhereUniqueInputSchema,
}).strict()

export const JanSiteUpdateArgsSchema: z.ZodType<Prisma.JanSiteUpdateArgs> = z.object({
  select: JanSiteSelectSchema.optional(),
  include: JanSiteIncludeSchema.optional(),
  data: z.union([ JanSiteUpdateInputSchema,JanSiteUncheckedUpdateInputSchema ]),
  where: JanSiteWhereUniqueInputSchema,
}).strict()

export const JanSiteUpdateManyArgsSchema: z.ZodType<Prisma.JanSiteUpdateManyArgs> = z.object({
  data: z.union([ JanSiteUpdateManyMutationInputSchema,JanSiteUncheckedUpdateManyInputSchema ]),
  where: JanSiteWhereInputSchema.optional(),
}).strict()

export const JanSiteDeleteManyArgsSchema: z.ZodType<Prisma.JanSiteDeleteManyArgs> = z.object({
  where: JanSiteWhereInputSchema.optional(),
}).strict()

export const NoteCreateArgsSchema: z.ZodType<Prisma.NoteCreateArgs> = z.object({
  select: NoteSelectSchema.optional(),
  include: NoteIncludeSchema.optional(),
  data: z.union([ NoteCreateInputSchema,NoteUncheckedCreateInputSchema ]),
}).strict()

export const NoteUpsertArgsSchema: z.ZodType<Prisma.NoteUpsertArgs> = z.object({
  select: NoteSelectSchema.optional(),
  include: NoteIncludeSchema.optional(),
  where: NoteWhereUniqueInputSchema,
  create: z.union([ NoteCreateInputSchema,NoteUncheckedCreateInputSchema ]),
  update: z.union([ NoteUpdateInputSchema,NoteUncheckedUpdateInputSchema ]),
}).strict()

export const NoteCreateManyArgsSchema: z.ZodType<Prisma.NoteCreateManyArgs> = z.object({
  data: z.union([ NoteCreateManyInputSchema,NoteCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const NoteDeleteArgsSchema: z.ZodType<Prisma.NoteDeleteArgs> = z.object({
  select: NoteSelectSchema.optional(),
  include: NoteIncludeSchema.optional(),
  where: NoteWhereUniqueInputSchema,
}).strict()

export const NoteUpdateArgsSchema: z.ZodType<Prisma.NoteUpdateArgs> = z.object({
  select: NoteSelectSchema.optional(),
  include: NoteIncludeSchema.optional(),
  data: z.union([ NoteUpdateInputSchema,NoteUncheckedUpdateInputSchema ]),
  where: NoteWhereUniqueInputSchema,
}).strict()

export const NoteUpdateManyArgsSchema: z.ZodType<Prisma.NoteUpdateManyArgs> = z.object({
  data: z.union([ NoteUpdateManyMutationInputSchema,NoteUncheckedUpdateManyInputSchema ]),
  where: NoteWhereInputSchema.optional(),
}).strict()

export const NoteDeleteManyArgsSchema: z.ZodType<Prisma.NoteDeleteManyArgs> = z.object({
  where: NoteWhereInputSchema.optional(),
}).strict()

export const ProductCreateArgsSchema: z.ZodType<Prisma.ProductCreateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
}).strict()

export const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
  create: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
  update: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
}).strict()

export const ProductCreateManyArgsSchema: z.ZodType<Prisma.ProductCreateManyArgs> = z.object({
  data: z.union([ ProductCreateManyInputSchema,ProductCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ProductDeleteArgsSchema: z.ZodType<Prisma.ProductDeleteArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const ProductUpdateManyArgsSchema: z.ZodType<Prisma.ProductUpdateManyArgs> = z.object({
  data: z.union([ ProductUpdateManyMutationInputSchema,ProductUncheckedUpdateManyInputSchema ]),
  where: ProductWhereInputSchema.optional(),
}).strict()

export const ProductDeleteManyArgsSchema: z.ZodType<Prisma.ProductDeleteManyArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
}).strict()

export const SkuCreateArgsSchema: z.ZodType<Prisma.SkuCreateArgs> = z.object({
  select: SkuSelectSchema.optional(),
  include: SkuIncludeSchema.optional(),
  data: z.union([ SkuCreateInputSchema,SkuUncheckedCreateInputSchema ]),
}).strict()

export const SkuUpsertArgsSchema: z.ZodType<Prisma.SkuUpsertArgs> = z.object({
  select: SkuSelectSchema.optional(),
  include: SkuIncludeSchema.optional(),
  where: SkuWhereUniqueInputSchema,
  create: z.union([ SkuCreateInputSchema,SkuUncheckedCreateInputSchema ]),
  update: z.union([ SkuUpdateInputSchema,SkuUncheckedUpdateInputSchema ]),
}).strict()

export const SkuCreateManyArgsSchema: z.ZodType<Prisma.SkuCreateManyArgs> = z.object({
  data: z.union([ SkuCreateManyInputSchema,SkuCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const SkuDeleteArgsSchema: z.ZodType<Prisma.SkuDeleteArgs> = z.object({
  select: SkuSelectSchema.optional(),
  include: SkuIncludeSchema.optional(),
  where: SkuWhereUniqueInputSchema,
}).strict()

export const SkuUpdateArgsSchema: z.ZodType<Prisma.SkuUpdateArgs> = z.object({
  select: SkuSelectSchema.optional(),
  include: SkuIncludeSchema.optional(),
  data: z.union([ SkuUpdateInputSchema,SkuUncheckedUpdateInputSchema ]),
  where: SkuWhereUniqueInputSchema,
}).strict()

export const SkuUpdateManyArgsSchema: z.ZodType<Prisma.SkuUpdateManyArgs> = z.object({
  data: z.union([ SkuUpdateManyMutationInputSchema,SkuUncheckedUpdateManyInputSchema ]),
  where: SkuWhereInputSchema.optional(),
}).strict()

export const SkuDeleteManyArgsSchema: z.ZodType<Prisma.SkuDeleteManyArgs> = z.object({
  where: SkuWhereInputSchema.optional(),
}).strict()

export const StockCreateArgsSchema: z.ZodType<Prisma.StockCreateArgs> = z.object({
  select: StockSelectSchema.optional(),
  include: StockIncludeSchema.optional(),
  data: z.union([ StockCreateInputSchema,StockUncheckedCreateInputSchema ]),
}).strict()

export const StockUpsertArgsSchema: z.ZodType<Prisma.StockUpsertArgs> = z.object({
  select: StockSelectSchema.optional(),
  include: StockIncludeSchema.optional(),
  where: StockWhereUniqueInputSchema,
  create: z.union([ StockCreateInputSchema,StockUncheckedCreateInputSchema ]),
  update: z.union([ StockUpdateInputSchema,StockUncheckedUpdateInputSchema ]),
}).strict()

export const StockCreateManyArgsSchema: z.ZodType<Prisma.StockCreateManyArgs> = z.object({
  data: z.union([ StockCreateManyInputSchema,StockCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const StockDeleteArgsSchema: z.ZodType<Prisma.StockDeleteArgs> = z.object({
  select: StockSelectSchema.optional(),
  include: StockIncludeSchema.optional(),
  where: StockWhereUniqueInputSchema,
}).strict()

export const StockUpdateArgsSchema: z.ZodType<Prisma.StockUpdateArgs> = z.object({
  select: StockSelectSchema.optional(),
  include: StockIncludeSchema.optional(),
  data: z.union([ StockUpdateInputSchema,StockUncheckedUpdateInputSchema ]),
  where: StockWhereUniqueInputSchema,
}).strict()

export const StockUpdateManyArgsSchema: z.ZodType<Prisma.StockUpdateManyArgs> = z.object({
  data: z.union([ StockUpdateManyMutationInputSchema,StockUncheckedUpdateManyInputSchema ]),
  where: StockWhereInputSchema.optional(),
}).strict()

export const StockDeleteManyArgsSchema: z.ZodType<Prisma.StockDeleteManyArgs> = z.object({
  where: StockWhereInputSchema.optional(),
}).strict()

export const GroupCreateArgsSchema: z.ZodType<Prisma.GroupCreateArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  data: z.union([ GroupCreateInputSchema,GroupUncheckedCreateInputSchema ]),
}).strict()

export const GroupUpsertArgsSchema: z.ZodType<Prisma.GroupUpsertArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereUniqueInputSchema,
  create: z.union([ GroupCreateInputSchema,GroupUncheckedCreateInputSchema ]),
  update: z.union([ GroupUpdateInputSchema,GroupUncheckedUpdateInputSchema ]),
}).strict()

export const GroupCreateManyArgsSchema: z.ZodType<Prisma.GroupCreateManyArgs> = z.object({
  data: z.union([ GroupCreateManyInputSchema,GroupCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const GroupDeleteArgsSchema: z.ZodType<Prisma.GroupDeleteArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereUniqueInputSchema,
}).strict()

export const GroupUpdateArgsSchema: z.ZodType<Prisma.GroupUpdateArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  data: z.union([ GroupUpdateInputSchema,GroupUncheckedUpdateInputSchema ]),
  where: GroupWhereUniqueInputSchema,
}).strict()

export const GroupUpdateManyArgsSchema: z.ZodType<Prisma.GroupUpdateManyArgs> = z.object({
  data: z.union([ GroupUpdateManyMutationInputSchema,GroupUncheckedUpdateManyInputSchema ]),
  where: GroupWhereInputSchema.optional(),
}).strict()

export const GroupDeleteManyArgsSchema: z.ZodType<Prisma.GroupDeleteManyArgs> = z.object({
  where: GroupWhereInputSchema.optional(),
}).strict()

export const CategoryCreateArgsSchema: z.ZodType<Prisma.CategoryCreateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
}).strict()

export const CategoryUpsertArgsSchema: z.ZodType<Prisma.CategoryUpsertArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
  create: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
  update: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
}).strict()

export const CategoryCreateManyArgsSchema: z.ZodType<Prisma.CategoryCreateManyArgs> = z.object({
  data: z.union([ CategoryCreateManyInputSchema,CategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const CategoryDeleteArgsSchema: z.ZodType<Prisma.CategoryDeleteArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict()

export const CategoryUpdateArgsSchema: z.ZodType<Prisma.CategoryUpdateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
  where: CategoryWhereUniqueInputSchema,
}).strict()

export const CategoryUpdateManyArgsSchema: z.ZodType<Prisma.CategoryUpdateManyArgs> = z.object({
  data: z.union([ CategoryUpdateManyMutationInputSchema,CategoryUncheckedUpdateManyInputSchema ]),
  where: CategoryWhereInputSchema.optional(),
}).strict()

export const CategoryDeleteManyArgsSchema: z.ZodType<Prisma.CategoryDeleteManyArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
}).strict()

export const ProductTagCreateArgsSchema: z.ZodType<Prisma.ProductTagCreateArgs> = z.object({
  select: ProductTagSelectSchema.optional(),
  include: ProductTagIncludeSchema.optional(),
  data: z.union([ ProductTagCreateInputSchema,ProductTagUncheckedCreateInputSchema ]),
}).strict()

export const ProductTagUpsertArgsSchema: z.ZodType<Prisma.ProductTagUpsertArgs> = z.object({
  select: ProductTagSelectSchema.optional(),
  include: ProductTagIncludeSchema.optional(),
  where: ProductTagWhereUniqueInputSchema,
  create: z.union([ ProductTagCreateInputSchema,ProductTagUncheckedCreateInputSchema ]),
  update: z.union([ ProductTagUpdateInputSchema,ProductTagUncheckedUpdateInputSchema ]),
}).strict()

export const ProductTagCreateManyArgsSchema: z.ZodType<Prisma.ProductTagCreateManyArgs> = z.object({
  data: z.union([ ProductTagCreateManyInputSchema,ProductTagCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ProductTagDeleteArgsSchema: z.ZodType<Prisma.ProductTagDeleteArgs> = z.object({
  select: ProductTagSelectSchema.optional(),
  include: ProductTagIncludeSchema.optional(),
  where: ProductTagWhereUniqueInputSchema,
}).strict()

export const ProductTagUpdateArgsSchema: z.ZodType<Prisma.ProductTagUpdateArgs> = z.object({
  select: ProductTagSelectSchema.optional(),
  include: ProductTagIncludeSchema.optional(),
  data: z.union([ ProductTagUpdateInputSchema,ProductTagUncheckedUpdateInputSchema ]),
  where: ProductTagWhereUniqueInputSchema,
}).strict()

export const ProductTagUpdateManyArgsSchema: z.ZodType<Prisma.ProductTagUpdateManyArgs> = z.object({
  data: z.union([ ProductTagUpdateManyMutationInputSchema,ProductTagUncheckedUpdateManyInputSchema ]),
  where: ProductTagWhereInputSchema.optional(),
}).strict()

export const ProductTagDeleteManyArgsSchema: z.ZodType<Prisma.ProductTagDeleteManyArgs> = z.object({
  where: ProductTagWhereInputSchema.optional(),
}).strict()

export const StockTagCreateArgsSchema: z.ZodType<Prisma.StockTagCreateArgs> = z.object({
  select: StockTagSelectSchema.optional(),
  include: StockTagIncludeSchema.optional(),
  data: z.union([ StockTagCreateInputSchema,StockTagUncheckedCreateInputSchema ]),
}).strict()

export const StockTagUpsertArgsSchema: z.ZodType<Prisma.StockTagUpsertArgs> = z.object({
  select: StockTagSelectSchema.optional(),
  include: StockTagIncludeSchema.optional(),
  where: StockTagWhereUniqueInputSchema,
  create: z.union([ StockTagCreateInputSchema,StockTagUncheckedCreateInputSchema ]),
  update: z.union([ StockTagUpdateInputSchema,StockTagUncheckedUpdateInputSchema ]),
}).strict()

export const StockTagCreateManyArgsSchema: z.ZodType<Prisma.StockTagCreateManyArgs> = z.object({
  data: z.union([ StockTagCreateManyInputSchema,StockTagCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const StockTagDeleteArgsSchema: z.ZodType<Prisma.StockTagDeleteArgs> = z.object({
  select: StockTagSelectSchema.optional(),
  include: StockTagIncludeSchema.optional(),
  where: StockTagWhereUniqueInputSchema,
}).strict()

export const StockTagUpdateArgsSchema: z.ZodType<Prisma.StockTagUpdateArgs> = z.object({
  select: StockTagSelectSchema.optional(),
  include: StockTagIncludeSchema.optional(),
  data: z.union([ StockTagUpdateInputSchema,StockTagUncheckedUpdateInputSchema ]),
  where: StockTagWhereUniqueInputSchema,
}).strict()

export const StockTagUpdateManyArgsSchema: z.ZodType<Prisma.StockTagUpdateManyArgs> = z.object({
  data: z.union([ StockTagUpdateManyMutationInputSchema,StockTagUncheckedUpdateManyInputSchema ]),
  where: StockTagWhereInputSchema.optional(),
}).strict()

export const StockTagDeleteManyArgsSchema: z.ZodType<Prisma.StockTagDeleteManyArgs> = z.object({
  where: StockTagWhereInputSchema.optional(),
}).strict()

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
}).strict()

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
  create: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
  update: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
}).strict()

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema,AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict()

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
  where: AccountWhereUniqueInputSchema,
}).strict()

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema,AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(),
}).strict()

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
}).strict()

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
}).strict()

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
  create: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
  update: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
}).strict()

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema,SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(),
}).strict()

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
}).strict()

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict()

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict()

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict()

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict()

export const VerificationTokenCreateArgsSchema: z.ZodType<Prisma.VerificationTokenCreateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
}).strict()

export const VerificationTokenUpsertArgsSchema: z.ZodType<Prisma.VerificationTokenUpsertArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
  create: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
  update: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
}).strict()

export const VerificationTokenCreateManyArgsSchema: z.ZodType<Prisma.VerificationTokenCreateManyArgs> = z.object({
  data: z.union([ VerificationTokenCreateManyInputSchema,VerificationTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const VerificationTokenDeleteArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict()

export const VerificationTokenUpdateArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict()

export const VerificationTokenUpdateManyArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateManyArgs> = z.object({
  data: z.union([ VerificationTokenUpdateManyMutationInputSchema,VerificationTokenUncheckedUpdateManyInputSchema ]),
  where: VerificationTokenWhereInputSchema.optional(),
}).strict()

export const VerificationTokenDeleteManyArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteManyArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
}).strict()