

export interface Commit {
    hash: string;
    shortHash: string;
    author: string;
    authorEmail: string;
    authorTime: number;
    authorTz: string;
    committer: string;
    committerEmail: string;
    committerTime: number;
    committerTz: string;
    commitMessage: string;
    previousCommit?: string;
    fileName: string;
    change: string;
}
