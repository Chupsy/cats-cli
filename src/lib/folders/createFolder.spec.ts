import fs from 'fs'
import path from 'path'
import { createFolders, FolderSchema } from './createFolder'
jest.mock('fs')
const existSync = jest.fn()
const mkdirSync = jest.fn()

describe('lib/createFolder', () => {
  beforeEach(() => {
    fs.mkdirSync = mkdirSync
    fs.existsSync = existSync
    existSync.mockReset()
    mkdirSync.mockReset()
  })
  describe('createFolders', () => {
    it('should not create a folder that already exists', () => {
      existSync.mockReturnValue(true)
      const folderSchema: FolderSchema = {
        path: './root',
        children: [{ path: 'test', children: [] }],
      }
      createFolders(folderSchema)
      expect(existSync).toBeCalledTimes(1)
      expect(existSync).toBeCalledWith(path.join('root', 'test'))
      expect(mkdirSync).not.toBeCalled()
    })

    it('should create a folder that does not exist', () => {
      existSync.mockReturnValue(false)
      const folderSchema: FolderSchema = {
        path: './root',
        children: [{ path: 'test', children: [] }],
      }
      createFolders(folderSchema)
      expect(existSync).toBeCalledTimes(1)
      expect(existSync).toBeCalledWith(path.join('root', 'test'))
      expect(mkdirSync).toBeCalledTimes(1)
      expect(mkdirSync).toBeCalledWith(path.join('root', 'test'))
    })

    it('should create also children of the folder', () => {
      existSync.mockReturnValue(false)
      const folderSchema: FolderSchema = {
        path: './root',
        children: [
          {
            path: 'test',
            children: [
              {
                path: 'child1',
                children: [],
              },
              {
                path: 'child2',
                children: [
                  {
                    path: 'child3',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      }
      createFolders(folderSchema)
      expect(existSync).toBeCalledTimes(4)
      expect(existSync).nthCalledWith(1, path.join('root', 'test'))
      expect(existSync).nthCalledWith(2, path.join('root', 'test', 'child1'))
      expect(existSync).nthCalledWith(3, path.join('root', 'test', 'child2'))
      expect(existSync).nthCalledWith(
        4,
        path.join('root', 'test', 'child2', 'child3')
      )
      expect(mkdirSync).toBeCalledTimes(4)
      expect(mkdirSync).nthCalledWith(1, path.join('root', 'test'))
      expect(mkdirSync).nthCalledWith(2, path.join('root', 'test', 'child1'))
      expect(mkdirSync).nthCalledWith(3, path.join('root', 'test', 'child2'))
      expect(mkdirSync).nthCalledWith(
        4,
        path.join('root', 'test', 'child2', 'child3')
      )
    })
  })
})
