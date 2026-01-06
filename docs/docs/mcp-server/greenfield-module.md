# Greenfield Module

BNB Greenfield decentralized storage tools.

---

## Overview

The Greenfield (GNFD) module provides tools for interacting with BNB Greenfield, a decentralized storage network built by BNB Chain. It enables AI agents to:

- Store and retrieve files
- Manage storage buckets
- Handle payment accounts
- Query storage providers

---

## Networks

| Network | Description |
|---------|-------------|
| `testnet` | Greenfield testnet (default) |
| `mainnet` | Greenfield mainnet |

---

## Account Tools

### gnfd_get_account_balance

Get account balance.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| address | string | No | Account address |
| privateKey | string | No | Private key (if no address) |
| network | string | No | Network (default: testnet) |

**Returns:**
```json
{
  "address": "0x...",
  "balance": "10.5",
  "denom": "BNB"
}
```

---

### gnfd_get_all_account_balances

Get balances for all accounts (owner + payment accounts).

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| privateKey | string | Yes | Owner private key |
| network | string | No | Network |

**Returns:**
```json
{
  "owner": {
    "address": "0x...",
    "balance": "10.5"
  },
  "paymentAccounts": [
    {
      "address": "0x...",
      "balance": "5.0"
    }
  ]
}
```

---

### gnfd_get_all_sps

Get all storage providers.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| network | string | No | Network |

**Returns:**
```json
{
  "storageProviders": [
    {
      "id": 1,
      "operatorAddress": "0x...",
      "endpoint": "https://sp1.greenfield.io",
      "status": "active",
      "totalStorage": "1000000000000"
    }
  ]
}
```

---

### gnfd_get_module_accounts

Get all Greenfield module accounts.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| network | string | No | Network |

---

## Storage Tools

### gnfd_create_bucket

Create a new storage bucket.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketName | string | No | Bucket name (default: created-by-speraxos) |
| privateKey | string | Yes | Owner private key |
| network | string | No | Network |

**Returns:**
```json
{
  "bucketName": "my-bucket",
  "owner": "0x...",
  "txHash": "0x...",
  "status": "created"
}
```

---

### gnfd_list_buckets

List all buckets owned by an address.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| address | string | No | Owner address |
| privateKey | string | No | Private key (if no address) |
| network | string | No | Network |

**Returns:**
```json
{
  "buckets": [
    {
      "name": "my-bucket",
      "createAt": "2026-01-01T00:00:00Z",
      "objectCount": 15,
      "storageSize": "1048576"
    }
  ]
}
```

---

### gnfd_get_bucket

Get bucket details.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketName | string | Yes | Bucket name |
| network | string | No | Network |

---

### gnfd_delete_bucket

Delete a bucket (must be empty).

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketName | string | Yes | Bucket name |
| privateKey | string | Yes | Owner private key |
| network | string | No | Network |

---

### gnfd_create_file

Upload a file to a bucket.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| filePath | string | Yes | Absolute path to local file |
| bucketName | string | No | Target bucket |
| objectName | string | No | Name in bucket (default: filename) |
| privateKey | string | Yes | Owner private key |
| network | string | No | Network |

**Returns:**
```json
{
  "objectName": "document.pdf",
  "bucketName": "my-bucket",
  "txHash": "0x...",
  "size": 1048576,
  "contentType": "application/pdf"
}
```

---

### gnfd_list_objects

List objects in a bucket.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketName | string | Yes | Bucket name |
| network | string | No | Network |

**Returns:**
```json
{
  "objects": [
    {
      "name": "document.pdf",
      "size": 1048576,
      "contentType": "application/pdf",
      "createAt": "2026-01-01T00:00:00Z"
    }
  ]
}
```

---

### gnfd_get_object

Get object details.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketName | string | Yes | Bucket name |
| objectName | string | Yes | Object name |
| network | string | No | Network |

---

### gnfd_download_file

Download an object to local file.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketName | string | Yes | Bucket name |
| objectName | string | Yes | Object name |
| outputPath | string | Yes | Local output path |
| privateKey | string | Yes | Owner private key |
| network | string | No | Network |

---

### gnfd_delete_object

Delete an object from bucket.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketName | string | Yes | Bucket name |
| objectName | string | Yes | Object name |
| privateKey | string | Yes | Owner private key |
| network | string | No | Network |

---

## Payment Tools

### gnfd_get_payment_accounts

Get payment accounts for an address.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| address | string | No | Owner address |
| privateKey | string | No | Private key |
| network | string | No | Network |

**Returns:**
```json
{
  "paymentAccounts": [
    {
      "address": "0x...",
      "balance": "5.0",
      "owner": "0x...",
      "refundable": true
    }
  ]
}
```

---

### gnfd_create_payment_account

Create a new payment account.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| privateKey | string | Yes | Owner private key |
| network | string | No | Network |

**Returns:**
```json
{
  "address": "0x...",
  "owner": "0x...",
  "txHash": "0x..."
}
```

---

### gnfd_deposit_to_payment

Deposit BNB to a payment account.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| to | string | Yes | Payment account address |
| amount | string | Yes | Amount in BNB |
| privateKey | string | Yes | Owner private key |
| network | string | No | Network |

**Returns:**
```json
{
  "txHash": "0x...",
  "amount": "1.0",
  "to": "0x...",
  "status": "success"
}
```

---

### gnfd_withdraw_from_payment

Withdraw BNB from a payment account.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| from | string | Yes | Payment account address |
| amount | string | Yes | Amount in BNB |
| privateKey | string | Yes | Owner private key |
| network | string | No | Network |

---

### gnfd_disable_refund

Disable refund for a payment account.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| paymentAddress | string | Yes | Payment account |
| privateKey | string | Yes | Owner private key |
| network | string | No | Network |

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PRIVATE_KEY` | Default private key for operations |
| `GNFD_NETWORK` | Default network (testnet/mainnet) |

---

## Example Workflows

### Upload a File

```
1. gnfd_create_bucket - Create bucket (if needed)
2. gnfd_create_file - Upload file to bucket
3. gnfd_list_objects - Verify upload
```

### Manage Storage Costs

```
1. gnfd_create_payment_account - Create payment account
2. gnfd_deposit_to_payment - Fund the account
3. gnfd_get_payment_accounts - Monitor balance
```

---

## Related Documentation

- [BNB Greenfield Docs](https://docs.bnbchain.org/greenfield-docs/)
- [Greenfield SDK](https://github.com/bnb-chain/greenfield-js-sdk)
