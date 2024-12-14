import shutil
import sys
import os

DATA_PATH = "buildEnv/pnp-data"
PROJECT_PATH = "buildEnv/main"
META_TAG_CHANGE_KEY = r"{/* ADD-META-TAGS */}"


def transfererPublic():
    print("🚀 Executing transferer Public...")
    shutil.copytree(
        f"{DATA_PATH}/public",
        f"{PROJECT_PATH}/public",
        dirs_exist_ok=True
    )
    print("✅ transfererPublic executed successfully!")

def transfererImages():
    print("🚀 Executing transferer images...")
    shutil.copytree(
        f"{DATA_PATH}/images",
        f"{PROJECT_PATH}/public/images",
        dirs_exist_ok=True
    )
    print("✅ transferer images executed successfully!")


def transfererEnv():
    print("🚀 Executing transfererEnv...")
    shutil.copy2(
        f"{DATA_PATH}/.env.local",
        f"{PROJECT_PATH}/.env.local"
    )
    print("✅ transfererEnv executed successfully!")


def transfererMetaTags():
    print("🚀 Executing transfererMetaTags...")
    with open(f"{DATA_PATH}/meta_tags.txt") as r:
        metaTags = r.read()

    _documentPath = f"{PROJECT_PATH}/src/pages/_document.tsx"

    with open(_documentPath) as r:
        doc = r.read()

    changed_doc = doc.replace(META_TAG_CHANGE_KEY, metaTags)

    with open(_documentPath, "w") as w:
        w.write(changed_doc)

    print("✅ transfererMetaTags executed successfully!")


if __name__ == '__main__':
    if not (os.path.exists(DATA_PATH) and os.path.exists(PROJECT_PATH)):
        raise Exception("DATA_PATH and PROJECT_PATH do not exist")
        sys.exit(1)

    transfererPublic()
    transfererImages()
    transfererEnv()
    # transfererMetaTags()
